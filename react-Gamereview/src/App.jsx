import React, { useState } from 'react';
import Login from './Login';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  return (
    <div className="app">
      <Login onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}

export default App;
