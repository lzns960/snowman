import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Snowfall from 'react-snowfall';
import './App.css';

import SnowmanGarden from './pages/SnowmanGarden/SnowmanGarden';
import SnowmanDesign from './pages/SnowmanDesign/SnowmanDesign';
import Register from './pages/User/Register';
import Login from './pages/User/Login';
import Letter from './pages/Letter/Letter';
import ReadingLetter from './pages/ReadingLetter/ReadingLetter';

function App() {
  return (
    <div id="App">
      <Print id="print">
        <Snowfall />
        <Routes>
          <Route path="/" element={<SnowmanGarden />} />
          <Route path="/snowmanDesign" element={<SnowmanDesign />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/readingletter" element={<ReadingLetter />} />
        </Routes>
      </Print>
    </div>
  );
}

export default App;

const Print = styled.div`
  background-color: #0f1322;
`;
