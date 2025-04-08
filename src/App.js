import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Example components for different pages
import Home from './components/Home'; 
import About from './components/About'; 

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>Welcome to the ERP Clone</p>
          {/* Navigation Links */}
          <nav>
            <a href="/" className="App-link">Home</a>
            <a href="/about" className="App-link">About</a>
          </nav>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
