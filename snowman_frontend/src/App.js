import React, { Component } from 'react';
import User from './pages/User/User';
import { Routes, Route } from 'react-router-dom';

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
