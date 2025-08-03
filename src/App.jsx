import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react'

import './styles/App.css'
import Header from './components/Header';

import Landing from './pages/Landing';
import School from './pages/School';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <div className="Content">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/school" element={<School />} />
            {/* <Route path="/school" element={<Home />} /> */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App
