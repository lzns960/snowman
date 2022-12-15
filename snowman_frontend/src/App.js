import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Snowfall from 'react-snowfall';

import SnowmanGarden from './pages/SnowmanGarden/SnowmanGarden';
import SnowmanDesign from './pages/SnowmanDesign/SnowmanDesign';
import Letter from './pages/Letter/Letter';
import './App.css';

function App() {
  return (
    <div id="App">
      <Snowfall />
      <Routes>
        <Route path="/" element={<SnowmanGarden />} />
        <Route path="/snowmanDesign" element={<SnowmanDesign />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </div>
  );
}

export default App;
