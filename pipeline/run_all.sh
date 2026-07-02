#!/bin/bash
# Full pipeline: GDELT backfill -> LLM signal layer -> scoring -> data.js
# Requires ANTHROPIC_API_KEY (env or pipeline/.env) for the classify step.
set -euo pipefail
cd "$(dirname "$0")"

echo "== Phase 1: GDELT ingest (resumable, cached per entity-month) =="
python3 ingest_gdelt.py "$@"

echo "== Phase 2: LLM classification (resumable) =="
python3 classify.py "$@"

echo "== Phase 3: scoring -> ../data.js =="
python3 score.py

echo "Done. Open index.html to see the dashboard on real data."
