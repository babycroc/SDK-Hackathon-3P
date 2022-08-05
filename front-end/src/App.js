import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Intro from "./pages/Intro";
import Greeting from "./pages/Greeting";
import Main from "./pages/Main";
import Score from "./pages/Score";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/greeting" element={<Greeting />} />
          <Route path="/main" element={<Main />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
