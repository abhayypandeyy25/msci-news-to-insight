# News-to-Insight — Financial Intelligence OS (MSCI prototype)

Single-file analyst dashboard + real-data pipeline that turns raw news flow into
six scored indices (Controversy, Risk, ESG, Momentum, Catalyst, Sentiment) and one
composite entity-health score. Built by Algo8/SapienOne for the MSCI engagement.

## Run the dashboard

Open `index.html` in a browser (double-click), or serve it:

```bash
python3 -m http.server 8765   # http://localhost:8765/index.html
```

With `data.js` present the app runs on real data (Indian BFSI, Jan–Jun 2026
GDELT backfill); without it, it falls back to the built-in fictional demo dataset.

## Pipeline (raw news → data.js)

```
pipeline/entities.json      15 Indian BFSI entities (banks + NBFCs)
pipeline/ingest_gdelt.py    GDELT DOC 2.0 backfill (free, no key; resumable, cached)
pipeline/classify.py        LLM signal layer: index/pillar, directionality, severity,
                            stage, story clustering (Claude API; ANTHROPIC_API_KEY)
pipeline/merge_classified.py normalize + merge per-entity classifications
pipeline/score.py           event engine (Severity×Credibility×Corroboration×Velocity
                            ×Stage×Decay), saturating roll-up, netting → ../data.js
pipeline/run_all.sh         end-to-end
```

```bash
./pipeline/run_all.sh                 # everything
python3 pipeline/ingest_gdelt.py iifl # one entity
```

Notes:
- GDELT throttles hard in practice (~minutes between calls); ingestion caches
  every call under `data/raw/cache/` and resumes safely.
- The scoring math in `score.py` is an exact port of the engine in `index.html`,
  so pipeline scores and dashboard drill-downs always agree.
- `data/classified/*.jsonl` may also be produced by agentic classification
  (same schema as `classify.py`); `merge_classified.py` treats both alike.
