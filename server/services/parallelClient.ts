import dotenv from 'dotenv';
dotenv.config();

export interface ParallelResearchResult {
  source: 'parallel_api' | 'local_distilled_engine';
  rawContent?: string;
  tokensEstimate?: number;
  durationMs?: number;
}

/**
 * Returns active Parallel API credentials from environment (local .env or GitHub Secrets / runner env)
 */
export function getParallelConfig() {
  const apiKey = process.env.PARALLEL_API_KEY?.trim();
  const apiUrl = process.env.PARALLEL_API_URL?.trim() || 'https://api.parallel.ai/v1';
  const hasKey = Boolean(apiKey && apiKey !== 'mock_mode' && apiKey !== 'your_parallel_api_key_here');
  return { apiKey, apiUrl, hasKey };
}

/**
 * Executes deep research using Parallel Web Systems Deep Research / Task API
 * Consumes PARALLEL_API_KEY from environment (GitHub Secrets in CI/CD or .env locally).
 * Falls back gracefully to internal deterministic engine if key is absent or request times out.
 */
export async function queryParallelDeepResearch(prompt: string): Promise<ParallelResearchResult> {
  const { apiKey, apiUrl, hasKey } = getParallelConfig();

  if (!hasKey || !apiKey) {
    return {
      source: 'local_distilled_engine',
    };
  }

  const startTime = Date.now();

  try {
    console.log(`[Parallel API] Initiating deep research task for: "${prompt.substring(0, 60)}..."`);
    
    // 1. Dispatch Task Run to Parallel API
    const response = await fetch(`${apiUrl}/tasks/runs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
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

