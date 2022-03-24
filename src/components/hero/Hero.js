import React from "react";

import "./hero.css";

import Header from "./../header/Header";
import NavbarIcons from "./../NavbarIcons/NavbarIcons";

function Hero() {
  return (
    <div id="hero">
      <Header />

      <div class="h-100 d-flex justify-content-center align-items-center">
        <div class="texts text-center p-2  ">
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
