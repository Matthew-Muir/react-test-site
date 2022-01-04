import React from "react";
import { useState } from "react";
import menuButton from "./imgs/menuButton.svg";

const NavBar = () => {
  const [ismenuPanelOpen, setIsMenuPanelOpen] = useState(false);

  function menuButtonPressed() {
    setIsMenuPanelOpen(!ismenuPanelOpen);
  }

  function onHomePage() {
    let url = window.location.href;
    /* WHY? Remove first two / from url */
    url = url.substring(10);

    let urlPath = url.substring(url.indexOf('/'));

    if (urlPath === "/" || urlPath.substring(0,2) === "/#") {
      return true;
    }
    else {
      return false;
      //LEFT OFF HERE... need to implenet logic so that if on homepage show id links. Else show page links only.
    }
  }

  return (
    <div className="nav-bar">
      <div className="flexContainer"></div>
      <ul className="hamburger-menu">
        <li>
          {" "}
          <img
            onClick={menuButtonPressed}
            src={menuButton}
            className="menu-button"
            alt="menuButton"
          />
        </li>
        {ismenuPanelOpen && (
          <div className="flexContainer">
            <li className="hm-nav-item">
              <a onClick={menuButtonPressed} href="#about-me">
                About Me
              </a>
            </li>
            <li className="hm-nav-item">
              <a onClick={menuButtonPressed} href="#projects">
                Projects
              </a>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
