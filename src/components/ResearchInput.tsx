import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight, CornerDownLeft, Sliders, Shield } from 'lucide-react';

interface PresetQuery {
  ticker: string;
  name: string;
  label: string;
  query: string;
}

const PRESET_QUERIES: PresetQuery[] = [
  {
    ticker: 'NVDA',
    name: 'NVIDIA Corp',
    label: 'Custom Silicon vs 70%+ Margin Moat',
    query: 'Can NVIDIA sustain 70%+ gross margins through 2027 given custom ASIC competition from AWS and Google?',
  },
  {
    ticker: 'PLTR',
    name: 'Palantir Technologies',
    label: 'Commercial AIP Inflection vs Defense Multiples',
    query: "Analyze Palantir's commercial AIP enterprise customer acceleration vs US government defense concentration and multiple expansion.",
  },
  {
    ticker: 'ASML',
    name: 'ASML Holding',
    label: 'High-NA EUV Monopoly vs China Export Drag',
    query: 'Evaluate ASML\'s High-NA EUV lithography monopoly against escalating China export controls and cyclic foundry capex slowdowns.',
  },
  {
    ticker: 'AAPL',
    name: 'Apple Inc',
    label: 'Services Margin Resilience vs AI Cycle',
    query: "Is Apple's Services gross margin and AI iPhone upgrade cycle sufficient to offset China market share loss and antitrust headwinds?",
  },
];

interface ResearchInputProps {
  onSearch: (query: string, mode: 'deep' | 'fast') => void;
  isLoading: boolean;
  currentQuery?: string;
}

export const ResearchInput: React.FC<ResearchInputProps> = ({
  onSearch,
  isLoading,
  currentQuery = '',
}) => {
  const [inputValue, setInputValue] = useState(currentQuery);
  const [mode, setMode] = useState<'deep' | 'fast'>('deep');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;
    onSearch(inputValue.trim(), mode);
  };

  const handleSelectPreset = (preset: PresetQuery) => {
    setInputValue(preset.query);
    onSearch(preset.query, mode);
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-xl p-5 shadow-sm no-print mb-8">
      {/* Search Title & Guidance */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="text-base font-semibold text-slate-900 flex items-center space-x-2">
            <span>Institutional Equity Deep Research</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Enter a ticker or investment thesis question. The agent autonomously ingests filings, extracts consensus metrics, and synthesizes a token-efficient memo.
          </p>
        </div>

        {/* Research Mode Selector */}
        <div className="flex items-center space-x-1 p-1 bg-slate-100 rounded-lg text-xs font-medium self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setMode('deep')}
            className={`px-3 py-1 rounded-md transition-all ${
              mode === 'deep'
                ? 'bg-white text-slate-900 shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Deep Research (Distilled)
          </button>
          <button
            type="button"
            onClick={() => setMode('fast')}
            className={`px-3 py-1 rounded-md transition-all ${
              mode === 'fast'
                ? 'bg-white text-slate-900 shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Fast Tear-Sheet
          </button>
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          <div className="absolute left-4 pointer-events-none text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading}
            placeholder="e.g. Can NVIDIA sustain 70%+ gross margins? or TSLA, MSFT, PLTR, AMZN..."
            className="w-full pl-12 pr-28 py-3.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="absolute right-2 px-4 py-2 rounded-md bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center space-x-1.5 shadow-sm active:scale-95"
          >
            {isLoading ? (
              <span className="flex items-center space-x-1">
                <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Researching...</span>
              </span>
            ) : (
              <>
                <span>Run Thesis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Preset Evaluation Prompts */}
      <div className="mt-4 pt-4 border-t border-slate-100">
        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span>Benchmark Test Cases (Instant 1-Click Evaluation):</span>
          <span className="text-slate-400 lowercase font-normal">Click any card to execute</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {PRESET_QUERIES.map((preset) => (
            <button
              key={preset.ticker}
              type="button"
              disabled={isLoading}
              onClick={() => handleSelectPreset(preset)}
              className="text-left p-2.5 rounded-lg border border-slate-200 bg-slate-50/70 hover:bg-slate-100 hover:border-slate-300 transition-all group disabled:opacity-60"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  ${preset.ticker}
                </span>
                <span className="text-[10px] text-slate-400 truncate max-w-[120px]">
                  {preset.name}
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium line-clamp-1">
                {preset.label}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

