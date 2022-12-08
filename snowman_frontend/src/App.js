import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Snowfall from 'react-snowfall';

import SnowmanGarden from './pages/SnowmanGarden/SnowmanGarden';
import './App.css';

function App() {
  return (
    <div id="App">
      <Snowfall />
      <Routes>
        <Route path="/" element={<SnowmanGarden />} />
      </Routes>
    </div>
  );
}

export default App;
