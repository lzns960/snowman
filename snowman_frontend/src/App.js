import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Snowfall from 'react-snowfall';

import SnowmanGarden from './pages/SnowmanGarden/SnowmanGarden';
import './App.css';

function App() {
  return (
    <>
      <Snowfall />
      <Routes>
        <Route path="/" element={<SnowmanGarden />} />
      </Routes>
    </>
  );
}

export default App;
