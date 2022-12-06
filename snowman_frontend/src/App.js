import React from 'react';
import User from './pages/User/User';
import { Routes, Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
