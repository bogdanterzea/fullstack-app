import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://backend-service:5000')
    // fetch('http://localhost:5000') - use for local running
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message || "Loading..."}</h1>
      </header>
    </div>
  );
}

export default App;
