# Deployment & Evaluation Guide

**Product:** Actioneer Deep Research Prototype  
**Date:** November 2026  

---

## 1. Quick Start (Local Run)

The application is engineered as a clean, single-command full-stack Node.js / React application.

### Prerequisites:
- Node.js >= 18.x (v20+ or v22+ recommended)
- npm >= 9.x

### Steps:
```bash
# 1. Install dependencies
npm install

# 2. (Optional) Set up Environment Variables
cp .env.example .env

# 3. Launch Development Server (Frontend + Backend API)
npm run dev
```

The application will be live at:
**`http://localhost:5173`** (or backend port `3000`/`5173` depending on dev proxy).

---

## 2. Production Build & Deployment

### 2.1 One-Command Production Build
```bash
npm run build
npm start
```

### 2.2 Deploying to Vercel
1. Push repository to GitHub/GitLab.
2. Import project into [Vercel](https://vercel.com).
3. Framework Preset: **Vite** (or Node Serverless).
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Environment Variables (optional):
   - `PARALLEL_API_KEY`: Your Parallel Deep Research API key (if using live Parallel endpoints).

### 2.3 Deploying to Railway / Render / Docker
A `Dockerfile` is provided in the repository root for seamless containerized deployment:
```bash
docker build -t actioneer-deep-research .
docker run -p 3000:3000 actioneer-deep-research
```

---

## 3. Environment Variables Reference

| Variable | Required | Default | Description |
|---|---|---|---|
| `PORT` | Optional | `3001` | Express API server port |
| `PARALLEL_API_KEY` | Optional | `mock_mode` | Parallel Deep Research API key. When omitted, high-fidelity deterministic financial engines are utilized for zero-latency presentation. |
| `NODE_ENV` | Optional | `development` | `development` or `production` |
| `TRANSCRIPTS_DIR` | Optional | `./transcripts` | File system location where all agent traces are stored. |

---

## 4. Transcript Access for Assessors & Interviewers

The assessment specifically requests:
> *"Please store all agent transcripts for this build in one location and share them with me before we meet so I can prepare accordingly."*

### Location of Transcripts:
All agent research runs are automatically persisted to:
📁 **`./transcripts/`**

Each run produces two paired files:
1. `transcript_<timestamp>_<ticker>.json`: Raw programmatic JSON trace with tool calls, prompts, and token counts.
2. `transcript_<timestamp>_<ticker>.md`: Human-readable Markdown summary with tabular metrics, ready to open in any markdown reader or share via email.

In addition, assessors can click the **"Audit Transcripts"** button in the application UI to browse, inspect, and export all run logs directly.

