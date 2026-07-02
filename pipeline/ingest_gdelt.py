#!/usr/bin/env python3
"""GDELT DOC 2.0 backfill for the News-to-Insight pipeline.

Pulls article metadata per entity, month by month (the API caps at 250
records per call, so a single 6-month window would silently drop busy
periods), dedupes, and writes one JSONL per entity to data/raw/.

No API key needed. Throttled to be a good citizen.

Usage:
  python3 ingest_gdelt.py               # all entities
  python3 ingest_gdelt.py hdfcbank iifl # subset by entity id
"""
import json
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent
RAW_DIR = HERE.parent / "data" / "raw"
CACHE_DIR = RAW_DIR / "cache"
DOC_API = "https://api.gdeltproject.org/api/v2/doc/doc"
THROTTLE_S = 12.0
MAX_RETRIES = 8

MONTHS = [
    ("20260101000000", "20260131235959"),
    ("20260201000000", "20260228235959"),
    ("20260301000000", "20260331235959"),
    ("20260401000000", "20260430235959"),
    ("20260501000000", "20260531235959"),
    ("20260601000000", "20260630235959"),
]
HALVES = [
    ("20260101000000", "20260331235959"),
    ("20260401000000", "20260630235959"),
]
FULL = [("20260101000000", "20260630235959")]

# GDELT throttles ~3 calls/hour in practice, so spend calls where news
# density (or hero potential) justifies them. Monthly only where a cache
# already exists; halves for high-volume + hero candidates; one call for
# the rest (250-record cap is rarely binding for small NBFCs).
WINDOWS = {
    "hdfcbank": MONTHS, "icicibank": MONTHS,
    "bajfinance": HALVES, "sbi": HALVES, "kotak": HALVES, "axis": HALVES,
    "iifl": HALVES, "poonawalla": HALVES,
}


def build_query(aliases):
    quoted = " OR ".join(f'"{a}"' for a in aliases)
    if len(aliases) > 1:
        quoted = f"({quoted})"
    return f"{quoted} sourcecountry:IN"


def fetch(url):
    last_err = None
    for attempt in range(MAX_RETRIES):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "algo8-news-to-insight/0.1"})
            with urllib.request.urlopen(req, timeout=60) as r:
                body = r.read().decode("utf-8", "replace")
            # GDELT returns HTML error pages with status 200 on bad queries
            if body.lstrip().startswith("<"):
                raise ValueError("non-JSON response: " + body[:200].replace("\n", " "))
            return json.loads(body) if body.strip() else {}
        except urllib.error.HTTPError as e:
            last_err = e
            # GDELT 429s aggressively; back off long and progressively
            time.sleep(60 * (attempt + 1) if e.code == 429 else 2 ** attempt * 2)
        except Exception as e:  # noqa: BLE001 - retry any transport/parse error
            last_err = e
            time.sleep(2 ** attempt * 2)
    raise RuntimeError(f"GDELT fetch failed after {MAX_RETRIES} tries: {last_err}\n{url}")


def norm_title(t):
    return re.sub(r"\W+", " ", (t or "").lower()).strip()


def fetch_month(ent, query, start, end):
    """One entity-window call, cached on disk so re-runs never refetch."""
    span = start[:6] if end[:6] == start[:6] else f"{start[:6]}x{end[:6]}"
    cache = CACHE_DIR / f"{ent['id']}-{span}.json"
    if cache.exists():
        return json.loads(cache.read_text()), True
    params = urllib.parse.urlencode({
        "query": query,
        "mode": "ArtList",
        "maxrecords": "250",
        "startdatetime": start,
        "enddatetime": end,
        "format": "json",
        "sort": "DateDesc",
    })
    data = fetch(f"{DOC_API}?{params}")
    cache.write_text(json.dumps(data, ensure_ascii=False))
    return data, False


def ingest_entity(ent):
    seen_urls, seen_titles, rows = set(), set(), []
    query = build_query(ent["aliases"])
    for start, end in WINDOWS.get(ent["id"], FULL):
        data, cached = fetch_month(ent, query, start, end)
        arts = data.get("articles", [])
        kept = 0
        for a in arts:
            url = (a.get("url") or "").split("?")[0]
            titkey = norm_title(a.get("title"))
            if not url or not titkey or url in seen_urls or titkey in seen_titles:
                continue
            seen_urls.add(url)
            seen_titles.add(titkey)
            rows.append({
                "entity": ent["id"],
                "url": url,
                "title": a.get("title", "").strip(),
                "domain": a.get("domain", ""),
                "seendate": a.get("seendate", ""),
                "language": a.get("language", ""),
                "sourcecountry": a.get("sourcecountry", ""),
            })
            kept += 1
        print(f"  {ent['id']} {start[:6]}: {len(arts)} fetched, {kept} kept{' (cache)' if cached else ''}", flush=True)
        if not cached:
            time.sleep(THROTTLE_S)
    rows.sort(key=lambda r: r["seendate"])
    out = RAW_DIR / f"{ent['id']}.jsonl"
    with out.open("w") as f:
        for r in rows:
            f.write(json.dumps(r, ensure_ascii=False) + "\n")
    print(f"  -> {out.name}: {len(rows)} articles")
    return len(rows)


def main():
    cfg = json.loads((HERE / "entities.json").read_text())
    RAW_DIR.mkdir(parents=True, exist_ok=True)
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    wanted = set(sys.argv[1:])
    totals = {}
    for ent in cfg["entities"]:
        if wanted and ent["id"] not in wanted:
            continue
        print(f"[{ent['name']}]", flush=True)
        totals[ent["id"]] = ingest_entity(ent)
    print("\n=== per-entity article counts ===")
    for k, v in sorted(totals.items(), key=lambda kv: -kv[1]):
        print(f"  {k:12s} {v}")


if __name__ == "__main__":
    main()
