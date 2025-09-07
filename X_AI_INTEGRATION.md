# x.ai API Integration

This document describes the x.ai API integration implemented in the SEVEN7OS backend.

## Overview

The backend now includes two endpoints for interacting with x.ai's chat completion API:

- `/api/chat` - General chat completion endpoint
- `/api/chat/test` - Test endpoint that replicates the original curl command

## API Endpoints

### POST /api/chat

General purpose chat completion endpoint.

**Request Body:**
```json
{
  "messages": [
    {
      "role": "system",
      "content": "You are a test assistant."
    },
    {
      "role": "user", 
      "content": "Testing. Just say hi and hello world and nothing else."
    }
  ],
  "model": "grok-4-latest",    // Optional, defaults to "grok-4-latest"
  "stream": false,             // Optional, defaults to false
  "temperature": 0             // Optional, defaults to 0
}
```

**Response:**
```json
{
  "id": "chat-completion-id",
  "object": "chat.completion",
  "created": 1234567890,
  "model": "grok-4-latest",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hi and hello world"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 25,
    "completion_tokens": 5,
    "total_tokens": 30
  }
}
```

### POST /api/chat/test

Test endpoint that exactly replicates the original curl command from the problem statement.

**Request:** No body required (uses predefined test messages)

**Response:** Same format as `/api/chat`

## Original curl Command Equivalent

The original curl command:
```bash
curl https://api.x.ai/v1/chat/completions \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer xai-4UphBQQj0Wy9JgUWjmaM5TRhTShdEQLWnnALakn0dUwAHZFdeRL7g0dt9Q3P7uedSRgCnOVxDSr5RK9M" \
    -d '{
      "messages": [
        {
          "role": "system",
          "content": "You are a test assistant."
        },
        {
          "role": "user",
          "content": "Testing. Just say hi and hello world and nothing else."
        }
      ],
      "model": "grok-4-latest",
      "stream": false,
      "temperature": 0
    }'
```

Is now equivalent to:
```bash
curl -X POST http://localhost:5000/api/chat/test \
    -H "Content-Type: application/json"
```

Or for the general endpoint:
```bash
curl -X POST http://localhost:5000/api/chat \
    -H "Content-Type: application/json" \
    -d '{
      "messages": [
        {
          "role": "system",
          "content": "You are a test assistant."
        },
        {
          "role": "user",
          "content": "Testing. Just say hi and hello world and nothing else."
        }
      ],
      "model": "grok-4-latest",
      "stream": false,
      "temperature": 0
    }'
```

## Environment Variables

Set the `XAI_API_KEY` environment variable to use your own x.ai API key:

```bash
export XAI_API_KEY=your-api-key-here
```

If not set, the system will use the API key from the original curl command as a fallback.

## Error Handling

Both endpoints include comprehensive error handling:

- **400 Bad Request**: Missing or invalid request parameters
- **500 Internal Server Error**: x.ai API errors or network issues

Error responses include details about the specific issue encountered.

## Testing

Run the test suite to verify the API endpoints:

```bash
cd backend
npm test
```

The tests validate:
- Basic server functionality
- API endpoint structure and responses
- Parameter validation
- Default value handling