import React from 'react';
import User from './pages/User/User';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SnowmanGarden from './pages/SnowmanGarden/SnowmanGarden';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SnowmanGarden />} />
      </Routes>
    </>
  );
}

export default App;
