import React, { useState } from 'react';
import { 
  Printer, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  Calendar, 
  ShieldCheck, 
  FileText,
  Building,
  Target
} from 'lucide-react';
import { InvestmentThesisMemo } from '../types';

interface MemoViewerProps {
  memo: InvestmentThesisMemo;
  onOpenTranscript?: () => void;
}

export const MemoViewer: React.FC<MemoViewerProps> = ({ memo, onOpenTranscript }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyMarkdown = () => {
    const text = formatMemoAsMarkdown(memo);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadJson = () => {
    const blob = new Blob([JSON.stringify(memo, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `investment_memo_${memo.ticker}_${memo.asOfDate.replace(/\s+/g, '_')}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getRatingBadge = (rating: string) => {
    switch (rating) {
      case 'OVERWEIGHT':
        return 'bg-emerald-50 text-emerald-800 border-emerald-300';
      case 'UNDERWEIGHT':
        return 'bg-red-50 text-red-800 border-red-300';
      case 'EQUAL-WEIGHT':
      default:
        return 'bg-amber-50 text-amber-800 border-amber-300';
    }
  };

  return (
    <article className="bg-white border border-slate-300 rounded-xl shadow-md overflow-hidden print-container mb-12">
      {/* Institutional Top Bar / Tear-Sheet Banner */}
      <div className="bg-slate-900 text-white px-6 py-5 border-b border-slate-800">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Company & Ticker Identity */}
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 mb-1">
              <span>{memo.exchange}</span>
              <span>•</span>
              <span className="font-semibold text-slate-300">EQUITY RESEARCH NOTE</span>
              <span>•</span>
              <span>As of {memo.asOfDate}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-white flex items-center space-x-3">
              <span>{memo.companyName}</span>
              <span className="font-mono text-xl font-normal text-slate-300 bg-slate-800 px-2.5 py-0.5 rounded border border-slate-700">
                {memo.ticker}
              </span>
            </h1>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl italic font-serif">
              "{memo.primaryQuestion}"
            </p>
          </div>

          {/* Quick Action Toolbar (No Print) */}
          <div className="flex items-center space-x-2 no-print self-start lg:self-auto">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs font-medium border border-slate-700 transition-colors shadow-sm"
              title="Print institutional tear-sheet or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs font-medium border border-slate-700 transition-colors shadow-sm"
              title="Copy memo as formatted Markdown"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy MD'}</span>
            </button>
            <button
              onClick={handleDownloadJson}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs font-medium border border-slate-700 transition-colors shadow-sm"
              title="Download structured JSON"
            >
              <Download className="w-3.5 h-3.5" />
              <span>JSON</span>
            </button>
            {onOpenTranscript && (
              <button
                onClick={onOpenTranscript}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-500 text-xs font-semibold transition-colors shadow-sm"
                title="View step-by-step agent audit trace"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Audit Trace</span>
              </button>
            )}
          </div>
        </div>

        {/* Investment Verdict Summary Bar */}
        <div className="mt-5 pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {/* Recommendation */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
              Recommendation
            </div>
            <div className="mt-1">
              <span className={`inline-block px-2.5 py-1 rounded text-xs font-bold font-mono border ${getRatingBadge(memo.rating)}`}>
                {memo.rating}
              </span>
            </div>
          </div>

          {/* Target Price */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
              Target Price (12M)
            </div>
            <div className="text-xl font-bold font-mono text-white mt-0.5">
              ${memo.targetPrice.toFixed(2)}
            </div>
          </div>

          {/* Current Price & Upside */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
              Current / Implied Upside
            </div>
            <div className="text-xl font-bold font-mono text-white mt-0.5 flex items-center space-x-1.5">
              <span>${memo.currentPrice.toFixed(2)}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded font-mono ${
                memo.impliedUpsidePercent >= 0 ? 'text-emerald-400 bg-emerald-950/60' : 'text-red-400 bg-red-950/60'
              }`}>
                {memo.impliedUpsidePercent >= 0 ? '+' : ''}{memo.impliedUpsidePercent}%
              </span>
            </div>
          </div>

          {/* Conviction Level */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
              Conviction Level
            </div>
            <div className="text-base font-bold text-slate-200 mt-1 font-mono">
              {memo.conviction} CONVICTION
            </div>
          </div>
        </div>
      </div>

      {/* Main Document Body */}
      <div className="p-6 sm:p-8 space-y-8 bg-white">
        
        {/* Section 1: Executive Summary */}
        <section>
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-200 mb-3">
            <Target className="w-4 h-4 text-slate-700" />
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider font-mono">
              Executive Investment Summary
            </h2>
          </div>
          <div className="text-slate-800 text-[15px] leading-relaxed font-serif space-y-3">
            {memo.executiveSummary.split('\n\n').map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </section>

        {/* Section 2: 3 Core Thesis Pillars */}
        <section>
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-200 mb-4">
            <Building className="w-4 h-4 text-slate-700" />
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider font-mono">
              Core Investment Thesis (3 Structural Pillars)
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {memo.thesisPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 border border-slate-200 rounded-lg p-4 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-bold text-slate-500 uppercase">
                      Pillar 0{idx + 1}
                    </span>
                    <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold ${
                      pillar.sentiment === 'bullish'
                        ? 'bg-emerald-100 text-emerald-800'
                        : pillar.sentiment === 'cautious'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-slate-200 text-slate-700'
                    }`}>
                      {pillar.sentiment}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-slate-900 text-sm leading-snug mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-700 font-sans mb-3 leading-relaxed">
                    {pillar.statement}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 space-y-1.5">
                  <div className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                    Quantified Proof Points:
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {pillar.proofPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start space-x-1.5">
                        <span className="text-slate-400 font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Financial Health & Valuation Multiples Table */}
        <section>
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-200 mb-4">
            <TrendingUp className="w-4 h-4 text-slate-700" />
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider font-mono">
              Financial Scorecard & Valuation Multiples
            </h2>
          </div>
          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-mono text-[11px] uppercase border-b border-slate-200">
                  <th className="py-2.5 px-3 font-semibold">Revenue (TTM)</th>
                  <th className="py-2.5 px-3 font-semibold">YoY Growth</th>
                  <th className="py-2.5 px-3 font-semibold">Gross Margin</th>
                  <th className="py-2.5 px-3 font-semibold">Operating Margin</th>
                  <th className="py-2.5 px-3 font-semibold">FCF Conversion</th>
                  <th className="py-2.5 px-3 font-semibold">NTM P/E</th>
                  <th className="py-2.5 px-3 font-semibold">EV/EBITDA</th>
                  <th className="py-2.5 px-3 font-semibold">Rule of 40</th>
                  <th className="py-2.5 px-3 font-semibold">Net Debt / EBITDA</th>
                </tr>
              </thead>
              <tbody className="font-mono text-slate-800 divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-3 font-bold">{memo.financialScorecard.revenueTTM}</td>
                  <td className="py-3 px-3 font-bold text-emerald-700">{memo.financialScorecard.revenueGrowthYoY}</td>
                  <td className="py-3 px-3">{memo.financialScorecard.grossMargin}</td>
                  <td className="py-3 px-3">{memo.financialScorecard.operatingMargin}</td>
                  <td className="py-3 px-3">{memo.financialScorecard.fcfConversion}</td>
                  <td className="py-3 px-3 font-bold text-blue-700">{memo.financialScorecard.ntmPE}</td>
                  <td className="py-3 px-3">{memo.financialScorecard.evEbitda}</td>
                  <td className="py-3 px-3 font-bold text-emerald-700">{memo.financialScorecard.ruleOf40}</td>
                  <td className="py-3 px-3">{memo.financialScorecard.netDebtToEbitda}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Bull / Base / Bear Scenario Sensitivity Matrix */}
        <section>
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-200 mb-4">
            <ShieldCheck className="w-4 h-4 text-slate-700" />
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider font-mono">
              Scenario Analysis & Sensitivity Matrix
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Bull Case */}
            <div className="p-4 rounded-lg border border-emerald-200 bg-emerald-50/40">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-emerald-800 uppercase">
                  Bull Case ({memo.scenarioAnalysis.bull.probability}% Prob)
                </span>
                <span className="text-base font-bold font-mono text-emerald-700">
                  ${memo.scenarioAnalysis.bull.targetPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed mt-2">
                {memo.scenarioAnalysis.bull.rationale}
              </p>
            </div>

            {/* Base Case */}
            <div className="p-4 rounded-lg border border-slate-300 bg-slate-50/60">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-slate-800 uppercase">
                  Base Case ({memo.scenarioAnalysis.base.probability}% Prob)
                </span>
                <span className="text-base font-bold font-mono text-slate-900">
                  ${memo.scenarioAnalysis.base.targetPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed mt-2">
                {memo.scenarioAnalysis.base.rationale}
              </p>
            </div>

            {/* Bear Case */}
            <div className="p-4 rounded-lg border border-red-200 bg-red-50/40">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-red-800 uppercase">
                  Bear Case ({memo.scenarioAnalysis.bear.probability}% Prob)
                </span>
                <span className="text-base font-bold font-mono text-red-700">
                  ${memo.scenarioAnalysis.bear.targetPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed mt-2">
                {memo.scenarioAnalysis.bear.rationale}
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Catalyst Schedule Timeline */}
        <section>
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-200 mb-4">
            <Calendar className="w-4 h-4 text-slate-700" />
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider font-mono">
              Key Catalysts & Milestones Schedule
            </h2>
          </div>
          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-mono text-[11px] uppercase border-b border-slate-200">
                  <th className="py-2.5 px-3 font-semibold w-32">Horizon</th>
                  <th className="py-2.5 px-3 font-semibold">Event & Market Milestones</th>
                  <th className="py-2.5 px-3 font-semibold w-24">Impact</th>
                  <th className="py-2.5 px-3 font-semibold w-24">Bias</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {memo.catalystTimeline.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80">
                    <td className="py-2.5 px-3 font-mono font-medium text-slate-500">{item.horizon}</td>
                    <td className="py-2.5 px-3 font-medium text-slate-900">{item.event}</td>
                    <td className="py-2.5 px-3">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                        item.expectedImpact === 'High' ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {item.expectedImpact}
                      </span>
                    </td>
                    <td className="py-2.5 px-3">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                        item.bias === 'Positive'
                          ? 'text-emerald-700 bg-emerald-50'
                          : item.bias === 'Negative'
                          ? 'text-red-700 bg-red-50'
                          : 'text-amber-700 bg-amber-50'
                      }`}>
                        {item.bias}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6: Risk Matrix & Mitigants */}
        <section>
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-200 mb-4">
            <AlertTriangle className="w-4 h-4 text-slate-700" />
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider font-mono">
              Downside Risk Ledger & Operational Mitigants
            </h2>
          </div>
          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-mono text-[11px] uppercase border-b border-slate-200">
                  <th className="py-2.5 px-3 font-semibold w-36">Category</th>
                  <th className="py-2.5 px-3 font-semibold">Identified Risk Factor</th>
                  <th className="py-2.5 px-3 font-semibold w-24">Severity</th>
                  <th className="py-2.5 px-3 font-semibold">Strategic Mitigant</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {memo.riskMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80">
                    <td className="py-2.5 px-3 font-mono font-bold text-slate-800">{item.category}</td>
                    <td className="py-2.5 px-3 text-slate-800">{item.risk}</td>
                    <td className="py-2.5 px-3">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                        item.severity === 'High'
                          ? 'bg-red-100 text-red-800 border border-red-200'
                          : item.severity === 'Medium'
                          ? 'bg-amber-100 text-amber-800 border border-amber-200'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {item.severity}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">{item.mitigant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 7: Citations & Audit Evidence */}
        <section className="pt-4 border-t border-slate-200">
          <div className="flex items-center space-x-2 pb-2 mb-3">
            <FileText className="w-4 h-4 text-slate-500" />
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
              Primary Citations & Regulatory References
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {memo.citations.map((cite, idx) => (
              <div key={idx} className="p-2.5 bg-slate-50 rounded border border-slate-200 text-xs text-slate-600">
                <div className="font-semibold text-slate-900 mb-0.5 flex items-center justify-between">
                  <span>{cite.title}</span>
                  {cite.url && (
                    <a
                      href={cite.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <div className="text-[11px] text-slate-400 font-mono mb-1">{cite.source}</div>
                <p className="text-[11px] text-slate-500">{cite.relevance}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Institutional Compliance Disclaimer */}
        <footer className="pt-6 border-t border-slate-200 text-xs text-slate-500 font-mono leading-relaxed">
          CONFIDENTIAL AND PROPRIETARY: Prepared by Actioneer Autonomous Stock Intelligence Platform. This memorandum is for institutional analytical evaluation only and does not constitute a formal solicitation to buy or sell securities. Historical performance is not indicative of future returns. Quantitative metrics are extracted from audited SEC filings and consensus models.
        </footer>

      </div>
    </article>
  );
};

function formatMemoAsMarkdown(memo: InvestmentThesisMemo): string {
  return `# ${memo.companyName} (${memo.ticker}): Investment Research Tear-Sheet
**Rating:** ${memo.rating} | **Target Price:** $${memo.targetPrice.toFixed(2)} | **Current Price:** $${memo.currentPrice.toFixed(2)} (${memo.impliedUpsidePercent >= 0 ? '+' : ''}${memo.impliedUpsidePercent}%)  
**Conviction:** ${memo.conviction} | **Date:** ${memo.asOfDate} | **Exchange:** ${memo.exchange}  

---

### Executive Summary
${memo.executiveSummary}

---

### Core Investment Thesis Pillars
${memo.thesisPillars.map((p, i) => `#### Pillar ${i + 1}: ${p.title} [${p.sentiment.toUpperCase()}]
${p.statement}
${p.proofPoints.map(pt => `- ${pt}`).join('\n')}
`).join('\n')}

---

### Financial Scorecard & Valuation Multiples
| Metric | Value |
|---|---|
| Revenue (TTM) | ${memo.financialScorecard.revenueTTM} |
| YoY Revenue Growth | ${memo.financialScorecard.revenueGrowthYoY} |
| Gross Margin | ${memo.financialScorecard.grossMargin} |
| Operating Margin | ${memo.financialScorecard.operatingMargin} |
| Free Cash Flow Conversion | ${memo.financialScorecard.fcfConversion} |
| NTM P/E Multiple | ${memo.financialScorecard.ntmPE} |
| EV / EBITDA | ${memo.financialScorecard.evEbitda} |
| Rule of 40 | ${memo.financialScorecard.ruleOf40} |
| Net Debt / EBITDA | ${memo.financialScorecard.netDebtToEbitda} |

---

### Scenario Sensitivity Matrix
- **Bull Case (${memo.scenarioAnalysis.bull.probability}%):** $${memo.scenarioAnalysis.bull.targetPrice} : ${memo.scenarioAnalysis.bull.rationale}
- **Base Case (${memo.scenarioAnalysis.base.probability}%):** $${memo.scenarioAnalysis.base.targetPrice} : ${memo.scenarioAnalysis.base.rationale}
- **Bear Case (${memo.scenarioAnalysis.bear.probability}%):** $${memo.scenarioAnalysis.bear.targetPrice} : ${memo.scenarioAnalysis.bear.rationale}

---
*Generated by Actioneer Deep Research Engine. Deterministic transcript stored in \`transcripts/\`.*
`;
}

