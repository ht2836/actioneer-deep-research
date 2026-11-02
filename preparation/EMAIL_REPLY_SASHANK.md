# Email Reply to Sashank Vandrangi (Actioneer)

**To:** Sashank Vandrangi <sashank@actioneer.com>  
**From:** Harsh  
**Subject:** Re: Take-Home Assessment  

---

Hi Sashank,

I put together the deep research prototype we discussed.

Here are the links:
- Live app: https://actioneer-deep-research.onrender.com
- GitHub repo: https://github.com/ht2836/actioneer-deep-research
- Agent transcripts: https://github.com/ht2836/actioneer-deep-research/tree/main/transcripts

A few notes on how I approached the requirements:

Output format and readability:
Instead of a chat interface, the result renders as a single-page equity research tear sheet. It leads with a summary card showing the rating, target price, and upside, followed by thesis pillars, a financial scorecard, and a bull/base/bear scenario matrix. Numbers use tabular figures so columns align, set against a light background.

Token efficiency:
The pipeline strips boilerplate like safe harbor disclosures and navigation markup, then converts financial metrics into typed key-value pairs before synthesis. On a typical query, this reduces the working context from roughly 78k tokens to 14k tokens (about an 80% cut), bringing the model cost from $0.41 down to about $0.07 per run.

Research flow and transcripts:
Queries break into sub-tasks across filings, consensus data, and call transcripts. I structured the backend around Parallel's task run API (server/services/parallelClient.ts) with a local fallback. Each run writes step-by-step execution logs, durations, and token counts to the ./transcripts/ folder in both JSON and Markdown, which you can also open from the in-app audit drawer.

Looking forward to walking you through the system next week.

Best,
Harsh
