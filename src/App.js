import NavBar from "./NavBar";
import FooterBar from "./FooterBar";
import Home from "./Home";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import Project from "./Project";
import Resume from "./Resume";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      <FooterBar></FooterBar>
    </div>

    </BrowserRouter>
  );
}

export default App;
