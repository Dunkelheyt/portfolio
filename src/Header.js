/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import {
  NavLink,
} from "react-router-dom";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
      <ul className="header mx-auto">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/translations">Game Translations</NavLink></li>
        <li><NavLink exact to="/copywriting">Copywriting</NavLink></li>
        <li><NavLink exact to="/contact">Contact</NavLink></li>
      </ul>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        🔻
      </button>
    </header>
  );
}
