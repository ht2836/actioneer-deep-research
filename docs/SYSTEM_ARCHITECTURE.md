# System Architecture & Technical Design Document

**Project:** Actioneer Deep Research Prototype  
**Module:** System Architecture, Agent Orchestration & Storage  
**Date:** November 2026  

---

## 1. High-Level Architecture Overview

The system is architected as an end-to-end, high-performance web platform composed of three primary layers:
1. **Banker-Grade Presentation Layer (Frontend):** React 18/19 + TypeScript + Tailwind CSS + Lucide Icons + Recharts, styled with Wall Street institutional typography and responsive layout.
2. **Deep Research Agent Orchestration Layer (Backend Engine):** Express/Node.js API with modular agent state machines handling query decomposition, parallel retrieval (Parallel API / Financial Intelligence Engine), progressive token distillation, and structured synthesis.
3. **Auditability & Persistence Layer (Storage):** Deterministic transcript persistence storing complete execution traces, tool payloads, and token consumption ledgers on disk (`transcripts/`) with in-app inspection endpoints.

```
+-----------------------------------------------------------------------------------+
|                           USER / BANKER CLIENT UI                                 |
|  - Research Prompt & Presets (NVDA, PLTR, ASML, AAPL)                             |
|  - Real-time Phase Progress Stepper                                               |
|  - Institutional Investment Memo (Valuation, Scorecard, 3 Pillars, Catalysts)    |
|  - Interactive Token Efficiency Ledger & Savings Calculator                       |
|  - Audit Transcript Inspector & Raw Trace Modal                                   |
|  - Export: Print / PDF / JSON / Markdown                                          |
+----------------------------------------+------------------------------------------+
                                         | HTTP / SSE / REST
                                         v
+-----------------------------------------------------------------------------------+
|                    DEEP RESEARCH AGENT ORCHESTRATOR API                           |
|  Endpoints:                                                                       |
|    - POST /api/research         (Execute multi-phase research run)                |
|    - GET  /api/transcripts      (List all historical research runs)               |
|    - GET  /api/transcripts/:id  (Retrieve granular trace with steps & tokens)     |
+----------------------------------------+------------------------------------------+
                                         |
               +-------------------------+-------------------------+
               |                                                   |
               v                                                   v
+-------------------------------+               +----------------------------------+
|      RESEARCH PIPELINE        |               |      TRANSCRIPT AUDIT ENGINE     |
| 1. Query Decomposition        |               |  - Assign UUID trace ID          |
| 2. Parallel Deep Retrieval    |               |  - Log intermediate prompt/resp  |
|    (Parallel API / Web / SEC) |               |  - Record token burn per phase   |
| 3. Token-Efficient Distill    |               |  - Write to `transcripts/*.json` |
| 4. Banker Thesis Synthesis    |               |  - Write human-readable `.md`    |
+-------------------------------+               +----------------------------------+
```

---

## 2. Deep Research Agent Execution Pipeline

### Phase 1: Query Decomposition & Hypothesis Generation
- Takes the user's natural language input (e.g. *"Evaluate Palantir's commercial enterprise runway vs S&P 500 valuation multiple"*).
- Extracts core ticker symbol, target business units, and competitive comparables.
- Formulates 4 targeted sub-queries executed in parallel:
  1. **Financial Health & Top-Line:** Revenue trajectory, operating margins, Rule of 40, Free Cash Flow conversion.
  2. **Economic Moat & Competitive Threat:** Pricing power, customer switching costs, ASIC/hyperscaler custom silicon threats.
  3. **Valuation & Multiples:** Forward P/E, EV/Sales, PEG ratio vs historical 5-year averages and sector peers.
  4. **Downside Catalysts & Bear Thesis:** Concentration risks, regulatory headwinds, decelerating bookings.

### Phase 2: Parallel Deep Retrieval
- Dispatches sub-queries simultaneously to minimize latency.
- Connects to Parallel's Deep Research API (via `PARALLEL_API_KEY`) with high-fidelity deterministic fallback mock datasets for zero-downtime demonstration.
- Collects raw search results, analyst commentary, and excerpted SEC 10-K/10-Q filing quotes.

### Phase 3: Token-Efficient Semantic Distillation
- **Problem:** Raw financial web dumps contain boilerplate footers, disclaimer text, HTML noise, and repeated narrative padding (averaging 30,000–60,000 tokens).
- **Distillation Algorithm:**
  1. *Boilerplate Stripping:* Removes non-analytical disclaimers and styling artifacts.
  2. *Entity & Metric Extractor:* Extracts hard financial numbers (EPS, margins, guidance, multiples) and assigns them to typed schema keys.
  3. *Semantic Deduping:* Drops duplicate news regurgitations across different sources.
  4. *Compression Ledger:* Calculates exact tokens before vs after distillation to report transparently to the user.

### Phase 4: Banker Thesis Synthesis
- Feeds the distilled context into a structured JSON schema conforming to institutional equity research layouts.
- Validates field constraints:
  - Recommendation rating (`OVERWEIGHT`, `EQUAL-WEIGHT`, `UNDERWEIGHT`).
  - Strict 3-pillar thesis structure.
  - Quantitative Scenario Table (Bull, Base, Bear) with probability-weighted price targets.
  - Date-bound Catalyst Schedule.
  - Risk Matrix with Severity (Low/Med/High) and Mitigant.

---

## 3. Data Schema & Contracts

### 3.1 Research Output Schema (`InvestmentThesisMemo`)
```typescript
interface InvestmentThesisMemo {
  id: string;
  ticker: string;
  companyName: string;
  asOfDate: string;
  rating: 'OVERWEIGHT' | 'EQUAL-WEIGHT' | 'UNDERWEIGHT';
  currentPrice: number;
  targetPrice: number;
  impliedUpsidePercent: number;
  conviction: 'HIGH' | 'MEDIUM' | 'SPECULATIVE';
  
  executiveSummary: string;
  
  thesisPillars: Array<{
    title: string;
    statement: string;
    proofPoints: string[];
    sentiment: 'bullish' | 'neutral' | 'cautious';
  }>;
  
  financialScorecard: {
    revenueTTM: string;
    revenueGrowthYoY: string;
    grossMargin: string;
    operatingMargin: string;
    fcfConversion: string;
    ntmPE: string;
    evEbitda: string;
    ruleOf40: string;
    netDebtToEbitda: string;
  };
  
  scenarioAnalysis: {
    bull: { targetPrice: number; probability: number; rationale: string };
    base: { targetPrice: number; probability: number; rationale: string };
    bear: { targetPrice: number; probability: number; rationale: string };
  };
  
  catalystTimeline: Array<{
    horizon: '0-3 Months' | '3-6 Months' | '6-12 Months';
    event: string;
    expectedImpact: 'High' | 'Medium' | 'Low';
    bias: 'Positive' | 'Negative' | 'Volatile';
  }>;
  
  riskMatrix: Array<{
    category: string;
    risk: string;
    severity: 'High' | 'Medium' | 'Low';
    mitigant: string;
  }>;
  
  tokenEfficiencyMetrics: {
    rawRetrievedTokens: number;
    distilledContextTokens: number;
    outputMemoTokens: number;
    tokensSaved: number;
    compressionPercentage: number;
    estimatedCostWithDistillationUsd: number;
    estimatedCostWithoutDistillationUsd: number;
    informationDensityScore: number; // metrics per 100 tokens
  };
  
  citations: Array<{
    title: string;
    source: string;
    url?: string;
    relevance: string;
  }>;
}
```

### 3.2 Transcript Trace Schema (`AgentTranscript`)
```typescript
interface AgentTranscript {
  runId: string;
  timestamp: string;
  userPrompt: string;
  ticker: string;
  executionDurationMs: number;
  model: string;
  totalTokensBurned: number;
  tokenSavingsPercentage: number;
  steps: Array<{
    stepNumber: number;
    phase: 'DECOMPOSITION' | 'PARALLEL_RETRIEVAL' | 'TOKEN_DISTILLATION' | 'THESIS_SYNTHESIS';
    description: string;
    toolCalled?: string;
    inputPayloadSummary?: string;
    outputSummary?: string;
    tokensIn: number;
    tokensOut: number;
    durationMs: number;
  }>;
  finalMemoId: string;
}
```

---

## 4. Transcript Persistence & Storage Strategy

- Transcripts are persisted locally in a dedicated directory:
  `transcripts/` (and mirrored to `e:\actioneer-software-engineer\transcripts\`).
- Each run writes two files:
  1. `transcript_{runId}.json`: Complete machine-readable audit trace for programmatic evaluation and testing.
  2. `transcript_{runId}.md`: Human-readable markdown audit report designed for the recruiter/interviewer to inspect before meeting.
- The UI contains a top-level **"Agent Transcripts Audit"** navigation drawer where the user can click into any past run, review the step-by-step token burn, and inspect the raw retrieval vs distilled prompts.

---

## 5. Security, Robustness & Error Handling
- **API Key Security:** `PARALLEL_API_KEY` and other credentials reside strictly in server-side environment variables and are never leaked to client bundles.
- **Fail-Safe Mock Engine:** If network or API limits occur, the system falls back seamlessly to internal high-fidelity financial datasets, ensuring zero presentation crashes during live recruiter evaluation.
- **Sanitization:** All synthesized markdown and tables are validated against schema boundaries prior to rendering.
