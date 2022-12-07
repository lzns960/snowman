import React from 'react';
import User from './pages/User/User';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SnowmanGarden from './pages/SnowmanGarden/SnowmanGarden';

function App() {
  return (
    <>
      <canvas id="snow"></canvas>
      <Routes>
        <Route path="/" element={<SnowmanGarden />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
