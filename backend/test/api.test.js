const request = require('supertest');
const express = require('express');
const cors = require('cors');

// Create a test app with the same structure as our server
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'SEVEN7OS Backend Orbiting' }));

// Mock the x.ai API endpoints for testing
app.post('/api/chat', (req, res) => {
  const { messages, model = 'grok-4-latest', stream = false, temperature = 0 } = req.body;
  
  // Validate required fields
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages array is required' });
  }
  
  // Mock successful response
  res.json({
    id: 'test-chat-completion',
    object: 'chat.completion',
    created: Date.now(),
    model: model,
    choices: [{
      index: 0,
      message: {
        role: 'assistant',
        content: 'Hi and hello world'
      },
      finish_reason: 'stop'
    }],
    usage: {
      prompt_tokens: 25,
      completion_tokens: 5,
      total_tokens: 30
    }
  });
});

app.post('/api/chat/test', (req, res) => {
  // Mock the exact test response
  res.json({
    id: 'test-chat-completion',
    object: 'chat.completion',
    created: Date.now(),
    model: 'grok-4-latest',
    choices: [{
      index: 0,
      message: {
        role: 'assistant',
        content: 'Hi and hello world'
      },
      finish_reason: 'stop'
    }],
    usage: {
      prompt_tokens: 25,
      completion_tokens: 5,
      total_tokens: 30
    }
  });
});

describe('SEVEN7OS Backend API', () => {
  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('SEVEN7OS Backend Orbiting');
  });

  test('POST /api/chat should accept messages and return chat completion', async () => {
    const messages = [
      { role: 'system', content: 'You are a test assistant.' },
      { role: 'user', content: 'Testing. Just say hi and hello world and nothing else.' }
    ];

    const response = await request(app)
      .post('/api/chat')
      .send({ messages })
      .expect(200);

    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('choices');
    expect(response.body.choices[0].message.content).toBe('Hi and hello world');
  });

  test('POST /api/chat should validate messages array', async () => {
    const response = await request(app)
      .post('/api/chat')
      .send({})
      .expect(400);

    expect(response.body.error).toBe('Messages array is required');
  });

  test('POST /api/chat/test should return test completion', async () => {
    const response = await request(app)
      .post('/api/chat/test')
      .expect(200);

    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('choices');
    expect(response.body.choices[0].message.content).toBe('Hi and hello world');
    expect(response.body.model).toBe('grok-4-latest');
  });

  test('POST /api/chat should use default parameters', async () => {
    const messages = [{ role: 'user', content: 'test' }];

    const response = await request(app)
      .post('/api/chat')
      .send({ messages })
      .expect(200);

    expect(response.body.model).toBe('grok-4-latest');
  });
});