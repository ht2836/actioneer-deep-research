import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { runDeepResearch } from './services/stockKnowledge';
import { listTranscripts, getTranscriptById } from './services/transcriptLogger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'actioneer-deep-research-engine',
    version: '1.0.0'
  });
});

app.post('/api/research', async (req: Request, res: Response) => {
  try {
    const { query, mode } = req.body;
    if (!query || typeof query !== 'string') {
      res.status(400).json({ error: 'Valid query string is required.' });
      return;
    }

    const result = await runDeepResearch(query, mode || 'deep');
    res.json(result);
  } catch (error: any) {
    console.error('Error executing deep research:', error);
    res.status(500).json({ error: 'Failed to execute deep research pipeline', details: error.message });
  }
});

app.get('/api/transcripts', (req: Request, res: Response) => {
  try {
    const transcripts = listTranscripts();
    res.json(transcripts);
  } catch (error: any) {
    console.error('Error listing transcripts:', error);
    res.status(500).json({ error: 'Failed to retrieve transcripts' });
  }
});

app.get('/api/transcripts/:id', (req: Request, res: Response) => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : (req.params.id as string);
    const transcript = getTranscriptById(id);
    if (!transcript) {
      res.status(404).json({ error: 'Transcript not found' });
      return;
    }
    res.json(transcript);
  } catch (error: any) {
    console.error(`Error fetching transcript ${req.params.id}:`, error);
    res.status(500).json({ error: 'Failed to fetch transcript' });
  }
});

// Serve frontend build in production
const distPath = path.resolve(process.cwd(), 'dist');
app.use(express.static(distPath));

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Actioneer Deep Research API Server running on http://localhost:${PORT}`);
});
