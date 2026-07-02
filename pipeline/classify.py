#!/usr/bin/env python3
"""Signal layer: LLM classification of raw GDELT articles.

Reads data/raw/<entity>.jsonl, classifies each article with the Claude API
(batches of titles, strict JSON out), and appends to data/classified.jsonl.
Resumable: already-classified article URLs are skipped on re-run.

Auth: ANTHROPIC_API_KEY env var, or a line `ANTHROPIC_API_KEY=...` in
pipeline/.env (gitignored).

Usage:
  python3 classify.py                  # everything not yet classified
  python3 classify.py hdfcbank         # one entity
  python3 classify.py hdfcbank --limit 20   # sample run for validation
"""
import json
import os
import sys
import time
import urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent
RAW_DIR = HERE.parent / "data" / "raw"
OUT_PATH = HERE.parent / "data" / "classified.jsonl"
MODEL = os.environ.get("FI_CLASSIFY_MODEL", "claude-haiku-4-5-20251001")
BATCH = 25

INDEX_PILLARS = {
    "controversy": ["Financial integrity", "Legal & compliance", "Operational risk", "Key-person risk", "PR & reputational"],
    "risk": ["Financial", "Operational", "Concentration"],
    "esg": ["Environment", "Social", "Governance"],
    "momentum": ["Commercial", "Financial", "Strategic"],
    "catalyst": ["Bookings", "Capacity", "Corporate"],
    "sentiment": ["Sectoral", "Entity tone", "Forward signal"],
}

# domain -> source class (trust matrix rows). Order matters: first match wins.
SOURCE_CLASSES = [
    ("Regulator & exchange", ["rbi.org.in", "sebi.gov.in", "nseindia", "bseindia", "irdai", "pib.gov.in"]),
    ("Agency wires", ["reuters", "ptinews", "aninews", "ians", "bloomberg", "apnews"]),
    ("Business press", ["economictimes", "livemint", "business-standard", "moneycontrol", "businesstoday",
                        "financialexpress", "thehindubusinessline", "businessline", "cnbctv18", "zeebiz",
                        "ndtvprofit", "bqprime", "fortuneindia", "forbesindia"]),
    ("General & regional press", ["timesofindia", "hindustantimes", "thehindu", "indianexpress", "news18",
                                  "indiatoday", "deccanherald", "telegraphindia", "tribuneindia", "freepressjournal",
                                  "dnaindia", "firstpost", "theprint", "thewire", "scroll.in", "oneindia",
                                  "dailyhunt", "amarujala", "bhaskar", "jagran", "navbharattimes", "zeenews",
                                  "abplive", "ndtv.com"]),
]
DEFAULT_CLASS = "Aggregators & other"


def source_class(domain):
    d = (domain or "").lower()
    for cls, keys in SOURCE_CLASSES:
        if any(k in d for k in keys):
            return cls
    return DEFAULT_CLASS


def api_key():
    k = os.environ.get("ANTHROPIC_API_KEY")
    if not k:
        env = HERE / ".env"
        if env.exists():
            for line in env.read_text().splitlines():
                if line.startswith("ANTHROPIC_API_KEY="):
                    k = line.split("=", 1)[1].strip().strip('"')
    if not k:
        sys.exit("ANTHROPIC_API_KEY not set (env var or pipeline/.env). Aborting before any API call.")
    return k


SYSTEM = """You classify Indian BFSI news headlines for a financial-signal platform. For each article you receive (id, title, domain), decide how it should feed a six-index scoring engine for the named entity.

Return ONLY a JSON array, one object per input article, schema:
{
 "id": <id from input>,
 "relevant": <true if the headline is materially about the entity as a principal actor (not a passing mention, ad, market-roundup listing, or homonym)>,
 "index": <"controversy"|"risk"|"esg"|"momentum"|"catalyst"|"sentiment">,
 "pillar": <one of the allowed pillars for that index>,
 "direction": <"pos"|"neg" for the entity>,
 "role": <short role tag, e.g. "Subject", "Subject — defendant", "Beneficiary">,
 "severity": <0.1-1.0, materiality of the event for the entity>,
 "stage": <"allegation"|"probe"|"charge"|"resolution"|null — only for controversy-type legal/regulatory matters>,
 "cluster": <short lowercase slug naming the underlying real-world story, e.g. "rbi-gold-loan-ban", so the same story from different outlets shares a slug>,
 "summary": <ONE sentence, neutral, what happened>
}

Allowed pillars per index:
controversy: Financial integrity, Legal & compliance, Operational risk, Key-person risk, PR & reputational
risk: Financial, Operational, Concentration
esg: Environment, Social, Governance
momentum: Commercial, Financial, Strategic
catalyst: Bookings, Capacity, Corporate
sentiment: Sectoral, Entity tone, Forward signal

Guidance: quarterly results/earnings -> momentum (Financial), pos/neg by beat/miss. Named deals, fundraises, M&A, big orders -> catalyst. Regulatory penalties, probes, fraud, key-person exits -> controversy with a stage. Structural weakness (NPA rise, rating downgrade, funding stress) -> risk. Routine stock-price/target-price chatter -> sentiment (Entity tone), low severity. Sector-wide items where the entity is just an example -> relevant=false unless the impact is entity-specific."""


def call_claude(key, entity_name, batch):
    payload = {
        "model": MODEL,
        "max_tokens": 4096,
        "system": SYSTEM,
        "messages": [{
            "role": "user",
            "content": "Entity: " + entity_name + "\nArticles:\n" +
                       json.dumps([{"id": i, "title": a["title"], "domain": a["domain"]}
                                   for i, a in enumerate(batch)], ensure_ascii=False),
        }],
    }
    req = urllib.request.Request(
        "https://api.anthropic.com/v1/messages",
        data=json.dumps(payload).encode(),
        headers={"x-api-key": key, "anthropic-version": "2023-06-01", "content-type": "application/json"},
    )
    for attempt in range(5):
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                data = json.loads(r.read())
            text = "".join(b.get("text", "") for b in data.get("content", []))
            start, end = text.find("["), text.rfind("]")
            return json.loads(text[start:end + 1])
        except Exception as e:  # noqa: BLE001
            if attempt == 4:
                raise
            time.sleep(5 * (attempt + 1))


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    limit = None
    if "--limit" in sys.argv:
        limit = int(sys.argv[sys.argv.index("--limit") + 1])

    key = api_key()
    done = set()
    if OUT_PATH.exists():
        for line in OUT_PATH.read_text().splitlines():
            try:
                done.add(json.loads(line)["url"])
            except Exception:  # noqa: BLE001
                pass

    cfg = json.loads((HERE / "entities.json").read_text())
    names = {e["id"]: e["name"] for e in cfg["entities"]}
    files = sorted(RAW_DIR.glob("*.jsonl"))
    if args:
        files = [f for f in files if f.stem in args]

    out = OUT_PATH.open("a")
    total_in, total_kept = 0, 0
    for f in files:
        rows = [json.loads(l) for l in f.read_text().splitlines() if l.strip()]
        rows = [r for r in rows if r["url"] not in done]
        if limit:
            rows = rows[:limit]
        if not rows:
            continue
        print(f"[{f.stem}] {len(rows)} to classify", flush=True)
        for i in range(0, len(rows), BATCH):
            batch = rows[i:i + BATCH]
            results = call_claude(key, names.get(f.stem, f.stem), batch)
            by_id = {r.get("id"): r for r in results if isinstance(r, dict)}
            for j, art in enumerate(batch):
                res = by_id.get(j)
                total_in += 1
                if not res or not res.get("relevant"):
                    continue
                idx = res.get("index")
                if idx not in INDEX_PILLARS:
                    continue
                pillar = res.get("pillar")
                if pillar not in INDEX_PILLARS[idx]:
                    pillar = INDEX_PILLARS[idx][0]
                rec = {
                    "entity": art["entity"], "url": art["url"], "title": art["title"],
                    "domain": art["domain"], "seendate": art["seendate"],
                    "source_class": source_class(art["domain"]),
                    "index": idx, "pillar": pillar,
                    "direction": "pos" if res.get("direction") == "pos" else "neg",
                    "role": str(res.get("role") or ("Beneficiary" if res.get("direction") == "pos" else "Subject"))[:40],
                    "severity": max(0.1, min(1.0, float(res.get("severity") or 0.3))),
                    "stage": res.get("stage") if res.get("stage") in ("allegation", "probe", "charge", "resolution") else None,
                    "cluster": str(res.get("cluster") or "misc")[:60],
                    "summary": str(res.get("summary") or "")[:300],
                }
                out.write(json.dumps(rec, ensure_ascii=False) + "\n")
                total_kept += 1
            out.flush()
            print(f"  batch {i//BATCH + 1}: {total_kept} relevant so far", flush=True)
    out.close()
    print(f"\nclassified {total_in} articles, {total_kept} relevant -> {OUT_PATH}")


if __name__ == "__main__":
    main()
