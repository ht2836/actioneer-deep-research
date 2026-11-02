import { runDeepResearch } from '../server/services/stockKnowledge';
import { listTranscripts, getTranscriptById } from '../server/services/transcriptLogger';
import fs from 'fs';
import path from 'path';

async function runSuite() {
  console.log('=== RUNNING ACTIONEER DEEP RESEARCH VERIFICATION SUITE ===\n');

  // 1. Test Research Pipeline with NVDA
  console.log('Test 1: Running deep research for NVDA custom query...');
  const nvdaResult = await runDeepResearch('Can NVIDIA sustain 70%+ gross margins through 2027 given custom ASIC competition from AWS and Google?');

  if (!nvdaResult.memo || !nvdaResult.transcript) {
    throw new Error('Test 1 failed: missing memo or transcript');
  }
  console.log(`✓ NVDA Research Memo generated: Rating ${nvdaResult.memo.rating}, Target $${nvdaResult.memo.targetPrice}`);
  console.log(`✓ Token Efficiency: Raw ${nvdaResult.memo.tokenEfficiencyMetrics.rawRetrievedTokens} -> Distilled ${nvdaResult.memo.tokenEfficiencyMetrics.distilledContextTokens} (${nvdaResult.memo.tokenEfficiencyMetrics.compressionPercentage}% reduction)`);
  console.log(`✓ Information Density: ${nvdaResult.memo.tokenEfficiencyMetrics.informationDensityScore} facts/100 tokens`);

  // 2. Test Custom Dynamic Stock Query (e.g. TSLA)
  console.log('\nTest 2: Running dynamic query for TSLA...');
  const tslaResult = await runDeepResearch('Evaluate Tesla Robotaxi unit economics and FSD take-rate monetization');
  if (!tslaResult.memo || tslaResult.memo.ticker !== 'TSLA') {
    throw new Error('Test 2 failed: expected TSLA ticker');
  }
  console.log(`✓ TSLA Dynamic Research Memo generated: Rating ${tslaResult.memo.rating}, Target $${tslaResult.memo.targetPrice}`);
  console.log(`✓ TSLA Transcript persisted with ID: ${tslaResult.transcript.runId}`);

  // 3. Test Transcript Logging & Retrieval
  console.log('\nTest 3: Checking transcripts on disk...');
  const transcripts = listTranscripts();
  console.log(`✓ Found ${transcripts.length} transcripts in transcripts/ directory`);
  if (transcripts.length === 0) {
    throw new Error('Test 3 failed: no transcripts found');
  }

  const firstRunId = transcripts[0].runId;
  const retrieved = getTranscriptById(firstRunId);
  if (!retrieved || retrieved.runId !== firstRunId) {
    throw new Error(`Test 3 failed: could not retrieve transcript by ID ${firstRunId}`);
  }
  console.log(`✓ Successfully retrieved transcript ${firstRunId} with ${retrieved.steps.length} execution steps`);

  // 4. Verify Filesystem Artifacts
  console.log('\nTest 4: Verifying physical file existence in transcripts/...');
  const transcriptsDir = path.resolve(process.cwd(), 'transcripts');
  const files = fs.readdirSync(transcriptsDir);
  const jsonFiles = files.filter(f => f.endsWith('.json'));
  const mdFiles = files.filter(f => f.endsWith('.md'));
  console.log(`✓ Verified ${jsonFiles.length} JSON audit logs and ${mdFiles.length} Markdown human-readable reports`);

  console.log('\n=== ALL 4 VERIFICATION TESTS PASSED SUCCESSFULLY! ===\n');
}

runSuite().catch(err => {
  console.error('Verification suite failed:', err);
  process.exit(1);
});

