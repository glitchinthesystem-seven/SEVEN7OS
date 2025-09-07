#!/usr/bin/env node

/**
 * Example script demonstrating x.ai API integration usage
 * Run with: node examples/x-ai-example.js
 */

const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

async function testBasicEndpoint() {
  console.log('Testing basic endpoint...');
  try {
    const response = await axios.get(`${BASE_URL}/`);
    console.log('✓ Basic endpoint:', response.data);
  } catch (error) {
    console.error('✗ Basic endpoint failed:', error.message);
  }
}

async function testChatCompletion() {
  console.log('\nTesting chat completion endpoint...');
  try {
    const response = await axios.post(`${BASE_URL}/api/chat`, {
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant."
        },
        {
          role: "user",
          content: "Say hello!"
        }
      ],
      model: "grok-4-latest",
      stream: false,
      temperature: 0.7
    });
    console.log('✓ Chat completion:', JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('✗ Chat completion failed:', error.response?.data || error.message);
  }
}

async function testChatTest() {
  console.log('\nTesting chat test endpoint (original curl equivalent)...');
  try {
    const response = await axios.post(`${BASE_URL}/api/chat/test`);
    console.log('✓ Chat test:', JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('✗ Chat test failed:', error.response?.data || error.message);
  }
}

async function testValidation() {
  console.log('\nTesting validation (should fail)...');
  try {
    const response = await axios.post(`${BASE_URL}/api/chat`, {
      // Missing messages array
    });
    console.log('✗ Validation should have failed');
  } catch (error) {
    if (error.response?.status === 400) {
      console.log('✓ Validation works:', error.response.data);
    } else {
      console.error('✗ Unexpected error:', error.message);
    }
  }
}

async function main() {
  console.log('SEVEN7OS x.ai API Integration Example\n');
  console.log('Make sure the backend server is running on port 5000');
  console.log('Start it with: cd backend && npm start\n');

  await testBasicEndpoint();
  await testChatCompletion();
  await testChatTest();
  await testValidation();

  console.log('\n📖 For more details, see X_AI_INTEGRATION.md');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { testBasicEndpoint, testChatCompletion, testChatTest, testValidation };