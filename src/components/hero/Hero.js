import React from "react";

import "./hero.css";

import Header from "./../header/Header";
import NavbarIcons from "./../NavbarIcons/NavbarIcons";

function Hero() {
  return (
    <div id="hero">
      <Header />

      <div className="hero_contents">
        <div className="texts ">
          <h1>
            Luis <span>Tormes</span>
          </h1>
          <p translate="no">Frontend Developer</p>
          <NavbarIcons />
        </div>
      </div>
    </div>
  );
}

export default Hero;
