#!/usr/bin/env python3
"""Scoring & aggregation: classified articles -> data.js for the dashboard.

Mirrors the event engine in index.html exactly:
  EventScore = Severity x Credibility x Corroboration x Velocity x Stage x Decay
  EntityIndexScore = 100 x Raw / (Raw + k)          (saturating roll-up)
  Health = 50 + (oppN - riskN) x 0.72               (netting, same weights)

Derived factors:
  credibility  = trust cell (source_class x segment)
  corroboration= 1.0 + 0.15 x (distinct source classes in cluster - 1), cap 1.5
  velocity     = article volume in the cluster's first 72h (0.8-1.5)
  stage        = allegation 0.6 / probe 1.2 / charge 1.4 / resolution 0.3
  decay        = 0.5 ** (age_days / half_life_days), pillar-specific half-life
  quarantine   = trust cell < 0.5 and corroboration sources < 2

Usage: python3 score.py    (reads data/classified.jsonl, writes ../data.js)
"""
import json
import re
import sys
from collections import defaultdict
from datetime import datetime, timedelta, timezone
from pathlib import Path

HERE = Path(__file__).resolve().parent
IN_PATH = HERE.parent / "data" / "classified.jsonl"
OUT_PATH = HERE.parent / "data.js"
SNAPSHOT = datetime(2026, 6, 30, tzinfo=timezone.utc)

INDICES = {
    "controversy": {"side": "Risk", "weight": 0.22},
    "risk":        {"side": "Risk", "weight": 0.20},
    "esg":         {"side": "Risk", "weight": 0.14},
    "momentum":    {"side": "Opp",  "weight": 0.20},
    "catalyst":    {"side": "Opp",  "weight": 0.14},
    "sentiment":   {"side": "Opp",  "weight": 0.10},
}
INDEX_ORDER = ["controversy", "risk", "esg", "momentum", "catalyst", "sentiment"]
K = 3.0  # sector-calibrated saturation constant (BFSI default)

STAGE_MULT = {"allegation": 0.6, "probe": 1.2, "charge": 1.4, "resolution": 0.3}

# decay half-life in days, per pillar family
HALF_LIFE = {
    "PR & reputational": 21, "Entity tone": 21, "Sectoral": 30, "Forward signal": 30,
    "Commercial": 60, "Strategic": 60, "Bookings": 60, "Capacity": 90, "Corporate": 60,
    "Legal & compliance": 120, "Financial integrity": 150, "Key-person risk": 90,
    "Operational risk": 90, "Financial": 120, "Operational": 120, "Concentration": 150,
    "Environment": 120, "Social": 90, "Governance": 120,
}
DEFAULT_HALF_LIFE = 90

# trust matrix: source class x BFSI segment (columns = segments below)
SEGMENTS = ["Private bank", "PSU bank", "NBFC", "Housing finance", "Gold-loan NBFC"]
TRUST = {
    "Regulator & exchange":    [0.95, 0.95, 0.93, 0.93, 0.93],
    "Agency wires":            [0.85, 0.85, 0.83, 0.83, 0.83],
    "Business press":          [0.78, 0.76, 0.74, 0.74, 0.72],
    "General & regional press":[0.55, 0.55, 0.50, 0.50, 0.48],
    "Aggregators & other":     [0.35, 0.35, 0.32, 0.32, 0.30],
}


def trust_cell(source_class, segment):
    row = TRUST.get(source_class, TRUST["Aggregators & other"])
    i = SEGMENTS.index(segment) if segment in SEGMENTS else 2
    return row[i]


def parse_date(seendate):
    # GDELT seendate: 20260315T104500Z
    m = re.match(r"(\d{4})(\d{2})(\d{2})T?(\d{2})?", seendate or "")
    if not m:
        return SNAPSHOT
    return datetime(int(m.group(1)), int(m.group(2)), int(m.group(3)),
                    int(m.group(4) or 0), tzinfo=timezone.utc)


def rel_time(dt):
    days = max(0, (SNAPSHOT - dt).days)
    if days == 0:
        return "today"
    if days == 1:
        return "1d ago"
    if days < 7:
        return f"{days}d ago"
    if days < 30:
        return f"{days // 7}w ago"
    return f"{days // 30}mo ago"


def load_events(cfg):
    """Group classified articles into event clusters per entity."""
    segments = {e["id"]: e["segment"] for e in cfg["entities"]}
    clusters = defaultdict(list)
    for line in IN_PATH.read_text().splitlines():
        if not line.strip():
            continue
        r = json.loads(line)
        clusters[(r["entity"], r["cluster"], r["index"])].append(r)

    events = defaultdict(list)
    for (ent, _slug, idx), arts in clusters.items():
        arts.sort(key=lambda a: a["seendate"])
        lead = max(arts, key=lambda a: (trust_cell(a["source_class"], segments[ent]), a["severity"]))
        dates = [parse_date(a["seendate"]) for a in arts]
        first = min(dates)
        classes = sorted({a["source_class"] for a in arts},
                         key=lambda c: -trust_cell(c, segments[ent]))
        n72 = sum(1 for d in dates if (d - first).total_seconds() <= 72 * 3600)
        velocity = min(1.5, 0.8 + 0.1 * min(7, n72 - 1) if n72 > 1 else 0.9)
        corr = min(1.5, 1.0 + 0.15 * (len(classes) - 1))
        sev = max(a["severity"] for a in arts)
        stage = lead.get("stage")
        half = HALF_LIFE.get(lead["pillar"], DEFAULT_HALF_LIFE)
        age = max(0, (SNAPSHOT - max(dates)).days)
        decay = round(max(0.05, 0.5 ** (age / half)), 2)
        cred = trust_cell(lead["source_class"], segments[ent])
        quarantined = cred < 0.5 and len(classes) < 2
        events[ent].append({
            "arts": arts, "lead": lead, "index": idx, "pillar": lead["pillar"],
            "sev": round(sev, 2), "cred": cred, "corr": round(corr, 2),
            "vel": round(velocity, 2), "stg": STAGE_MULT.get(stage, 1.0),
            "stage": stage, "dec": decay, "quarantined": quarantined,
            "classes": classes, "first": first, "last": max(dates),
            "dir": lead["direction"], "role": lead["role"],
        })
    return events


def escore(e):
    return e["sev"] * e["cred"] * e["corr"] * e["vel"] * e["stg"] * e["dec"]


def index_scores(evts, at=None):
    """Saturating roll-up per index; optionally as-of a date (for history)."""
    raw = defaultdict(float)
    for e in evts:
        if e["quarantined"]:
            continue
        if at is not None:
            if e["first"] > at:
                continue
            half = HALF_LIFE.get(e["pillar"], DEFAULT_HALF_LIFE)
            age = max(0, (at - e["last"]).days)
            dec = max(0.05, 0.5 ** (age / half))
            s = e["sev"] * e["cred"] * e["corr"] * e["vel"] * e["stg"] * dec
        else:
            s = escore(e)
        raw[e["index"]] += s
    return {k: round(100 * raw[k] / (raw[k] + K)) if raw[k] else 0 for k in INDEX_ORDER}


def composite(scores):
    opp = sum(scores[k] * INDICES[k]["weight"] for k in ("momentum", "catalyst", "sentiment"))
    risk = sum(scores[k] * INDICES[k]["weight"] for k in ("controversy", "risk", "esg"))
    opp_w = sum(INDICES[k]["weight"] for k in ("momentum", "catalyst", "sentiment"))
    risk_w = sum(INDICES[k]["weight"] for k in ("controversy", "risk", "esg"))
    opp_n, risk_n = opp / opp_w, risk / risk_w
    return max(0, min(100, round(50 + (opp_n - risk_n) * 0.72)))


def narrative(name, evts, scores):
    top = sorted((e for e in evts if not e["quarantined"]), key=escore, reverse=True)[:2]
    q = [e for e in evts if e["quarantined"]]
    bits = []
    for e in top:
        tone = "lifting the opportunity side" if e["dir"] == "pos" else f"driving the {e['index']} index"
        bits.append(f"{e['lead']['summary'].rstrip('.')} — {tone}")
    s = f"{name}: " + ". ".join(bits) + "." if bits else f"{name}: no material corroborated events this window."
    if q:
        s += f" {len(q)} low-trust item(s) remain quarantined pending corroboration."
    return s


def main():
    cfg = json.loads((HERE / "entities.json").read_text())
    ev_by_ent = load_events(cfg)

    out_entities = {}
    for ent in cfg["entities"]:
        evts = ev_by_ent.get(ent["id"], [])
        scores = index_scores(evts)
        health = composite(scores)

        # 12-week history (weekly snapshots ending 30 Jun), composite + per index
        history = []
        index_history = {k: [] for k in INDEX_ORDER}
        for w in range(11, -1, -1):
            at = SNAPSHOT - timedelta(weeks=w)
            snap = index_scores(evts, at=at)
            history.append(composite(snap))
            for k in INDEX_ORDER:
                index_history[k].append(snap[k])
        trend = history[-1] - history[-5] if len(history) >= 5 else 0

        evts_sorted = sorted(evts, key=escore, reverse=True)[:12]
        ui_events = []
        for i, e in enumerate(evts_sorted):
            lead = e["lead"]
            ui_events.append({
                "id": f"{ent['id']}-{i}",
                "index": e["index"], "pillar": e["pillar"],
                "title": lead["title"][:110],
                "desc": lead["summary"],
                "url": lead["url"],
                "domain": lead.get("domain", ""),
                "source": lead["source_class"], "sourceSector": ent["segment"],
                "direction": e["role"], "dir": e["dir"],
                "time": rel_time(e["last"]),
                "sev": e["sev"], "corr": e["corr"], "vel": e["vel"],
                "stg": e["stg"], "dec": e["dec"],
                "stage": e["stage"], "quarantined": e["quarantined"],
                "corroboration": [
                    {"name": c, "cred": "Verified" if trust_cell(c, ent["segment"]) >= 0.9
                        else "High" if trust_cell(c, ent["segment"]) >= 0.7
                        else "Medium" if trust_cell(c, ent["segment"]) >= 0.5 else "Low"}
                    for c in e["classes"][:4]
                ],
                "provenance": [
                    f"Captured from GDELT DOC feed ({len(e['arts'])} article(s))",
                    f"Resolved entity → {ent['name']}",
                    f"Classified: {e['index'].title()} · {e['pillar']}" + (f" · {e['stage']}" if e["stage"] else ""),
                    f"Corroborated across {len(e['classes'])} source class(es)",
                    "Quarantined (trust cell below 0.5)" if e["quarantined"] else "Scored through event engine",
                ],
                "audit": [
                    {"time": rel_time(e["first"]), "actor": "Signal layer",
                     "action": "Event extracted & classified", "id": f"EV-{ent['ticker']}-{1000 + i}"},
                    {"time": rel_time(e["last"]), "actor": "Trust tollgate",
                     "action": ("Quarantined (low trust)" if e["quarantined"]
                                else f"Credibility resolved ({ent['segment']})"),
                     "id": f"TG-{2000 + i}"},
                ],
            })

        out_entities[ent["id"]] = {
            "name": ent["name"], "ticker": ent["ticker"], "sector": ent["segment"],
            "meta": "Indian BFSI · Jan–Jun 2026",
            "scores": scores, "trend": trend,
            "quarantined": sum(1 for e in evts if e["quarantined"]),
            "narrative": narrative(ent["name"], evts, scores),
            "history": history,
            "indexHistory": index_history,
            "articleCount": sum(len(e["arts"]) for e in evts),
            "events": ui_events,
        }

    # default selection: --hero <id> override, else the entity with the
    # strongest single risk-side event
    def hero_key(kv):
        evts = ev_by_ent.get(kv[0], [])
        risky = [escore(e) for e in evts if INDICES[e["index"]]["side"] == "Risk" and not e["quarantined"]]
        return max(risky) if risky else 0
    default_entity = max(out_entities.items(), key=hero_key)[0] if out_entities else None
    if "--hero" in sys.argv:
        override = sys.argv[sys.argv.index("--hero") + 1]
        if override in out_entities:
            default_entity = override

    # source-monitor summary: per source class, outlets and volumes actually seen
    src_stats = {}
    all_rows = [json.loads(l) for l in IN_PATH.read_text().splitlines() if l.strip()]
    for r in all_rows:
        s = src_stats.setdefault(r["source_class"], {"records": 0, "domains": {}})
        s["records"] += 1
        if r.get("domain"):
            s["domains"][r["domain"]] = s["domains"].get(r["domain"], 0) + 1
    sources = []
    for cls in TRUST:
        s = src_stats.get(cls, {"records": 0, "domains": {}})
        top = sorted(s["domains"].items(), key=lambda kv: -kv[1])[:8]
        row = TRUST[cls]
        sources.append({
            "name": cls, "records": s["records"], "outlets": len(s["domains"]),
            "trustMin": min(row), "trustMax": max(row),
            "topDomains": [{"d": d, "n": n} for d, n in top],
        })
    raw_dir = HERE.parent / "data" / "raw"
    raw_total = 0
    for ent in cfg["entities"]:
        f = raw_dir / f"{ent['id']}.jsonl"
        n = sum(1 for l in f.read_text().splitlines() if l.strip()) if f.exists() else 0
        out_entities[ent["id"]]["rawCount"] = n
        raw_total += n

    trust_profiles = json.loads((HERE / "trust_profiles.json").read_text())

    payload = {
        "generatedAt": SNAPSHOT.strftime("%Y-%m-%d"),
        "defaultEntity": default_entity,
        "trustProfiles": trust_profiles,
        "sources": sources,
        "rawTotal": raw_total,
        "feeds": [
            {"name": "Google News RSS · India edition", "detail": str(len(cfg["entities"])) + " entity channels · month-sliced queries", "status": "LIVE"},
            {"name": "GDELT DOC 2.0 API", "detail": "Global news firehose · quota-managed backfill", "status": "QUOTA-MANAGED"},
            {"name": "GDELT Events (CAMEO)", "detail": "Structured event codes · cross-validation", "status": "PLANNED"},
        ],
        "window": "Jan–Jun 2026",
        "sectorLabel": "Indian BFSI",
        "matrixSources": list(TRUST.keys()),
        "matrixSectors": SEGMENTS,
        "matrixW": TRUST,
        "entities": out_entities,
    }
    OUT_PATH.write_text("window.FI_DATA = " + json.dumps(payload, ensure_ascii=False, indent=1) + ";\n")
    print(f"wrote {OUT_PATH} — {len(out_entities)} entities, "
          f"{sum(len(v['events']) for v in out_entities.values())} events")


if __name__ == "__main__":
    main()
