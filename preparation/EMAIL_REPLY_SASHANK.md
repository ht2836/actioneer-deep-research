# Email Reply to Sashank Vandrangi (Actioneer)

**To:** Sashank Vandrangi <sashank@actioneer.com>  
**From:** Harsh  
**Subject:** Re: Take-Home Assessment  

---

Hi Sashank,

I have put together and deployed the deep research prototype based on the scope we discussed.

Here are the links:
- Live application: https://actioneer-deep-research.onrender.com
- GitHub repository (public): https://github.com/ht2836/actioneer-deep-research
- Agent transcripts: https://github.com/ht2836/actioneer-deep-research/tree/main/transcripts

A few details on how the prototype addresses your focus areas:

Output readability and banker aesthetics:
Rather than a conversational chat feed, the interface renders as a Wall Street equity research tear sheet. The top banner delivers a fast verdict (rating, target price, implied upside, conviction level), followed by three structured thesis pillars, an institutional financial scorecard, a bull/base/bear scenario matrix, and a risk ledger. The layout uses a clean light background with tabular monospace numbers so figures align vertically in tables.

Token efficiency (~80% compression):
To avoid stuffing 80k+ tokens of raw filings into the LLM context, the pipeline applies progressive distillation. It strips legal disclaimers and website boilerplate, then extracts core financial numbers into typed schemas before synthesis. On a typical query, this drops the working context from ~78,400 raw tokens to ~14,200 tokens (an 80% reduction), lowering inference cost from $0.41 to $0.07 per run while keeping facts per token high.

Research pipeline and audit logging:
Queries decompose into targeted research vectors across SEC filings, consensus multiples, and earnings transcripts. The service is integrated with Parallel's task run structure (server/services/parallelClient.ts) alongside a deterministic fallback. Every query logs complete traces (tool calls, prompts, phase durations, and token counts) to the ./transcripts/ directory in both JSON and Markdown, which you can also browse interactively from the in-app audit drawer.

Looking forward to walking you through the implementation and discussing how we can scale these workflows next week.

Best,
Harsh
