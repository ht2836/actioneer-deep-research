# Email Reply to Sashank Vandrangi (Actioneer)

**To:** Sashank Vandrangi <sashank@actioneer.com>  
**From:** Harsh  
**Subject:** Re: Take-Home Assessment  

---

Hi Sashank,

I've finished the deep research prototype we discussed.

Here are the links:
- Live app: https://actioneer-deep-research.onrender.com
- GitHub repo: https://github.com/ht2836/actioneer-deep-research
- Transcripts: https://github.com/ht2836/actioneer-deep-research/tree/main/transcripts

A quick overview of the build:

For readability, I avoided a chat interface and built an equity research tear sheet with a light theme. It leads with a summary card showing the rating, target price, and implied upside, followed by thesis pillars, a financial scorecard, and bull/bear scenarios. Tables use monospace lining figures so decimal points align vertically.

For token efficiency, the pipeline strips safe harbor disclosures, navigation markup, and boilerplate from SEC filings before extracting financial metrics into typed key-value pairs. On a typical run, this cuts working context from roughly 78,000 tokens down to 14,000 (about an 80% reduction), reducing cost from $0.41 to $0.07 per query.

The research agent splits questions into sub-queries across filings, consensus estimates, and earnings transcripts. I connected it to Parallel's task run API (server/services/parallelClient.ts) with a deterministic fallback. Every run logs full tool traces, durations, and token counts to ./transcripts/ in JSON and Markdown, and you can also review past runs in the app's audit drawer.

Looking forward to our call next week.

Best,
Harsh
