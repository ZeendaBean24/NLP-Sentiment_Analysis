import React from 'react';
import './App.css';
import NLPPathway from './NLPPathway';
import { Routes, Route } from 'react-router-dom';
import PageOne from './Pages/PageOne';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NLPPathway />} />
        <Route path="/n1" element={<PageOne />} />
        <Route path="/n1.1" element={<PageOne />} />
        <Route path="/n1.2" element={<PageOne />} />
        {/* Define other routes similarly */}
      </Routes>
    </div>
  );
}

export default App;
