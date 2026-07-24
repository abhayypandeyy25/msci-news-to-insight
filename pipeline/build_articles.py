#!/usr/bin/env python3
"""Build articles.js — the full fetched corpus for the Articles explorer view.

Merges every raw file (GDELT/RSS backfill + newsapi-* live pulls), joins
against the classified set and the scored events in data.js, and emits a slim
lazy-loaded bundle: window.FI_ARTICLES.

Disposition per article:
  scored      — survived the signal layer (has index/pillar); if it is the
                lead article of a dashboard event, it links to the drawer
  quarantined — lead article of a quarantined event
  filtered    — fetched but rejected as roundup/duplicate/irrelevant

Usage: python3 build_articles.py   (run after classify/merge + score.py)
"""
import json
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
RAW_DIR = HERE.parent / "data" / "raw"
CLASSIFIED = HERE.parent / "data" / "classified.jsonl"
DATA_JS = HERE.parent / "data.js"
OUT = HERE.parent / "articles.js"


def origin_for(stem):
    if stem.startswith("newsapi-"):
        return "NewsAPI.org"
    if stem in ("hdfcbank", "icicibank", "bajfinance"):
        return "GDELT"
    return "Google News RSS"


def main():
    classified = {}
    for line in CLASSIFIED.read_text().splitlines():
        if line.strip():
            r = json.loads(line)
            classified[r["url"]] = r

    d = json.loads(DATA_JS.read_text().split("=", 1)[1].rstrip().rstrip(";"))
    ev_by_url = {}
    for eid, ent in d["entities"].items():
        for ev in ent.get("events", []):
            if ev.get("url"):
                ev_by_url[ev["url"]] = ev

    rows, seen = [], set()
    for f in sorted(RAW_DIR.glob("*.jsonl")):
        origin = origin_for(f.stem)
        for line in f.read_text().splitlines():
            if not line.strip():
                continue
            a = json.loads(line)
            url = a["url"]
            if url in seen:
                continue
            seen.add(url)
            date = (a.get("seendate") or "")[:8]
            if not re.match(r"^20\d{6}$", date):
                date = ""
            c = classified.get(url)
            ev = ev_by_url.get(url)
            row = {
                "d": date, "t": a["title"][:160], "u": url,
                "dm": a.get("domain", ""), "e": a["entity"], "o": origin,
            }
            if ev and ev.get("quarantined"):
                row["s"] = 2
                row["ix"] = ev["index"]
                row["ev"] = ev["id"]
            elif c:
                row["s"] = 1
                row["ix"] = c["index"]
                if ev:
                    row["ev"] = ev["id"]
            else:
                row["s"] = 0
            rows.append(row)

    rows.sort(key=lambda r: r["d"], reverse=True)
    counts = {"total": len(rows),
              "scored": sum(1 for r in rows if r["s"] == 1),
              "quarantined": sum(1 for r in rows if r["s"] == 2),
              "filtered": sum(1 for r in rows if r["s"] == 0)}
    OUT.write_text("window.FI_ARTICLES=" + json.dumps(
        {"counts": counts, "articles": rows}, ensure_ascii=False, separators=(",", ":")) + ";\n")
    kb = OUT.stat().st_size // 1024
    print(f"wrote {OUT.name}: {counts} · {kb}KB")


if __name__ == "__main__":
    main()
