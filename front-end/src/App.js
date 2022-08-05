import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Intro from "./pages/Intro";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" element={<Intro/>} />
    </BrowserRouter>
  );
}

export default App;
