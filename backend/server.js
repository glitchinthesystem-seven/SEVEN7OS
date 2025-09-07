const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const path = require('path');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the parent directory
app.use(express.static(path.join(__dirname, '..')));

app.get('/', (req, res) => res.json({ message: 'SEVEN7OS Backend Orbiting' }));

// x.ai API integration endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, model = 'grok-4-latest', stream = false, temperature = 0 } = req.body;
    
    // Validate required fields
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }
    
    if (messages.length === 0) {
      return res.status(400).json({ error: 'Messages array cannot be empty' });
    }
    
    // Use API key from environment variable or the provided one as fallback
    const apiKey = process.env.XAI_API_KEY || 'xai-4UphBQQj0Wy9JgUWjmaM5TRhTShdEQLWnnALakn0dUwAHZFdeRL7g0dt9Q3P7uedSRgCnOVxDSr5RK9M';
    
    const response = await axios.post('https://api.x.ai/v1/chat/completions', {
      messages,
      model,
      stream,
      temperature
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('x.ai API Error:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({ 
      error: 'Failed to process chat request',
      details: error.response?.data || error.message 
    });
  }
});

// Test endpoint that mirrors the curl command exactly
app.post('/api/chat/test', async (req, res) => {
  try {
    const apiKey = process.env.XAI_API_KEY || 'xai-4UphBQQj0Wy9JgUWjmaM5TRhTShdEQLWnnALakn0dUwAHZFdeRL7g0dt9Q3P7uedSRgCnOVxDSr5RK9M';
    
    const response = await axios.post('https://api.x.ai/v1/chat/completions', {
      messages: [
        {
          role: "system",
          content: "You are a test assistant."
        },
        {
          role: "user",
          content: "Testing. Just say hi and hello world and nothing else."
        }
      ],
      model: "grok-4-latest",
      stream: false,
      temperature: 0
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('x.ai API Error:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({ 
      error: 'Failed to process test chat request',
      details: error.response?.data || error.message 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server aligned at http://localhost:${PORT}`));
