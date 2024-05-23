import React from 'react';
import './App.css';
import NLPPathway from './NLPPathway';
import { Routes, Route } from 'react-router-dom';
import PageOne from './Pages/PageOne';
import PageOneOne from './Pages/PageOneOne';
import PageOneTwo from './Pages/PageOneTwo';
import PageOneThree from './Pages/PageOneThree';
import PageTwo from './Pages/PageTwo';
import PageTwoOne from './Pages/PageTwoOne';
import PageTwoTwo from './Pages/PageTwoTwo';
import PageThree from './Pages/PageThree';
import PageThreeOne from './Pages/PageThreeOne';
import PageThreeTwo from './Pages/PageThreeTwo';
import PageThreeThree from './Pages/PageThreeThree';
import PageFour from './Pages/PageFour';
import PageFourOne from './Pages/PageFourOne';
import PageFourTwo from './Pages/PageFourTwo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NLPPathway />} />
        <Route path="/n1" element={<PageOne />} />
        <Route path="/n1.1" element={<PageOneOne />} />
        <Route path="/n1.2" element={<PageOneTwo />} />
        <Route path="/n1.3" element={<PageOneThree />} />
        <Route path="/l2" element={<PageTwo />} />
        <Route path="/l2.1" element={<PageTwoOne />} />
        <Route path="/l2.2" element={<PageTwoTwo />} />
        <Route path="/p3" element={<PageThree />} />
        <Route path="/p3.1" element={<PageThreeOne />} />
        <Route path="/p3.2" element={<PageThreeTwo />} />
        <Route path="/p3.3" element={<PageThreeThree />} />
        <Route path="/ex4" element={<PageFour />} />
        <Route path="/ex4.1" element={<PageFourOne />} />
        <Route path="/end" element={<PageFourTwo />} />
      </Routes>
    </div>
  );
}

export default App;
