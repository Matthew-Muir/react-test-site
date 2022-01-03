import React from "react";
import { useState } from "react";
import menuButton from "./imgs/menuButton.svg";

const NavBar = () => {
  const [ismenuPanelOpen, setIsMenuPanelOpen] = useState(false);
  function menuButtonPressed() {
    setIsMenuPanelOpen(!ismenuPanelOpen);
  }
  return (
    <div className="nav-bar">
      <div className="flexContainer">

      </div>
      <ul className="hamburger-menu">
        <li>        <img
          onClick={menuButtonPressed}
          src={menuButton}
          className="menu-button"
          alt="menuButton"
        /></li>
      {ismenuPanelOpen && <div className="flexContainer">

              <li className="hm-nav-item">
                <a onClick={menuButtonPressed} href="#projects">Projects</a>
              </li>
              <li className="hm-nav-item">
                <a onClick={menuButtonPressed} href="#about-me">About Me</a>
              </li>

      </div> }
      </ul>

    </div>
  );
};

export default NavBar;
