import React, { useState, useEffect } from 'react';
import { 
  X, 
  FileText, 
  Download, 
  Clock, 
  Zap, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  DollarSign, 
  RefreshCw,
  FolderOpen
} from 'lucide-react';
import { AgentTranscript } from '../types';

interface TranscriptDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRunId?: string;
}

export const TranscriptDrawer: React.FC<TranscriptDrawerProps> = ({
  isOpen,
  onClose,
  selectedRunId,
}) => {
  const [transcriptsList, setTranscriptsList] = useState<any[]>([]);
  const [activeTranscript, setActiveTranscript] = useState<AgentTranscript | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      loadTranscripts();
    }
  }, [isOpen, selectedRunId]);

  const loadTranscripts = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/transcripts');
      if (res.ok) {
        const list = await res.json();
        setTranscriptsList(list);

        // If a specific runId was passed or select first
        const targetId = selectedRunId || (list.length > 0 ? list[0].runId : null);
        if (targetId) {
          loadTranscriptDetail(targetId);
        }
      }
    } catch (err) {
      console.error('Failed to load transcripts list', err);
    } finally {
      setLoading(false);
    }
  };

  const loadTranscriptDetail = async (runId: string) => {
    try {
      const res = await fetch(`/api/transcripts/${runId}`);
      if (res.ok) {
        const data = await res.json();
        setActiveTranscript(data);
      }
    } catch (err) {
      console.error('Failed to load transcript detail', err);
    }
  };

  const handleDownloadJson = (t: AgentTranscript) => {
    const blob = new Blob([JSON.stringify(t, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `transcript_${t.ticker}_${t.runId}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/40 backdrop-blur-xs flex justify-end no-print" role="dialog" aria-modal="true" aria-label="Agent Transcripts Audit Ledger">
      <div className="w-full max-w-5xl md:max-w-6xl bg-white h-full shadow-2xl flex flex-col border-l border-slate-300 animate-slideLeft">
        {/* Drawer Header */}
        <div className="px-5 sm:px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center space-x-3 min-w-0 pr-2">
            <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm sm:text-base font-bold font-mono tracking-tight flex items-center space-x-2 truncate">
                <span>Agent Transcripts & Audit Ledger</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-emerald-400 border border-slate-700 shrink-0 whitespace-nowrap">
                  transcripts/
                </span>
              </h2>
              <p className="text-xs text-slate-400 truncate">
                Deterministic step-by-step execution logs persisted to filesystem
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={loadTranscripts}
              className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Refresh transcripts"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer Body: 2 Columns (List on Left, Detail on Right) */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden min-h-0">
          
          {/* Left Column: Past Run History */}
          <div className="w-full md:w-80 lg:w-84 bg-slate-50 border-r border-slate-200 overflow-y-auto p-3 space-y-2 shrink-0">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 px-2 pt-1 pb-2 flex items-center justify-between">
              <span>Saved Agent Runs ({transcriptsList.length})</span>
              <FolderOpen className="w-3.5 h-3.5 text-slate-400" />
            </div>

            {transcriptsList.map((item) => {
              const isSelected = activeTranscript?.runId === item.runId;
              return (
                <button
                  key={item.runId}
                  onClick={() => loadTranscriptDetail(item.runId)}
                  className={`w-full text-left p-3 rounded-lg border transition-all text-xs ${
                    isSelected
                      ? 'bg-white border-blue-500 shadow-sm ring-1 ring-blue-500'
                      : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-mono font-bold text-slate-900 text-xs shrink-0">
                      ${item.ticker}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 font-semibold shrink-0 whitespace-nowrap">
                      -{item.tokenSavingsPercentage}% tokens
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 line-clamp-2 mb-2 font-sans leading-snug">
                    {item.userPrompt}
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-1 border-t border-slate-100">
                    <span>{new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    <span className="font-medium text-slate-500">{(item.executionDurationMs / 1000).toFixed(1)}s</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Execution Trace */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-white space-y-6 min-w-0">
            {activeTranscript ? (
              <>
                {/* Run Metadata Header */}
                <div className="p-4 sm:p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-slate-200">
                    <div className="min-w-0 flex-1 pr-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 shrink-0">
                          ${activeTranscript.ticker}
                        </span>
                        <span className="text-xs font-mono text-slate-500 truncate">
                          Run: {activeTranscript.runId}
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-slate-900 text-sm sm:text-base mt-1.5 leading-snug">
                        "{activeTranscript.userPrompt}"
                      </h3>
                    </div>

                    <button
                      onClick={() => handleDownloadJson(activeTranscript)}
                      className="shrink-0 whitespace-nowrap self-start sm:self-auto inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:border-slate-400 transition-colors shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>Export JSON Trace</span>
                    </button>
                  </div>

                  {/* Summary Metric Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div>
                      <div className="text-slate-400 text-[10px] font-mono uppercase tracking-wider">Model Architecture</div>
                      <div className="font-mono font-semibold text-slate-800 text-xs mt-0.5 truncate" title={activeTranscript.model}>
                        {activeTranscript.model}
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[10px] font-mono uppercase tracking-wider">Latency</div>
                      <div className="font-mono font-semibold text-slate-800 text-xs mt-0.5">
                        {(activeTranscript.executionDurationMs / 1000).toFixed(2)}s
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[10px] font-mono uppercase tracking-wider">Token Reduction</div>
                      <div className="font-mono font-bold text-emerald-700 text-xs mt-0.5">
                        {activeTranscript.tokenSavingsPercentage}% saved
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[10px] font-mono uppercase tracking-wider">Cost Saved</div>
                      <div className="font-mono font-bold text-slate-900 text-xs mt-0.5">
                        +${activeTranscript.costSavedUsd.toFixed(3)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step-by-Step Execution Sequence */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Granular Execution Sequence ({activeTranscript.steps.length} Phases)</span>
                  </h4>

                  <div className="space-y-4">
                    {activeTranscript.steps.map((step) => (
                      <div
                        key={step.stepNumber}
                        className="p-4 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-all shadow-xs"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-100 gap-2 mb-2">
                          <div className="flex items-center space-x-2 min-w-0">
                            <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                              {step.stepNumber}
                            </span>
                            <span className="text-xs sm:text-[13px] font-bold text-slate-900 truncate">
                              {step.name}
                            </span>
                            <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded shrink-0 whitespace-nowrap">
                              {step.phase}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-500 shrink-0 whitespace-nowrap">
                            <span>{step.durationMs}ms</span>
                            <span>•</span>
                            <span className="text-emerald-700 font-semibold">{step.tokensIn.toLocaleString()} in / {step.tokensOut.toLocaleString()} out</span>
                          </div>
                        </div>

                        <p className="text-xs sm:text-[13px] text-slate-600 mb-2.5 leading-relaxed">
                          {step.description}
                        </p>

                        {step.toolCalled && (
                          <div className="text-xs font-mono text-blue-700 bg-blue-50/70 px-2.5 py-1 rounded border border-blue-100 mb-2 flex items-center space-x-1.5 overflow-x-auto">
                            <span className="font-semibold text-blue-900 shrink-0">Tool:</span>
                            <span className="truncate">{step.toolCalled}</span>
                          </div>
                        )}

                        {step.inputPayloadSummary && (
                          <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-200 mb-2 leading-relaxed">
                            <span className="font-semibold text-slate-800 font-mono text-[10px] block mb-0.5 uppercase tracking-wider">
                              Input Context:
                            </span>
                            {step.inputPayloadSummary}
                          </div>
                        )}

                        {step.outputSummary && (
                          <div className="text-xs text-slate-700 bg-emerald-50/40 p-2.5 rounded border border-emerald-200 leading-relaxed">
                            <span className="font-semibold text-emerald-900 font-mono text-[10px] block mb-0.5 uppercase tracking-wider">
                              Output / Distillation Result:
                            </span>
                            {step.outputSummary}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stored Location Notice */}
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-500 font-mono">
                  All transcripts are permanently mirrored on disk at:
                  <div className="text-slate-900 font-bold mt-0.5 truncate">
                    ./transcripts/transcript_*_{activeTranscript.ticker}.json & .md
                  </div>
                </div>
              </>
            ) : (
              <div className="h-full flex items-center justify-center text-slate-400 text-xs">
                Select a transcript to inspect its granular execution trace
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

