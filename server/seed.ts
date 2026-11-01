import { runDeepResearch } from './services/stockKnowledge';
import fs from 'fs';
import path from 'path';

console.log('Seeding initial benchmark transcripts in transcripts/ directory...');

const seedQueries = [
  {
    ticker: 'NVDA',
    query: 'Can NVIDIA sustain 70%+ gross margins through 2027 given custom ASIC competition from AWS and Google?'
  },
  {
    ticker: 'PLTR',
    query: 'Analyze Palantir\'s commercial AIP enterprise customer acceleration vs US government defense concentration and multiple expansion.'
  },
  {
    ticker: 'ASML',
    query: 'Evaluate ASML\'s High-NA EUV lithography monopoly against escalating China export controls and cyclic foundry capex slowdowns.'
  },
  {
    ticker: 'AAPL',
    query: 'Is Apple\'s Services gross margin and AI iPhone upgrade cycle sufficient to offset China market share loss and antitrust headwinds?'
  }
];

async function seed() {
  for (const item of seedQueries) {
    const result = await runDeepResearch(item.query, 'deep');
    console.log(`Generated and persisted transcript for ${item.ticker}: ${result.transcript.runId}`);
  }

  const dir = path.resolve(process.cwd(), 'transcripts');
  const files = fs.readdirSync(dir);
  console.log(`\nSuccessfully seeded ${files.length} transcript files in: ${dir}`);
  files.forEach(f => console.log(` - ${f}`));
}

seed().catch(err => {
  console.error('Failed to seed transcripts:', err);
  process.exit(1);
});

