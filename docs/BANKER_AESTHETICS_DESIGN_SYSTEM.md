# Banker Aesthetics & Readability Design System

**Target Audience:** Managing Directors, Equity Research Heads, Institutional Bankers  
**Benchmark Publications:** Goldman Sachs GIR, Morgan Stanley Equity Research, Bloomberg Intelligence  
**Theme:** Pristine Institutional Light Mode  

---

## 1. Visual Design Philosophy: The Banker Test

Institutional financial professionals reject typical AI agent interfaces because they look like developer debuggers or sci-fi chat screens (pitch black backgrounds, purple neon gradients, bouncy chat bubbles, and unstructured markdown bullets).

**A banker demands:**
1. **Immediate Bottom Line Up Front (BLUF):** Rating, Target Price, Implied Upside, and Conviction visible within 1 second.
2. **Tabular Precision:** Numbers belong in structured tables with aligned decimals and period labels—not buried in 5-line conversational sentences.
3. **Structured Hierarchy:** Exactly 3 core thesis pillars, a balanced bull vs. bear scenario table, and a time-horizon catalyst schedule.
4. **Clean, Restful Typography:** Crisp serif headers paired with ultra-clean sans-serif tabular numbers and neutral slate borders.
5. **Print & PDF Perfection:** The output must look like a \$5,000 equity research tear-sheet ready to hand to an investment committee.

---

## 2. Color Palette & Typography Specifications

### 2.1 Color Palette
- **Canvas Background:** Pure White (`#FFFFFF`) with subtle Warm Alabaster canvas base (`#F8FAFC`).
- **Surface Cards:** `#FFFFFF` with ultra-fine `1px solid #E2E8F0` borders and soft `0 1px 3px rgba(0,0,0,0.05)` elevation.
- **Header Top-bar / Primary Brand:** Institutional Midnight Navy (`#0F172A`).
- **Primary Body Text:** Charcoal Slate (`#1E293B`).
- **Muted Text / Secondary Labels:** Muted Steel (`#64748B`).
- **Bullish / Positive Accents:** Forest Emerald (`#059669` / bg `#ECFDF5`).
- **Bearish / Risk Accents:** Crimson Ruby (`#DC2626` / bg `#FEF2F2`).
- **Neutral / Informational Accents:** Bankers Cobalt (`#2563EB` / bg `#EFF6FF`).

### 2.2 Typography Stack
- **Document & Section Headers:** Serif authority stack (`Newsreader`, `Merriweather`, `Georgia`, serif) — evokes Wall Street Journal / Financial Times editorial rigor.
- **Body & Explanatory Text:** Modern clean sans (`Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, sans-serif).
- **Financial Multiples & Numbers:** Tabular lining numerals (`font-mono`, `Geist Mono`, `Courier New`) ensuring columns align vertically.

---

## 3. Structural Tear-Sheet Layout

The output research memo is divided into 7 standardized sections:

```
+-----------------------------------------------------------------------------------------+
| [Tear-Sheet Header]                                                                     |
| TICKER: NVDA | NVIDIA Corporation | NasdaqGS                                            |
| RATING: OVERWEIGHT | TARGET: $175.00 | CURRENT: $138.25 | UPSIDE: +26.6% | CONVICTION: HIGH |
+-----------------------------------------------------------------------------------------+
| [Executive Summary] (2 dense paragraphs summarizing business inflection & valuation)    |
+------------------------------------------------------------+----------------------------+
| [3 Core Investment Thesis Pillars]                         | [Token Economics Ledger]   |
| 1. Accelerated Computing & Blackwell Architecture Supercycle| - Context Compression: 81%|
| 2. CUDA Software Moat & Networking Inflection              | - Raw: 78.4k -> Out: 1.1k  |
| 3. CSP Capex Longevity & Enterprise Sovereign AI           | - Est. Cost: $0.07 vs $0.43|
+------------------------------------------------------------+----------------------------+
| [Financial Health & Valuation Multiples Table]                                          |
| NTM P/E: 32.4x | EV/EBITDA: 27.8x | FCF Yield: 2.8% | Rule of 40: 84% | Net Cash: $18.2B   |
+-----------------------------------------------------------------------------------------+
| [Bull / Base / Bear Scenario Sensitivity Matrix]                                        |
| Bull: $210 (25% prob)  | Base: $175 (55% prob)  | Bear: $95 (20% prob)                   |
+-----------------------------------------------------------------------------------------+
| [Catalyst Horizon Timeline] (0-3M, 3-6M, 6-12M milestones & earnings dates)            |
+-----------------------------------------------------------------------------------------+
| [Risk Factor Ledger & Mitigants] (Asymmetric risks, supply chain bottlenecks, mitigants)|
+-----------------------------------------------------------------------------------------+
| [Verifiable Citations & Footnotes] (SEC 10-K, Street Consensus, Earnings Call Transcripts|
+-----------------------------------------------------------------------------------------+
```

---

## 4. UI Micro-Interactions
- **Copy / Export Quick Actions:** Instant "Copy Markdown", "Download JSON", and "Print Tear-Sheet" buttons.
- **Step-by-Step Research Drawer:** Allows drilling down into the exact tool payloads and LLM prompts without cluttering the clean financial report.
- **Filterable Presets:** Quick-select chips at the top so any evaluator can click between NVDA, PLTR, ASML, and AAPL with zero typing.
