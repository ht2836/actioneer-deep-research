# Evaluation & Benchmark Plan

**Product:** Actioneer Deep Research Prototype  
**Scope:** Automated Agent Evaluation, Output Verification & Quality Scoring  
**Date:** November 2026  

---

## 1. Evaluation Methodology

To meet the rigorous standards expected by Actioneer leadership (combining AI agent engineering with deep financial product usability), this prototype is evaluated across four core axes:

```
                          [EVALUATION MATRIX]
                                   ^
                                   |
            (A) Readability &      |     (B) Token Efficiency
            Banker Usability       |         & Distillation
            - Visual Hierarchy     |         - Compression %
            - BLUF Score           |         - Token-to-Fact Ratio
            - Tabular Clarity      |         - Cost / Run
                                   |
      <----------------------------+---------------------------->
                                   |
            (C) Factual Grounding  |     (D) Architectural Robustness
            & Citation Density     |         & Transcript Audit
            - SEC 10-K Consistency |         - Deterministic Logging
            - Numerical Precision  |         - Zero-Downtime Fallback
            - Hallucination Rate   |         - Latency < 10s
                                   |
                                   v
```

---

## 2. Test Suite & Evaluation Cases

Four distinct market archetypes are used to benchmark the prototype's versatility:

### Test Case 1: Mega-Cap Tech Leader — NVIDIA (NVDA)
- **Core Question:** *"Can NVIDIA sustain 70%+ gross margins through 2027 given custom ASIC competition from AWS and Google?"*
- **Key Test Criteria:**
  - Must evaluate Blackwell ramp and data center capex cycles.
  - Must address hyperscaler in-house silicon (Trainium, TPU, Maia).
  - Must compute valuation multiples (NTM P/E vs growth).
  - Token reduction target: > 75%.

### Test Case 2: High-Growth Enterprise AI — Palantir (PLTR)
- **Core Question:** *"Analyze Palantir's commercial AIP enterprise customer acceleration vs US government defense concentration and multiple expansion."*
- **Key Test Criteria:**
  - Must separate US Commercial revenue growth (50%+) from Government defense revenue.
  - Must evaluate Rule of 40 score and extreme forward P/E multiple premium.
  - Token reduction target: > 75%.

### Test Case 3: Global Monopoly Capex Moat — ASML Holding (ASML)
- **Core Question:** *"Evaluate ASML's High-NA EUV lithography monopoly against escalating China export controls and cyclic foundry capex slowdowns."*
- **Key Test Criteria:**
  - Must break down lithography backlog, High-NA ASPs (~€350M/tool), and China revenue exposure risk.
  - Balanced Bull vs Bear scenario on foundry utilization.
  - Token reduction target: > 75%.

### Test Case 4: Consumer Ecosystem & Services Inflection — Apple (AAPL)
- **Core Question:** *"Is Apple's Services gross margin and AI iPhone upgrade cycle sufficient to offset China market share loss and antitrust headwinds?"*
- **Key Test Criteria:**
  - Must assess Services margin expansion (70%+) vs hardware replacement cycles.
  - Must detail DoJ and EU DMA antitrust implications.
  - Token reduction target: > 70%.

---

## 3. Automated Scoring Rubric

Each research run computes an automated quality score out of 100 based on:

| Category | Weight | Target Metric |
|---|---|---|
| **Token Compression** | 30% | `> 70%` context reduction vs unconstrained raw scrape |
| **Information Density** | 25% | `> 3.5` verified financial facts/metrics per 100 output tokens |
| **Structural Completeness**| 25% | 100% presence of Rating, Price Target, 3 Pillars, Multiples Table, Scenarios, and Risks |
| **Audit Completeness** | 20% | Complete step-by-step trace persisted to disk in `transcripts/` |

---

## 4. Transcript Verification Process

1. Run the test suite or execute queries through the UI.
2. Confirm files are written in `transcripts/`:
   - `transcript_<id>.json`
   - `transcript_<id>.md`
3. Verify that each transcript contains:
   - Run ID and Unix timestamp
   - Decomposition sub-queries
   - Retrieval tool payloads
   - Distillation compression ratios
   - Final JSON output

