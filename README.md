# SEVEN7OS
Real estate CRM built for a high-speed deal markers react Frontera plus nODE BACKEND

## Features

- **x.ai API Integration**: Chat completion endpoints using Grok models
- Real estate CRM backend built with Node.js and Express
- React frontend framework ready for development

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```

The server listens on port 3000 by default. Open http://localhost:3000/ in your browser to see the welcome message.

For backend development:
```bash
cd backend
npm install
npm start
```

The backend API server runs on port 5000 by default.

## x.ai API Integration

The backend includes endpoints for x.ai chat completions. See [X_AI_INTEGRATION.md](X_AI_INTEGRATION.md) for detailed documentation.

Quick test:
```bash
curl -X POST http://localhost:5000/api/chat/test
```

