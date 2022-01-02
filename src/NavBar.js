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
                <a href="#">TBD 01</a>
              </li>
              <li className="hm-nav-item">
                <a href="#">TBD 02</a>
              </li>
              <li className="hm-nav-item">
                <a href="#">TBD 03</a>
              </li>

      </div> }
      </ul>

    </div>
  );
};

export default NavBar;
