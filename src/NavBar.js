import React from "react";
import { useState } from "react";
import menuButton from "./imgs/menuButton.svg";

const NavBar = () => {
  const [ismenuPanelOpen, setIsMenuPanelOpen] = useState(false);

  function menuButtonPressed() {
    setIsMenuPanelOpen(!ismenuPanelOpen);
  }

  return (
    <div id="nav-bar">
      <ul>
        <li><img onClick={menuButtonPressed} src={menuButton} alt="menu button" className="menu-button" /></li>
        {ismenuPanelOpen && (
          <div className="nav-bar-links">
            <li><a href="/">Home</a></li>
            <li><a href="/Project">Projects</a></li>
            <li><a href="/Resume">Resume</a></li>
          </div>
        )}
    </ul>
    </div>
  );
};

export default NavBar;
