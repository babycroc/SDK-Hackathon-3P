import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Intro from "./pages/Intro";
import Greeting from "./pages/Greeting";
import Script from "./pages/Script";
import Main from "./pages/Main";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/greeting" element={<Greeting />} />
          <Route path="/script" element ={<Script/>} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
