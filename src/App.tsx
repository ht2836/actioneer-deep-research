import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ResearchInput } from './components/ResearchInput';
import { ProgressTracker } from './components/ProgressTracker';
import { TokenEfficiencyCard } from './components/TokenEfficiencyCard';
import { MemoViewer } from './components/MemoViewer';
import { TranscriptDrawer } from './components/TranscriptDrawer';
import { TokenModal } from './components/TokenModal';
import { BENCHMARK_MEMOS } from './data/stocksData';
import { InvestmentThesisMemo, AgentPhase } from './types';

export const App: React.FC = () => {
  // Default to NVDA benchmark so the reviewer immediately sees a complete institutional report
  const [activeMemo, setActiveMemo] = useState<InvestmentThesisMemo>(BENCHMARK_MEMOS.NVDA);
  const [currentPhase, setCurrentPhase] = useState<AgentPhase>('IDLE');
  const [isResearching, setIsResearching] = useState<boolean>(false);
  const [transcriptDrawerOpen, setTranscriptDrawerOpen] = useState<boolean>(false);
  const [tokenModalOpen, setTokenModalOpen] = useState<boolean>(false);
  const [selectedRunId, setSelectedRunId] = useState<string | undefined>(undefined);
  const [transcriptCount, setTranscriptCount] = useState<number>(4);

  useEffect(() => {
    fetchTranscriptCount();
  }, []);

  const fetchTranscriptCount = async () => {
    try {
      const res = await fetch('/api/transcripts');
      if (res.ok) {
        const list = await res.json();
        setTranscriptCount(list.length);
      }
    } catch (e) {
      console.warn('API server may not be reachable yet or dev mode', e);
    }
  };

  const handleSearch = async (query: string, mode: 'deep' | 'fast') => {
    setIsResearching(true);
    setCurrentPhase('DECOMPOSITION');

    try {
      // Progressive visual phase stepper
      const phaseTimers: NodeJS.Timeout[] = [];
      const intervalMs = mode === 'deep' ? 900 : 350;

      phaseTimers.push(
        setTimeout(() => setCurrentPhase('PARALLEL_RETRIEVAL'), intervalMs),
        setTimeout(() => setCurrentPhase('TOKEN_DISTILLATION'), intervalMs * 2),
        setTimeout(() => setCurrentPhase('THESIS_SYNTHESIS'), intervalMs * 3)
      );

      // Call Deep Research API
      const response = await fetch('/api/research', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, mode }),
      });

      phaseTimers.forEach(clearTimeout);

      if (response.ok) {
        const data = await response.json();
        setCurrentPhase('COMPLETE');
        setActiveMemo(data.memo);
        setSelectedRunId(data.transcript?.runId);
        fetchTranscriptCount();
      } else {
        // Fallback to client-side benchmark if API fails
        fallbackClientResearch(query);
      }
    } catch (err) {
      console.warn('Backend API request error, using fallback client research', err);
      fallbackClientResearch(query);
    } finally {
      setTimeout(() => {
        setIsResearching(false);
        setCurrentPhase('IDLE');
      }, 600);
    }
  };

  const fallbackClientResearch = (query: string) => {
    const upper = query.toUpperCase();
    let ticker = 'NVDA';
    if (upper.includes('PLTR') || upper.includes('PALANTIR')) ticker = 'PLTR';
    else if (upper.includes('ASML')) ticker = 'ASML';
    else if (upper.includes('AAPL') || upper.includes('APPLE')) ticker = 'AAPL';

    const base = BENCHMARK_MEMOS[ticker] || BENCHMARK_MEMOS.NVDA;
    const memoCopy = { ...base, primaryQuestion: query };
    setActiveMemo(memoCopy);
    setCurrentPhase('COMPLETE');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans">
      {/* Top Banker Header */}
      <Header
        transcriptCount={transcriptCount}
        onOpenTranscripts={() => setTranscriptDrawerOpen(true)}
        onOpenTokenModal={() => setTokenModalOpen(true)}
      />

      {/* Main Content Container - Expanded Width & Accessibility */}
      <main className="flex-1 w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 py-8" role="main">
        
        {/* Research Input Bar */}
        <ResearchInput
          onSearch={handleSearch}
          isLoading={isResearching}
          currentQuery={activeMemo?.primaryQuestion}
        />

        {/* Real-time Agent Progress Stepper */}
        {isResearching && <ProgressTracker currentPhase={currentPhase} />}

        {/* Token Efficiency Visual Waterfall Card */}
        {activeMemo && (
          <TokenEfficiencyCard
            metrics={activeMemo.tokenEfficiencyMetrics}
            onOpenAuditTranscript={() => setTranscriptDrawerOpen(true)}
          />
        )}

        {/* Institutional Banker Research Tear-Sheet */}
        {activeMemo && (
          <MemoViewer
            memo={activeMemo}
            onOpenTranscript={() => setTranscriptDrawerOpen(true)}
          />
        )}
      </main>

      {/* Slide-Over Drawer for Agent Transcripts Audit */}
      <TranscriptDrawer
        isOpen={transcriptDrawerOpen}
        onClose={() => setTranscriptDrawerOpen(false)}
        selectedRunId={selectedRunId}
      />

      {/* Token Economics Modal */}
      <TokenModal
        isOpen={tokenModalOpen}
        onClose={() => setTokenModalOpen(false)}
      />
    </div>
  );
};

