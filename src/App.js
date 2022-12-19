import React from 'react';

import Navbar from './components/Navbar';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}

export default App;
