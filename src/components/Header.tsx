import React from 'react';
import { ActioneerLogo } from './ActioneerLogo';
import { ShieldCheck, FileText, Zap, Sparkles, Database } from 'lucide-react';

interface HeaderProps {
  transcriptCount: number;
  onOpenTranscripts: () => void;
  onOpenTokenModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  transcriptCount,
  onOpenTranscripts,
  onOpenTokenModal,
}) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-[0_1px_3px_rgba(0,0,0,0.03)] no-print">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Official Actioneer Logo & Tagline */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <ActioneerLogo width={138} height={21} className="text-slate-900 hover:opacity-90 transition-opacity" />
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 tracking-wide font-mono">
              Deep Research
            </span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-slate-200"></div>
          <p className="hidden md:block text-xs text-slate-500 font-medium tracking-tight">
            Institutional Equity Research and Token Distillation Engine
          </p>
        </div>

        {/* System Badges & Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          {/* Active Distillation Badge */}
          <button
            onClick={onOpenTokenModal}
            className="shrink-0 whitespace-nowrap inline-flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium hover:bg-emerald-100 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
            title="Click to view Token Economics Framework"
            aria-label="View Token Distillation Architecture"
          >
            <Zap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="font-semibold hidden lg:inline">Token Distillation: Active (~80% Savings)</span>
            <span className="font-semibold lg:hidden">~80% Token Savings</span>
          </button>

          {/* Transcript Audit Log Button */}
          <button
            onClick={onOpenTranscripts}
            className="shrink-0 whitespace-nowrap inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1.5 rounded-md bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-all shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1"
            aria-label="Open Audit Transcripts Drawer"
          >
            <Database className="w-3.5 h-3.5 shrink-0" />
            <span>Audit Transcripts</span>
            <span className="px-1.5 py-0.5 rounded-full bg-slate-700 text-[11px] font-mono font-medium">
              {transcriptCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

