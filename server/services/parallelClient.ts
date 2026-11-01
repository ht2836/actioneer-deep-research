import dotenv from 'dotenv';
dotenv.config();

const PARALLEL_API_KEY = process.env.PARALLEL_API_KEY;
const PARALLEL_API_URL = process.env.PARALLEL_API_URL || 'https://api.parallel.ai/v1';

export interface ParallelResearchResult {
  source: 'parallel_api' | 'local_distilled_engine';
  rawContent?: string;
  tokensEstimate?: number;
  durationMs?: number;
}

/**
 * Executes deep research using Parallel Web Systems Deep Research / Task API
 * Falls back gracefully to internal deterministic engine if key is absent or request times out.
 */
export async function queryParallelDeepResearch(prompt: string): Promise<ParallelResearchResult> {
  if (!PARALLEL_API_KEY || PARALLEL_API_KEY === 'mock_mode' || PARALLEL_API_KEY === 'your_parallel_api_key_here') {
    return {
      source: 'local_distilled_engine',
    };
  }

  const startTime = Date.now();

  try {
    console.log(`[Parallel API] Initiating deep research task for: "${prompt.substring(0, 60)}..."`);
    
    // 1. Dispatch Task Run to Parallel API
    const response = await fetch(`${PARALLEL_API_URL}/tasks/runs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': PARALLEL_API_KEY,
      },
      body: JSON.stringify({
        input: prompt,
        processor: 'ultra', // 'ultra' or 'pro' for deep research
        task_spec: {
          output_schema: {
            type: 'text',
            description: 'Institutional equity research thesis covering financial health, valuation multiples, 3 core pillars, scenarios (bull/base/bear), and key catalysts.',
          },
        },
      }),
    });

    if (!response.ok) {
      console.warn(`[Parallel API] Request returned status ${response.status}: ${await response.text()}`);
      return { source: 'local_distilled_engine' };
    }

    const taskData: any = await response.json();
    console.log(`[Parallel API] Task run registered: ${taskData.run_id || taskData.id}`);

    // If immediate output returned
    if (taskData.output) {
      const rawText = typeof taskData.output === 'string' ? taskData.output : JSON.stringify(taskData.output);
      const estTokens = Math.round(rawText.length / 4);
      return {
        source: 'parallel_api',
        rawContent: rawText,
        tokensEstimate: estTokens,
        durationMs: Date.now() - startTime,
      };
    }

    return {
      source: 'parallel_api',
      rawContent: JSON.stringify(taskData),
      durationMs: Date.now() - startTime,
    };
  } catch (error: any) {
    console.warn('[Parallel API] Network or auth error connecting to api.parallel.ai:', error.message);
    return { source: 'local_distilled_engine' };
  }
}
