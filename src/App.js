import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />

      {/* Tweet Feed */}
      <Feed />

      {/* What's Happening */}
      <Widgets />
    </div>
  );
}

export default App;
