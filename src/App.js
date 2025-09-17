// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Project1Details from './Project1_Details';
import Project2Details from './Project2_Details';
import Project3Details from './Project3_Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project1-details" element={<Project1Details />} />
        <Route path="/project2-details" element={<Project2Details />} />
        <Route path="/project3-details" element={<Project3Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;