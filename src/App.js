import NavBar from "./NavBar";
import FooterBar from "./FooterBar";
import Home from "./Home";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import Project from "./Project";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <FooterBar></FooterBar>
    </div>

    </BrowserRouter>
  );
}

export default App;

/* 
      <div className="App">
        <div className="body-content">
          <NavBar></NavBar>
          <img
            id="logoBanner"
            src={blackLogoBanner}
            alt="Matt muir logo banner"
          />
          <AboutMe></AboutMe>
          <Projects></Projects>
          <FooterBar></FooterBar>
        </div>
      </div>
*/
