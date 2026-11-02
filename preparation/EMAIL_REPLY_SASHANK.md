# Email Reply to Sashank Vandrangi (Actioneer)

**To:** Sashank Vandrangi <sashank@actioneer.com>  
**From:** Harsh  
**Subject:** Re: Take-Home Assessment  

---

Hi Sashank,

Great speaking with you last week. Ahead of our conversation, I have built and deployed the deep research product prototype based on your specifications.

Here are the links to explore the work:

1. Live Product: https://actioneer-deep-research.onrender.com
2. GitHub Repository: https://github.com/ht2836/actioneer-deep-research
3. Agent Transcripts: https://github.com/ht2836/actioneer-deep-research/tree/main/transcripts

Here is a brief overview of how the prototype addresses your focus areas:

- Readability and Banker Aesthetics:
Instead of conversational chat bubbles or generic AI summaries, the output is formatted as an institutional equity research tear-sheet (modeled after Goldman Sachs and Morgan Stanley research notes). It leads with a Bottom-Line-Up-Front (BLUF) executive card showing the verdict, target price, and implied upside, followed by three quantified investment pillars, a financial scorecard, a bull/base/bear scenario matrix, and a risk ledger. The design uses crisp serif typography on a clean alabaster background, with monospace lining figures so financial figures align vertically in tables.

- Radical Token Efficiency (~80% Compression):
Rather than stuffing 70k+ tokens of raw HTML, regulatory boilerplate, and repeated navigation headers into the LLM context, the system uses a four-tier distillation pipeline. It prunes safe harbor disclaimers and extracts typed numerical schemas ({ metric, value, period }) prior to synthesis. This compresses context from ~78,400 raw tokens down to ~14,200 working tokens (an 80% reduction), while increasing factual density to 4.3 verified facts per 100 output tokens and reducing query costs from $0.41 to $0.07.

- Deep Research Pipeline and Audit Transcripts:
The engine decomposes user questions into four distinct research vectors across SEC filings, consensus multiples, and earnings call transcripts. It integrates with Parallel's Deep Research API architecture (server/services/parallelClient.ts) and logs full deterministic traces. All execution steps, tool invocations, token counts, and step durations are saved to the ./transcripts/ folder in both machine-readable JSON and human-readable Markdown. You can inspect these directly in the repo or interactively via the "Audit Transcripts" drawer in the live UI.

Looking forward to diving into the architecture with you next week and discussing how we can scale these agentic workflows at Actioneer.

Best regards,

Harsh
