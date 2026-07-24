#!/usr/bin/env python3
"""Live API status checks for the candidate news APIs.

Makes one real test call per configured provider (keys from pipeline/.env or
env vars), measures latency and result volume, and writes data/api_status.json.
score.py folds that into data.js so the Source Monitor page shows actual,
timestamped working status — keys never leave this machine.

Usage: python3 api_status.py
"""
import json
import os
import time
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

HERE = Path(__file__).resolve().parent
OUT = HERE.parent / "data" / "api_status.json"
TEST_QUERY = "HDFC Bank"


def load_env():
    env = {}
    f = HERE / ".env"
    if f.exists():
        for line in f.read_text().splitlines():
            if "=" in line and not line.strip().startswith("#"):
                k, v = line.split("=", 1)
                env[k.strip()] = v.strip().strip('"')
    for k in ("NEWSAPI_ORG_KEY", "NEWSDATA_IO_KEY", "NEWSAPI_AI_KEY"):
        if os.environ.get(k):
            env[k] = os.environ[k]
    return env


def probe(name, url, count_fn, note):
    t0 = time.time()
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "algo8-news-to-insight/0.1"})
        with urllib.request.urlopen(req, timeout=30) as r:
            data = json.loads(r.read())
        ms = int((time.time() - t0) * 1000)
        n, extra = count_fn(data)
        return {"name": name, "status": "WORKING", "latencyMs": ms, "articles": n,
                "note": note, "extra": extra}
    except urllib.error.HTTPError as e:
        body = ""
        try:
            body = json.loads(e.read()).get("message", "")[:140]
        except Exception:  # noqa: BLE001
            pass
        return {"name": name, "status": "FAILED", "latencyMs": int((time.time() - t0) * 1000),
                "articles": 0, "note": note, "extra": f"HTTP {e.code}: {body}"}
    except Exception as e:  # noqa: BLE001
        return {"name": name, "status": "FAILED", "latencyMs": int((time.time() - t0) * 1000),
                "articles": 0, "note": note, "extra": str(e)[:140]}


def main():
    env = load_env()
    results = []

    if env.get("NEWSAPI_ORG_KEY"):
        q = urllib.parse.urlencode({
            "q": f'"{TEST_QUERY}"', "language": "en", "pageSize": 25,
            "sortBy": "publishedAt", "apiKey": env["NEWSAPI_ORG_KEY"],
        })
        results.append(probe(
            "NewsAPI.org", f"https://newsapi.org/v2/everything?{q}",
            lambda d: (len(d.get("articles", [])),
                       f"{d.get('totalResults', 0)} total matches · " +
                       (d["articles"][0]["publishedAt"][:10] + " newest" if d.get("articles") else "no articles")),
            "Free dev tier: 100 req/day · 24h article delay · ~1 month history",
        ))
    else:
        results.append({"name": "NewsAPI.org", "status": "NOT CONFIGURED", "latencyMs": 0,
                        "articles": 0, "note": "Awaiting API key (NEWSAPI_ORG_KEY)", "extra": ""})

    if env.get("NEWSDATA_IO_KEY"):
        q = urllib.parse.urlencode({"q": TEST_QUERY, "country": "in", "language": "en",
                                    "apikey": env["NEWSDATA_IO_KEY"]})
        results.append(probe(
            "NewsData.io", f"https://newsdata.io/api/1/latest?{q}",
            lambda d: (len(d.get("results", [])), f"{d.get('totalResults', 0)} total matches"),
            "Free tier: ~200 credits/day · 12h news delay",
        ))
    else:
        results.append({"name": "NewsData.io", "status": "NOT CONFIGURED", "latencyMs": 0,
                        "articles": 0, "note": "Awaiting API key (NEWSDATA_IO_KEY)", "extra": ""})

    if env.get("NEWSAPI_AI_KEY"):
        body = json.dumps({"action": "getArticles", "keyword": TEST_QUERY,
                           "articlesCount": 25, "apiKey": env["NEWSAPI_AI_KEY"]}).encode()
        t0 = time.time()
        try:
            req = urllib.request.Request("https://eventregistry.org/api/v1/article/getArticles",
                                         data=body, headers={"content-type": "application/json"})
            with urllib.request.urlopen(req, timeout=30) as r:
                data = json.loads(r.read())
            arts = (data.get("articles") or {}).get("results", [])
            results.append({"name": "NewsAPI.ai", "status": "WORKING",
                            "latencyMs": int((time.time() - t0) * 1000), "articles": len(arts),
                            "note": "Trial tokens · pay-as-you-go after", "extra": ""})
        except Exception as e:  # noqa: BLE001
            results.append({"name": "NewsAPI.ai", "status": "FAILED",
                            "latencyMs": int((time.time() - t0) * 1000), "articles": 0,
                            "note": "Trial tokens · pay-as-you-go after", "extra": str(e)[:140]})
    else:
        results.append({"name": "NewsAPI.ai", "status": "NOT CONFIGURED", "latencyMs": 0,
                        "articles": 0, "note": "Awaiting API key (NEWSAPI_AI_KEY)", "extra": ""})

    payload = {"checkedAt": datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC"),
               "testQuery": TEST_QUERY, "providers": results}
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(payload, indent=1))
    for r in results:
        print(f"{r['name']:12s} {r['status']:15s} {r['latencyMs']:5d}ms  {r['articles']:3d} articles  {r['extra']}")
    print(f"-> {OUT}")


if __name__ == "__main__":
    main()
