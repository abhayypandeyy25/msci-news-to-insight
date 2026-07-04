#!/usr/bin/env python3
"""Google News RSS backfill — fallback source when GDELT is quota-blocked.

Emits the same raw JSONL schema as ingest_gdelt.py (entity, url, title,
domain, seendate), so classification and scoring are source-agnostic.
Month-sliced queries (RSS returns max ~100 items each). Cached per call.

Usage:
  python3 ingest_gnews.py               # all entities missing a raw file
  python3 ingest_gnews.py iifl kotak    # subset
"""
import json
import re
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from email.utils import parsedate_to_datetime
from pathlib import Path

HERE = Path(__file__).resolve().parent
RAW_DIR = HERE.parent / "data" / "raw"
CACHE_DIR = RAW_DIR / "cache"
THROTTLE_S = 2.0

MONTH_BOUNDS = [
    ("2026-01-01", "2026-02-01"), ("2026-02-01", "2026-03-01"),
    ("2026-03-01", "2026-04-01"), ("2026-04-01", "2026-05-01"),
    ("2026-05-01", "2026-06-01"), ("2026-06-01", "2026-07-01"),
]


def fetch_rss(query, after, before, cache_key):
    cache = CACHE_DIR / f"gnews-{cache_key}.xml"
    if cache.exists():
        return cache.read_text(), True
    q = urllib.parse.quote(f'"{query}" after:{after} before:{before}')
    url = f"https://news.google.com/rss/search?q={q}&hl=en-IN&gl=IN&ceid=IN:en"
    for attempt in range(5):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (algo8-news-to-insight)"})
            with urllib.request.urlopen(req, timeout=45) as r:
                body = r.read().decode("utf-8", "replace")
            cache.write_text(body)
            return body, False
        except Exception as e:  # noqa: BLE001
            if attempt == 4:
                raise
            time.sleep(5 * (attempt + 1))


def parse_items(xml_text):
    root = ET.fromstring(xml_text)
    for item in root.iter("item"):
        title = (item.findtext("title") or "").strip()
        link = (item.findtext("link") or "").strip()
        pub = item.findtext("pubDate") or ""
        src = item.find("source")
        domain = ""
        if src is not None and src.get("url"):
            domain = urllib.parse.urlparse(src.get("url")).netloc.replace("www.", "")
        # Google News titles end with " - Source Name"; strip it
        title = re.sub(r"\s+-\s+[^-]{2,60}$", "", title)
        try:
            seendate = parsedate_to_datetime(pub).strftime("%Y%m%dT%H%M%SZ")
        except Exception:  # noqa: BLE001
            seendate = ""
        yield title, link, domain, seendate


def norm_title(t):
    return re.sub(r"\W+", " ", (t or "").lower()).strip()


def ingest_entity(ent):
    seen_titles, rows = set(), []
    for after, before in MONTH_BOUNDS:
        total = 0
        for alias in ent["aliases"][:2]:
            key = f"{ent['id']}-{after}-{urllib.parse.quote(alias)}"
            xml_text, cached = fetch_rss(alias, after, before, key)
            for title, link, domain, seendate in parse_items(xml_text):
                tk = norm_title(title)
                if not title or tk in seen_titles:
                    continue
                seen_titles.add(tk)
                rows.append({
                    "entity": ent["id"], "url": link, "title": title,
                    "domain": domain, "seendate": seendate,
                    "language": "English", "sourcecountry": "India",
                })
                total += 1
            if not cached:
                time.sleep(THROTTLE_S)
        print(f"  {ent['id']} {after[:7]}: +{total}", flush=True)
    rows.sort(key=lambda r: r["seendate"])
    out = RAW_DIR / f"{ent['id']}.jsonl"
    with out.open("w") as f:
        for r in rows:
            f.write(json.dumps(r, ensure_ascii=False) + "\n")
    print(f"  -> {out.name}: {len(rows)} articles", flush=True)
    return len(rows)


def main():
    cfg = json.loads((HERE / "entities.json").read_text())
    RAW_DIR.mkdir(parents=True, exist_ok=True)
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    wanted = set(sys.argv[1:])
    totals = {}
    for ent in cfg["entities"]:
        if wanted:
            if ent["id"] not in wanted:
                continue
        elif (RAW_DIR / f"{ent['id']}.jsonl").exists():
            continue
        print(f"[{ent['name']}]", flush=True)
        totals[ent["id"]] = ingest_entity(ent)
    print("\n=== per-entity article counts ===")
    for k, v in sorted(totals.items(), key=lambda kv: -kv[1]):
        print(f"  {k:12s} {v}")


if __name__ == "__main__":
    main()
