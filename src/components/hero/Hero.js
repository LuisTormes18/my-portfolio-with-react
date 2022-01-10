import React from "react";

import "./hero.css";

import Header from "./../header/Header";
import NavbarIcons from "./../NavbarIcons/NavbarIcons";

function Hero() {
  return (
    <div id="hero">
      <Header />

      <div className="hero__text">
        <h1 translate="no">Hi, I'm Luis Tormes</h1>
        <p translate="no">Web Developer.</p>
        <NavbarIcons />
      </div>
    </div>
  );
}

export default Hero;
