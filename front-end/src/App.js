import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Intro from "./pages/Intro";
import Greeting from "./pages/Greeting";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </Router>
  );
}

export default App;
