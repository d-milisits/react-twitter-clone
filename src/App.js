import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="app">
      {/* Navbar (Home, messages, etc) */}
      <Navbar />
      {/* Tweet Feed (Real user Firebase tweets) */}
      <Feed />
      {/* What's Happening (Right sidebar) */}
      <Widgets />
    </div>
  );
}

export default App;
