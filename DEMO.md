# News-to-Insight — Client Demo Script (v2)

**URL:** [abhayypandeyy25.github.io/msci-news-to-insight](https://abhayypandeyy25.github.io/msci-news-to-insight/)

**Length:** ~15 minutes + Q&A. Refresh the page once BEFORE the call starts.

---

## What this platform is (30-second elevator intro — say this first)

> "This is News-to-Insight, our financial intelligence platform. It ingests raw news
> flow 24×7 — public feeds today, licensed feeds in production — and converts it into
> six scored indices per company: three on the risk side (Controversy, Risk, ESG) and
> three on the opportunity side (Momentum, Catalyst, Sentiment), netted into a single
> 0–100 health score. Analysts set up their own watchlist and source mix, monitor
> everything from one screen, and tune their own alerts. The key differentiator:
> every single point on every score drills down to dated, sourced, corroborated news
> events — and every source carries an explainable trust insight. This is real data:
> January to June 2026, 15 Indian banks and NBFCs, ~7,000 articles distilled into
> 1,700 scored events."

---

## Act 1 — The setup story (Companies + Sources, ~2 min)

Start in the sidebar **Setup** group — this answers "how would MY team use it?"

1. **Companies:** show the sector chips (bulk-add BFSI segments), search, paste-a-list,
   and the "Recommended for you" suggestions. Toggle the NBFC chip off and on — watch
   the tracking count change. **Say:** "The watchlist scopes everything — monitor,
   feeds, alerts."
2. **Sources:** each source class carries its real sector-calibrated trust weight —
   **hover a weight badge** to show the trust insight card. Toggle "Aggregators &
   other" off: the metrics update and its events vanish from every feed. Point at the
   **premium roadmap rows** (Reuters Wire, Factiva, LexisNexis) — "production source
   strategy, already framed."

## Act 2 — Watchlist Monitor (the analyst's morning screen, ~3 min)

Click **Finish setup** — you land on the Monitor.

1. **KPI strip** — 15 entities, 177 events, biggest mover, avg feed trust 0.75,
   quarantine count. All computed from the real backfill.
2. **Needs attention** — ranked by move × severity. Kotak sits high with a red box.
3. **Live event stream** — cross-entity, each row shows the trust band (hover it —
   trust insight card) and a signed score contribution.
4. **Heatmap** — the whole watchlist at a glance; use the Risk-side / Opportunity
   filter buttons; quiet entities stay gray. **Say:** "This is the 8:55am screen —
   where do I spend my morning?"

## Act 3 — The hero story (click Kotak in the queue, ~3 min)

Workbench opens on **Kotak Mahindra Bank**:

**Say:** "₹150 crore of Panchkula Municipal fixed deposits went missing at a Kotak
branch. Watch how the platform tracked the whole arc."

- Health 53/Watch, netting bar, six index cards (now with fill bars), the annotated
  12-week history (◎ marks the sharpest weekly move).
- Feed events now carry **stage badges** (allegation → probe → charge) and signed
  contributions: FD fraud discovered → staff arrested → **ED PMLA raids** → ex-VP
  arrested → Haryana de-empanels Kotak — plus the CEO's surprise exit (key-person
  pillar, same window).

## Act 4 — The evidence drawer (THE differentiator, ~3 min)

**Click the ED-arrest event.** Walk top to bottom:
1. Six factors with bars (severity × credibility × corroboration × velocity × stage × decay).
2. **Stage timeline** — charge 1.4× lit; "settlement collapses it to 0.3× — a live
   gauge, not a blocklist."
3. **Trust tollgate card — now with the trust insight**: the actual outlet's
   natural-language verdict sits under the numeric weight. **Say:** "Not just a
   number — the platform explains *why* it trusts a source, per sector."
4. Corroboration, provenance chain, audit trail → click **Confirm** (audit entry
   appears). Point at the "Source article" chip; don't click it.

Press Esc. Optionally flash **Poonawalla** (clean, health 67) — "the system doesn't
manufacture drama."

## Act 5 — Alerts (the analyst's contract with the system, ~2 min)

Sidebar → **Alerts**:
- Six rules; drag the **Controversy spike** threshold — the **fire-rate estimate
  updates live, computed from the real six-month backfill**. "Tune signal vs noise
  against history, not guesswork."
- Event-driven rules (regulatory, key-person) are critical — always push; the rest
  batch into a daily digest. Delivery: in-app, email, Slack/Teams, webhook.
- Click **Save alert rules** for the confirmation toast.

## Act 6 — Platform close (~2 min)

One line each: **Trust Tollgate** (matrix + quarantine queue), **Scoring Model**
(drag Stage to 0.3 live), **Source Monitor** (7,700 raw articles; candidate APIs —
NewsAPI.org, NewsData.io, NewsAPI.ai — and premium feeds as roadmap), end on
**Distribution** — "each index licenses independently; APIs, dashboard, narratives."

**Closing line:** "Raw news in → trust-gated, stage-tracked, explainable indices out.
The analyst controls the watchlist, the sources, and the alert contract — and can
audit every number down to the article."

---

## Q&A prep

- **"Is this live?"** — "Jan–Jun 2026 backfill refreshed by our pipeline; production
  adds scheduled ingestion + the API layer (architecture in Pipeline/Distribution)."
- **"Where do trust insights come from?"** — "Curated per-outlet profiles today,
  bound to the same source×sector weights the scorer uses; production versions are
  maintained editorially and recalibrated by realized outcomes."
- **"What sources?"** — "Free feeds proved the pipeline (7,000 articles). The source
  strategy Deepak raised — Reuters Wire, Factiva, LexisNexis — is framed in the
  product as premium roadmap; candidate news APIs are listed in Source Monitor."
- **"Different sector/market?"** — "Sector-agnostic engine — swap the entity list,
  recalibrate weights and the trust matrix. Region scoping is already in the wizard."

## Practical tips

- Hard-refresh before the call; keep a preloaded backup tab.
- If you toggled sources/watchlist while rehearsing, hit **Reset to all** (Companies)
  and re-enable all source classes — or clear site data — so counts match this script.
- Never skip Act 4. If time is short, drop Act 6.
- Don't click "Source article" mid-demo; point at it.
