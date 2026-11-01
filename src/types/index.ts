export type RatingType = 'OVERWEIGHT' | 'EQUAL-WEIGHT' | 'UNDERWEIGHT';
export type ConvictionType = 'HIGH' | 'MEDIUM' | 'SPECULATIVE';
export type HorizonType = '0-3 Months' | '3-6 Months' | '6-12 Months';
export type ImpactType = 'High' | 'Medium' | 'Low';
export type BiasType = 'Positive' | 'Negative' | 'Volatile' | 'Neutral';
export type SeverityType = 'High' | 'Medium' | 'Low';

export interface ThesisPillar {
  title: string;
  statement: string;
  proofPoints: string[];
  sentiment: 'bullish' | 'neutral' | 'cautious';
}

export interface FinancialScorecard {
  revenueTTM: string;
  revenueGrowthYoY: string;
  grossMargin: string;
  operatingMargin: string;
  fcfConversion: string;
  ntmPE: string;
  evEbitda: string;
  ruleOf40: string;
  netDebtToEbitda: string;
}

export interface ScenarioDetail {
  targetPrice: number;
  probability: number;
  rationale: string;
}

export interface ScenarioAnalysis {
  bull: ScenarioDetail;
  base: ScenarioDetail;
  bear: ScenarioDetail;
}

export interface CatalystItem {
  horizon: HorizonType;
  event: string;
  expectedImpact: ImpactType;
  bias: BiasType;
}

export interface RiskItem {
  category: string;
  risk: string;
  severity: SeverityType;
  mitigant: string;
}

export interface Citation {
  title: string;
  source: string;
  url?: string;
  relevance: string;
}

export interface TokenEfficiencyMetrics {
  rawRetrievedTokens: number;
  distilledContextTokens: number;
  outputMemoTokens: number;
  tokensSaved: number;
  compressionPercentage: number;
  estimatedCostWithDistillationUsd: number;
  estimatedCostWithoutDistillationUsd: number;
  costSavedUsd: number;
  informationDensityScore: number; // e.g. 4.2 facts per 100 output tokens
}

export interface InvestmentThesisMemo {
  id: string;
  ticker: string;
  companyName: string;
  exchange: string;
  asOfDate: string;
  rating: RatingType;
  currentPrice: number;
  targetPrice: number;
  impliedUpsidePercent: number;
  conviction: ConvictionType;
  primaryQuestion: string;
  
  executiveSummary: string;
  thesisPillars: ThesisPillar[];
  financialScorecard: FinancialScorecard;
  scenarioAnalysis: ScenarioAnalysis;
  catalystTimeline: CatalystItem[];
  riskMatrix: RiskItem[];
  tokenEfficiencyMetrics: TokenEfficiencyMetrics;
  citations: Citation[];
}

export type AgentPhase = 
  | 'IDLE' 
  | 'DECOMPOSITION' 
  | 'PARALLEL_RETRIEVAL' 
  | 'TOKEN_DISTILLATION' 
  | 'THESIS_SYNTHESIS' 
  | 'COMPLETE' 
  | 'ERROR';

export interface AgentStepTrace {
  stepNumber: number;
  phase: 'DECOMPOSITION' | 'PARALLEL_RETRIEVAL' | 'TOKEN_DISTILLATION' | 'THESIS_SYNTHESIS';
  name: string;
  description: string;
  toolCalled?: string;
  inputPayloadSummary?: string;
  outputSummary?: string;
  tokensIn: number;
  tokensOut: number;
  durationMs: number;
}

export interface AgentTranscript {
  runId: string;
  timestamp: string;
  userPrompt: string;
  ticker: string;
  executionDurationMs: number;
  model: string;
  totalTokensBurned: number;
  rawInputTokens: number;
  distilledTokens: number;
  tokenSavingsPercentage: number;
  costSavedUsd: number;
  steps: AgentStepTrace[];
  finalMemoId: string;
  summary: string;
}

export interface ResearchRequest {
  query: string;
  mode?: 'deep' | 'fast';
  ticker?: string;
}
