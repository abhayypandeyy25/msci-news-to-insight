#!/usr/bin/env python3
"""Merge per-entity classified files into data/classified.jsonl.

Adds the deterministic source_class (domain -> trust-matrix row) that
classify.py normally stamps, so in-session classified files and API-classified
files end up schema-identical.
"""
import json
from pathlib import Path

from classify import INDEX_PILLARS, source_class

HERE = Path(__file__).resolve().parent
CLS_DIR = HERE.parent / "data" / "classified"
OUT = HERE.parent / "data" / "classified.jsonl"

STAGES = {"allegation", "probe", "charge", "resolution"}


def main():
    rows, seen, bad = [], set(), 0
    for f in sorted(CLS_DIR.glob("*.jsonl")):
        for line in f.read_text().splitlines():
            if not line.strip():
                continue
            try:
                r = json.loads(line)
            except json.JSONDecodeError:
                bad += 1
                continue
            if r.get("url") in seen:
                continue
            idx = r.get("index")
            if idx not in INDEX_PILLARS:
                bad += 1
                continue
            if r.get("pillar") not in INDEX_PILLARS[idx]:
                r["pillar"] = INDEX_PILLARS[idx][0]
            r["direction"] = "pos" if r.get("direction") == "pos" else "neg"
            r["severity"] = max(0.1, min(1.0, float(r.get("severity") or 0.3)))
            r["stage"] = r.get("stage") if r.get("stage") in STAGES else None
            r["cluster"] = str(r.get("cluster") or "misc")[:60]
            r["source_class"] = source_class(r.get("domain"))
            seen.add(r["url"])
            rows.append(r)
    rows.sort(key=lambda r: (r["entity"], r["seendate"]))
    with OUT.open("w") as f:
        for r in rows:
            f.write(json.dumps(r, ensure_ascii=False) + "\n")
    print(f"merged {len(rows)} records from {len(list(CLS_DIR.glob('*.jsonl')))} files "
          f"({bad} skipped) -> {OUT}")


if __name__ == "__main__":
    main()
