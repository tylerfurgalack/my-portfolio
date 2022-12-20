import React from 'react';

import Navbar from './components/Navbar';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
