# News-to-Insight — Client Demo Script

**URL:** [abhayypandeyy25.github.io/msci-news-to-insight](https://abhayypandeyy25.github.io/msci-news-to-insight/)

**Length:** ~12–15 minutes + Q&A. Refresh the page once BEFORE the call starts.

---

## What this platform is (30-second elevator intro — say this first)

> "This is News-to-Insight, our financial intelligence platform. It ingests raw news
> flow 24×7 — public feeds today, licensed feeds in production — and converts it into
> six scored indices per company: three on the risk side (Controversy, Risk, ESG) and
> three on the opportunity side (Momentum, Catalyst, Sentiment), netted into a single
> 0–100 health score. The key differentiator: every single point on every score drills
> down to dated, sourced, corroborated news events. Nothing is a black box.
> And what you're seeing today is not mock data — this is six months of real news,
> January to June 2026, across 15 Indian banks and NBFCs: about 7,000 articles
> distilled into 1,700 scored events."

---

## Act 1 — The hero story (Workbench, ~4 min)

The app opens on **Kotak Mahindra Bank** deliberately. Tell the story:

**Say:** "Let me show you why Kotak is front and center. Through this window, a real
controversy played out — ₹150 crore of Panchkula Municipal Corporation fixed deposits
went missing at a Kotak branch. Watch how the platform tracked it."

**Point at (top to bottom):**
1. **Health score 53 — "Watch"** — and the declining 12-week history sparkline.
2. **The netting bar** — "opportunity side 38 vs risk side 34 — good news offsets bad,
   it's not a naive bad-news counter."
3. **Six index cards** — Controversy at 60 is the cohort max. "Each card is one lens;
   click one and the feed filters to just those events."
4. **Live event stream** — scroll slowly. The arc is visible as separate events:
   FD fraud discovered → staff arrested → **ED PMLA raids** → ex-VP arrested →
   Haryana de-empanels Kotak. Plus the CEO's surprise exit — a *different pillar*
   (key-person risk) on the same entity at the same time.

**Money line:** "Every one of these is a real, checkable event. Watch —"

## Act 2 — The evidence drawer (THE differentiator, ~3 min)

**Click the ED-arrest event card** (controversy, stage badge). The drawer opens.

Walk it top to bottom — slowly:
1. **Event score 0.80** and the **six factors** with bars: Severity × Credibility ×
   Corroboration × Velocity × Stage × Decay. "Severity 0.75 — an arrest is material.
   Credibility 0.78 — that's not a global score, it's this source *in this sector*."
2. **Stage modifier timeline** — allegation 0.6 → probe 1.2 → **charge 1.4 (lit up)** →
   resolution 0.3. **Say:** "This is what makes it a live gauge, not a blocklist —
   when a matter settles, the score collapses toward 0.3× and releases. Companies
   aren't punished forever."
3. **Trust tollgate cell** — source class × sector weight feeding credibility.
4. **Corroboration** — independent source classes that confirmed it.
5. **Provenance chain** — capture → entity resolution → classification → corroboration → scoring.
6. **Audit trail + Analyst review** — click **Confirm** live: an audit entry appears
   ("You · just now"). "Human-in-the-loop, fully audited."
7. **"Source article" chip** — "and it links to the actual article." (Don't click it —
   just point; avoids losing your tab.)

Press **Esc** to close.

## Act 3 — The contrast (30 sec)

**Click the POONAWALLA chip** in the coverage strip.

**Say:** "Same engine, opposite story. Poonawalla Fincorp came through the window
clean — zero controversy events. Profit up ~4×, a ₹2,500 crore QIP — health 67,
all green. The system doesn't manufacture drama where there isn't any."

(Optionally flash SBI — health 41, ₹6,338 crore tax demand — "and the range in between.")

## Act 4 — Trust Tollgate (~2 min)

**Click Trust Tollgate** in the sidebar (note the quarantine count badge).

1. **The matrix** — "No source gets one global trust score. The same outlet can be
   strong in banking and weak in pharma. These weights ARE the credibility factor."
2. **Quarantine queue** — "Low-trust items aren't deleted — they're held in a watch
   state. Two independent confirmations promote them out. Nothing silently dropped,
   nothing polluting the score."

## Act 5 — Scoring Model, live (~2 min — the interactive wow)

**Click Scoring Model.** Show the formula card, then the **live calculator**:

**Do:** Drag **Stage modifier** slowly from 1.2 down to 0.3.
**Say:** "Watch the event score collapse — this is a settlement. And the entity score
falls but doesn't crater, because the roll-up is saturating — no single event can run
a company to 100, and no single settlement erases a pattern."

(Optionally drag Credibility down: "a weak source simply can't move the needle much.")

## Act 6 — Platform close (~2 min)

Quick pass, one line each:
- **Index Suite:** "Same engine, six lenses — each with its own pillars, weights,
  decay half-lives. Click through a tab or two."
- **Source Monitor:** "What the system watches 24×7 — 7,700 raw articles this window,
  the actual outlets by trust class, per-entity coverage. Regulator-direct feeds and
  CAMEO event codes are the production roadmap items you see marked."
- **Pipeline:** "The six-layer architecture: ingest → normalize → trust tollgate →
  extract → score → deliver."
- **Distribution (end here — the business slide):** "Each index licenses independently
  to a different buyer — controversy to risk desks, ESG to mandate screening, catalyst
  to event-driven funds. Delivered as APIs, this dashboard, and generated analyst
  briefs that cite their events."

**Closing line:** "So: raw news in, six explainable indices out, every score point
traceable to a sourced event, a trust gate in the middle, and a human in the loop.
That's News-to-Insight."

---

## Q&A prep (likely questions, honest answers)

- **"Is this live/real-time?"** — "This demo runs on a Jan–Jun 2026 backfill, refreshed
  by our pipeline. The production build adds scheduled continuous ingestion and the
  API layer — the architecture you saw in Pipeline/Distribution."
- **"What sources?"** — "Today: Google News RSS + GDELT, free feeds — which got us
  7,000 articles across 15 entities. Production: licensed wires, regulator/exchange
  direct feeds. The trust matrix is built exactly for that mix."
- **"How is classification done?"** — "An LLM pass classifies each article: index,
  pillar, direction — 'sued' vs 'won' — severity, stage, and story clustering for
  corroboration. Deterministic rules handle source-class and trust."
- **"Can I trust the scores?"** — open any drawer: "You never have to trust a number —
  you audit it. Factors, sources, provenance, and the human review trail are right there."
- **"Different sector/market?"** — "Sector-agnostic engine: swap the entity list,
  recalibrate pillar weights and the trust matrix — the email pitch is BFSI first."

## Practical tips

- Hard-refresh (Cmd+Shift+R) once before the call; keep a second tab preloaded as backup.
- Best flow order = the acts above; skip Act 6 items if time is short — never skip Act 2.
- If the projector is small: browser zoom 110–125% reads well; the layout is fluid.
- Don't click "Source article" mid-demo (opens a news site tab); point at it instead.
- If asked something you can't answer, the Source Monitor page is a good "here's
  exactly what the system saw" fallback.
