import React from 'react';
import { X, Zap, TrendingDown, Layers, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface TokenModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TokenModal: React.FC<TokenModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 no-print animate-fadeIn">
      <div className="bg-white rounded-xl max-w-2xl w-full border border-slate-300 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-emerald-400" />
            <h3 className="font-bold text-base tracking-tight">
              Actioneer Token Efficiency & Progressive Distillation Architecture
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-xs text-slate-700">
          <div>
            <h4 className="font-bold text-sm text-slate-900 mb-1">
              Why Standard Deep Research Fails on Cost & Token Efficiency
            </h4>
            <p className="leading-relaxed text-slate-600">
              Unconstrained deep research agents dump 40k–100k raw tokens of HTML, repeated filings, and legal disclaimers directly into LLM inference windows. This incurs massive latency, high hallucination rates ("lost in the middle"), and costs $0.35–$0.90 per query.
            </p>
          </div>

          {/* Comparative Economics Table */}
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 font-mono text-[11px] text-slate-700 border-b border-slate-200">
                  <th className="py-2 px-3">Metric</th>
                  <th className="py-2 px-3">Brute-Force Scraper</th>
                  <th className="py-2 px-3 text-emerald-800 bg-emerald-50/70">Actioneer Distilled</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                <tr>
                  <td className="py-2 px-3 font-semibold text-slate-800">Context Window Fed to LLM</td>
                  <td className="py-2 px-3 text-red-600">75,000+ tokens</td>
                  <td className="py-2 px-3 font-bold text-emerald-700 bg-emerald-50/40">~14,000 tokens (-81%)</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold text-slate-800">Inference Cost / Run</td>
                  <td className="py-2 px-3 text-red-600">~$0.41 USD</td>
                  <td className="py-2 px-3 font-bold text-emerald-700 bg-emerald-50/40">~$0.07 USD (-83%)</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold text-slate-800">Cost / 10,000 Runs</td>
                  <td className="py-2 px-3 text-red-600">$4,100 USD</td>
                  <td className="py-2 px-3 font-bold text-emerald-700 bg-emerald-50/40">$680 USD (Save $3,420)</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold text-slate-800">Information Density</td>
                  <td className="py-2 px-3 text-slate-500">1.1 facts / 100t</td>
                  <td className="py-2 px-3 font-bold text-emerald-700 bg-emerald-50/40">4.3 facts / 100t</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3 Pillars of Actioneer's Compression */}
          <div className="space-y-2.5">
            <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider font-mono">
              The 3 Compression Layers:
            </h5>

            <div className="flex items-start space-x-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">1. Targeted Query Decomposition:</strong> Rather than performing generic web searches, the query is broken into 4 orthogonal vectors, preventing redundant retrieval loops.
              </div>
            </div>

            <div className="flex items-start space-x-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">2. Regex & AST Boilerplate Stripping:</strong> Automatically strips Safe Harbor disclaimers, cookie banners, navigation menus, and repetitive legal footers before synthesis.
              </div>
            </div>

            <div className="flex items-start space-x-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">3. Schema-Constrained Extraction:</strong> Numeric data (multiples, revenue, margins) are distilled directly into typed JSON structures rather than multi-page prose paragraphs.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
