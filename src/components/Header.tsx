import React from 'react';
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
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-[0_1px_2px_rgba(0,0,0,0.03)] no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand & Positioning */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-md bg-slate-900 flex items-center justify-center text-white font-bold text-lg shadow-sm">
            A
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-slate-900 text-lg tracking-tight">Actioneer</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 uppercase tracking-wider">
                Deep Research
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Institutional Stock Intelligence & Token Distillation Engine
            </p>
          </div>
        </div>

        {/* System Badges & Actions */}
        <div className="flex items-center space-x-3">
          {/* Active Distillation Badge */}
          <button
            onClick={onOpenTokenModal}
            className="hidden md:flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium hover:bg-emerald-100 transition-colors"
            title="Click to view Token Economics Framework"
          >
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Token Distillation Active (~80% Savings)</span>
          </button>

          {/* Transcript Audit Log Button */}
          <button
            onClick={onOpenTranscripts}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-all shadow-sm active:scale-95"
          >
            <Database className="w-3.5 h-3.5" />
            <span>Audit Transcripts</span>
            <span className="px-1.5 py-0.2 rounded-full bg-slate-700 text-[11px] font-mono">
              {transcriptCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

