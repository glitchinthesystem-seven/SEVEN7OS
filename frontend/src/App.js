import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [backendMessage, setBackendMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Connect to backend
    const fetchBackendData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/');
        setBackendMessage(response.data.message);
      } catch (error) {
        console.error('Backend connection failed:', error);
        setBackendMessage('Backend connection failed');
      } finally {
        setLoading(false);
      }
    };

    fetchBackendData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>SEVEN7OS</h1>
        <p>Real Estate CRM for High-Speed Deal Makers</p>
        
        <div className="backend-status">
          <h3>Backend Status:</h3>
          {loading ? (
            <p>Connecting to backend...</p>
          ) : (
            <p>{backendMessage}</p>
          )}
        </div>

        <div className="features">
          <h3>Coming Soon:</h3>
          <ul>
            <li>Deal Management</li>
            <li>Client Tracking</li>
            <li>Property Database</li>
            <li>Analytics Dashboard</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;