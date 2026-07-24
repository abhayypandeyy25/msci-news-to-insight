#!/usr/bin/env python3
"""NewsAPI.org ingester — same raw JSONL schema as the GDELT/RSS ingesters.

Free dev tier limits: 100 requests/day, ~1 month of history, 24h article
delay — so this is a LIVE-WINDOW puller (last ~30 days), not a historical
backfill tool. Output merges cleanly into the existing classify -> score flow.

Usage:
  python3 ingest_newsapi.py iifl kotak     # subset (recommended: 1 req/entity)
  python3 ingest_newsapi.py                # all entities (15 requests)
Writes data/raw/newsapi-<entity>.jsonl
"""
import json
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

from api_status import load_env

HERE = Path(__file__).resolve().parent
RAW_DIR = HERE.parent / "data" / "raw"


def fetch(query, key):
    q = urllib.parse.urlencode({
        "q": f'"{query}"', "language": "en", "pageSize": 100,
        "sortBy": "publishedAt", "apiKey": key,
    })
    req = urllib.request.Request(f"https://newsapi.org/v2/everything?{q}",
                                 headers={"User-Agent": "algo8-news-to-insight/0.1"})
    with urllib.request.urlopen(req, timeout=45) as r:
        return json.loads(r.read())


def main():
    key = load_env().get("NEWSAPI_ORG_KEY")
    if not key:
        sys.exit("NEWSAPI_ORG_KEY not set in pipeline/.env")
    cfg = json.loads((HERE / "entities.json").read_text())
    RAW_DIR.mkdir(parents=True, exist_ok=True)
    wanted = set(sys.argv[1:])
    for ent in cfg["entities"]:
        if wanted and ent["id"] not in wanted:
            continue
        data = fetch(ent["aliases"][0], key)
        rows, seen = [], set()
        for a in data.get("articles", []):
            url = (a.get("url") or "").split("?")[0]
            title = (a.get("title") or "").strip()
            if not url or not title or url in seen:
                continue
            seen.add(url)
            domain = urllib.parse.urlparse(url).netloc.replace("www.", "")
            pub = (a.get("publishedAt") or "").replace("-", "").replace(":", "")
            rows.append({
                "entity": ent["id"], "url": url, "title": title, "domain": domain,
                "seendate": pub[:8] + "T" + (pub[9:15] or "000000") + "Z",
                "language": "English", "sourcecountry": "",
            })
        out = RAW_DIR / f"newsapi-{ent['id']}.jsonl"
        with out.open("w") as f:
            for r in rows:
                f.write(json.dumps(r, ensure_ascii=False) + "\n")
        print(f"{ent['id']:12s} {len(rows):3d} articles (of {data.get('totalResults', 0)} matches) -> {out.name}")
        time.sleep(1.2)


if __name__ == "__main__":
    main()
