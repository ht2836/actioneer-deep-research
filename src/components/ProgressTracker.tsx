import React, { useEffect, useState } from 'react';
import { CheckCircle2, Circle, Clock, Zap, FileSpreadsheet, Sparkles } from 'lucide-react';
import { AgentPhase } from '../types';

interface ProgressTrackerProps {
  currentPhase: AgentPhase;
}

interface PhaseStep {
  id: AgentPhase;
  title: string;
  detail: string;
  tool: string;
}

const PHASES: PhaseStep[] = [
  {
    id: 'DECOMPOSITION',
    title: '1. Intent Decomposition',
    detail: 'Decomposing stock question into 4 orthogonal research vectors',
    tool: 'AgentQueryDecomposer',
  },
  {
    id: 'PARALLEL_RETRIEVAL',
    title: '2. Parallel Deep Retrieval',
    detail: 'Ingesting SEC 10-Q disclosures, Street models & earnings call quotes',
    tool: 'ParallelDeepResearchAPI::Batch',
  },
  {
    id: 'TOKEN_DISTILLATION',
    title: '3. Semantic Distillation',
    detail: 'Stripping boilerplate disclaimers & compressing context by ~80%',
    tool: 'TokenDistillationEngine::Schema',
  },
  {
    id: 'THESIS_SYNTHESIS',
    title: '4. Institutional Synthesis',
    detail: 'Generating Goldman/Morgan Stanley grade tear-sheet & audit log',
    tool: 'BankerThesisSynthesizer',
  },
];

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({ currentPhase }) => {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed((prev) => +(prev + 0.1).toFixed(1));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const getPhaseStatus = (phaseId: AgentPhase) => {
    const phaseOrder: AgentPhase[] = ['DECOMPOSITION', 'PARALLEL_RETRIEVAL', 'TOKEN_DISTILLATION', 'THESIS_SYNTHESIS', 'COMPLETE'];
    const currentIndex = phaseOrder.indexOf(currentPhase);
    const targetIndex = phaseOrder.indexOf(phaseId);

    if (currentPhase === 'COMPLETE' || targetIndex < currentIndex) {
      return 'completed';
    }
    if (targetIndex === currentIndex) {
      return 'active';
    }
    return 'pending';
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-8 animate-fadeIn">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping"></div>
          <h3 className="font-semibold text-sm text-slate-900 tracking-tight">
            Autonomous Deep Research Agent In Progress...
          </h3>
        </div>
        <div className="flex items-center space-x-3 text-xs text-slate-500 font-mono">
          <span className="flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{elapsed}s elapsed</span>
          </span>
          <span className="text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Token Budget Constraint: Active
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {PHASES.map((step) => {
          const status = getPhaseStatus(step.id);
          return (
            <div
              key={step.id}
              className={`p-4 rounded-lg border transition-all ${
                status === 'completed'
                  ? 'bg-slate-50 border-slate-300 text-slate-900'
                  : status === 'active'
                  ? 'bg-blue-50/60 border-blue-400 shadow-sm text-slate-900 ring-2 ring-blue-500/10'
                  : 'bg-white border-slate-200 opacity-50 text-slate-400'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold font-mono tracking-tight">
                  {step.title}
                </span>
                {status === 'completed' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : status === 'active' ? (
                  <div className="w-4 h-4 rounded-full border-2 border-blue-600 border-t-transparent animate-spin"></div>
                ) : (
                  <Circle className="w-4 h-4 text-slate-300" />
                )}
              </div>
              <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                {step.detail}
              </p>
              <div className="text-[10px] font-mono text-slate-500 bg-white/80 px-2 py-1 rounded border border-slate-200 truncate">
                {step.tool}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
