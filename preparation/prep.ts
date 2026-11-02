import { runDeepResearch } from '../server/services/stockKnowledge';
import { listTranscripts } from '../server/services/transcriptLogger';
import fs from 'fs';
import path from 'path';

console.log('===========================================================');
console.log('  ACTIONEER TECHNICAL ASSESSMENT: PREPARATION RUNNER       ');
console.log('===========================================================\n');

async function runPrep() {
  console.log('[1/3] Ensuring Benchmark Transcripts are Fresh on Disk...');
  const seedQueries = [
    { ticker: 'NVDA', query: 'Can NVIDIA sustain 70%+ gross margins through 2027 given custom ASIC competition from AWS and Google?' },
    { ticker: 'PLTR', query: 'Analyze Palantir\'s commercial AIP enterprise customer acceleration vs US government defense concentration and multiple expansion.' },
    { ticker: 'ASML', query: 'Evaluate ASML\'s High-NA EUV lithography monopoly against escalating China export controls and cyclic foundry capex slowdowns.' },
    { ticker: 'AAPL', query: 'Is Apple\'s Services gross margin and AI iPhone upgrade cycle sufficient to offset China market share loss and antitrust headwinds?' }
  ];

  for (const item of seedQueries) {
    const res = await runDeepResearch(item.query, 'deep');
    console.log(`  ✓ Seeded ${item.ticker} -> ID: ${res.transcript.runId}`);
  }

  console.log('\n[2/3] Checking Stored Transcripts in ./transcripts/...');
  const transcripts = listTranscripts();
  console.log(`  ✓ Total saved runs on disk: ${transcripts.length}`);

  console.log('\n[3/3] Interview Quick Reference Checklist:');
  console.log('  • Local Web Demo: http://localhost:5173');
  console.log('  • Backend API:    http://localhost:3001');
  console.log('  • Transcripts:    ./transcripts/ (share this folder or repository)');
  console.log('  • Token Savings:  ~80% context compression ($0.07 vs $0.41 cost)');
  console.log('  • Design:         Actioneer brand fonts + Wall Street light tear-sheet');
  console.log('\nPreparation complete! You are ready for the call.\n');
}

runPrep().catch(err => {
  console.error('Prep failed:', err);
  process.exit(1);
});

