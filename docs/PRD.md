# Product Requirements Document (PRD)
## Project: Actioneer Deep Research  -  Institutional Stock Intelligence Prototype

**Author:** Staff Software Engineer Candidate  
**Target:** Actioneer Leadership & Engineering Assessment  
**Date:** November 2026  
**Status:** In-Development Prototype  

---

### 1. Executive Summary & Problem Statement

#### 1.1 Context
At Actioneer, the focus is on building voice-first customer engagement platforms that cheaply query enterprise data, navigate complex documents, and operate with extreme efficiency. In financial services - specifically equity research, investment banking, and capital allocation - analysts spend 15-20 hours per week parsing multi-thousand-page SEC 10-K/10-Q filings, earnings transcripts, and equity research notes.

Existing "deep research" AI prototypes suffer from two fatal flaws:
1. **Unstructured Token Bloat (Poor Token Efficiency):** Most agents fetch entire web pages and filings into raw LLM context windows, burning 60,000-120,000 tokens per query with heavy redundancy, high latency, and massive inference costs without incremental value.
2. **Poor Readability & Aesthetics (Fails the "Banker Test"):** Generic LLM outputs dump unstructured markdown bullets, conversational chatter, or gaudy dark-mode futuristic interfaces that institutional investors and managing directors reject immediately.

#### 1.2 The Solution: Actioneer Stock Intelligence (Apex Research)
A deep-research product prototype engineered specifically for investment professionals:
- **Banker-Grade Readability:** Pristine light aesthetic styled after Goldman Sachs Global Investment Research and Morgan Stanley equity memos. Clean typography, structured valuation scorecards, catalyst schedules, and probability-weighted scenario matrices.
- **Radical Token Efficiency:** A 4-stage progressive distillation pipeline that reduces raw retrieved context by **70-82%** prior to final synthesis, explicitly tracking and displaying token savings, cost metrics, and information density scores.
- **Auditability & Transcript Persistence:** Every agent thought, sub-query, tool retrieval, and compression step is written to deterministic transcript files stored in a single audit directory (`transcripts/`) with an in-app audit viewer.

---

### 2. User Personas & Use Cases

| Persona | Core Pain Point | How This Prototype Solves It |
|---|---|---|
| **Investment Banking Analyst / Associate** | Needs quick, crisp company tear-sheets and thesis memos with verifiable valuation multiples under tight deadlines. | Generates a 2-page equivalent institutional thesis memo in <30 seconds with clean tables, key catalysts, and bull/bear cases. |
| **Buy-Side Portfolio Manager** | Drowning in noisy 80-page broker reports; needs clear thesis pillars and asymmetric risk/reward skew. | Formats research around 3 concrete thesis pillars, valuation sensitivity, and probability-weighted price drivers. |
| **Enterprise CFO / Corp Dev Lead** | High cost and token burn running automated AI workflows across hundreds of portfolio/target companies. | Built-in Token Efficiency Engine proving low cost-per-run ($0.03-$0.08 vs $0.35+ standard) and measurable token compression. |

---

### 3. Core Functional Requirements

#### 3.1 Research Query Input & Intent Parsing
- User enters any investing or stock-focused question (e.g. *"Can NVIDIA sustain 70%+ gross margins through 2027 given custom ASIC competition from AWS and Google?"* or simply ticker searches like *PLTR*, *ASML*, *NVDA*).
- 4 pre-built institutional query presets for instant 1-click evaluation:
  1. **NVIDIA (NVDA):** Custom Silicon Defense & Data Center Capex Longevity.
  2. **Palantir (PLTR):** Commercial AIP Monetization vs Government Concentration.
  3. **ASML Holding (ASML):** High-NA EUV Moat vs China Export Restrictions.
  4. **Apple (AAPL):** Services Expansion, Hardware Refresh, and Regulatory Headwinds.
- Real-time deep research execution toggle (Fast Memo vs Comprehensive Deep Research).

#### 3.2 Autonomous Deep Research Agent Pipeline
- **Phase 1: Query Decomposition & Sub-Hypotheses Generation**
  - Break down the prompt into 4 distinct research vectors:
    - *Fundamental Performance & Financial Health*
    - *Moat & Competitive Dynamics*
    - *Valuation Multiples & Street Consensus*
    - *Downside Risks & Bear Catalysts*
- **Phase 2: Parallelized Deep Retrieval**
  - Query Parallel's Deep Research API / Web Financial Intelligence Engine in parallel.
  - Pull SEC filing excerpts, consensus EPS/revenue estimates, and key earnings call quotes.
- **Phase 3: Semantic Deduplication & Token Distillation**
  - Token-Efficient Extraction: Strip boilerplate legal disclaimers, repeated financial disclosures, and irrelevant html/markup.
  - Convert unstructured blocks into structured typed JSON schemas with tight character budgets.
- **Phase 4: Institutional Thesis Synthesis**
  - Generate the final structured investment note conforming strictly to banker layout guidelines.

#### 3.3 Banker-Grade Presentation & Readability (Aesthetics)
- **Palette:** Institutional crisp light mode (`#FFFFFF` background, `#F8FAFC` slate cards, `#0F172A` deep navy text, `#10B981` emerald for bull/positive, `#EF4444` crimson for bear/risks, `#3B82F6` cobalt accents).
- **Typography:** High-readability font stack with serif titles (`Newsreader`/`Georgia`) and precision tabular numerals (`Inter`/`Geist Mono`).
- **Structured Sections:**
  1. **Header Banner:** Ticker, Company, Current Price, Recommendation (OVERWEIGHT / EQUAL-WEIGHT / UNDERWEIGHT), Target Price, Implied Upside %, Conviction Level.
  2. **Executive Summary:** 2-paragraph high-density executive verdict.
  3. **3 Thesis Pillars:** Clear hypotheses with quantifiable data proof points.
  4. **Financial Health & Valuation Matrix:** P/E (NTM), EV/EBITDA, FCF Yield, Net Debt/EBITDA, Revenue CAGR.
  5. **Scenario Analysis (Bull / Base / Bear):** Target price, probability %, key assumptions.
  6. **Catalyst Schedule:** Horizon (0-3m, 3-6m, 6-12m), Catalyst description, expected directional impact.
  7. **Risk Matrix & Mitigants:** Downside scenario, severity, mitigation path.
  8. **Citations & References:** Clickable verifiable primary sources.

#### 3.4 Token Efficiency Tracking & Metrics
- The application must explicitly display a **Token Economics Ledger**:
  - `Raw Input / Retrieved Tokens`: Cumulative tokens retrieved from raw research sources.
  - `Distilled Prompt Tokens`: Tokens after deduplication, schema filtering, and distillation.
  - `Generated Output Tokens`: Tokens in final structured memo.
  - `Token Compression Ratio`: `(1 - (Distilled + Output) / Raw) * 100%`.
  - `Estimated Cost Comparison`: Standard Brute-Force Agent Cost vs Actioneer Token-Efficient Cost.
  - `Information Density Metric`: Quantifiable metrics and data points per 100 output tokens.

#### 3.5 Transcript Persistence & Audit Trail
- Every agent run generates an immutable, timestamped transcript file stored in `transcripts/` with:
  - Run metadata (Run ID, timestamp, query, ticker, duration, model, total tokens).
  - Step-by-step trace: Each agent phase, tools invoked, input prompts, intermediate raw data, distillation delta, and final response.
- In-app **Transcript Inspector Modal**: Analysts can inspect the raw agent thoughts, tool payloads, and token consumption at each micro-step directly from the UI.
- Export capabilities: Download as JSON, download as Markdown, or print to clean banker PDF.

---

### 4. Non-Functional Requirements
- **Performance:** End-to-end execution within 5-15 seconds for cached/distilled pipelines; progressive streaming progress states.
- **Reliability:** Graceful fallbacks if external search APIs rate-limit or fail; zero white-screen errors.
- **Deployability:** Single command startup (`npm run dev`), production build (`npm run build`), ready for zero-config Vercel/Railway deployment.
- **Maintainability:** Modular, typed TypeScript codebase with clean separation between UI components, research agent orchestrator, and transcript storage.

---

### 5. Success Criteria & KPIs
1. **Readability Score:** Immediate comprehension of investment stance within 10 seconds of opening the memo.
2. **Token Efficiency:** Measurable >65% reduction in context tokens utilized compared to standard unconstrained agent scrapers.
3. **Auditability:** 100% of runs logged to disk in `transcripts/` and accessible both in filesystem and UI.
4. **Banker Polish:** Zero dark-mode glow, zero cartoonish UI; matches Goldman Sachs / Morgan Stanley research portal standards.


