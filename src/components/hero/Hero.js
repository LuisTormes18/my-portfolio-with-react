import React from "react";

import './hero.css';

import Header from "./../header/Header";
import MenuIcons from "./../global/MenuIcons";

function Hero() {
    return (
        <div id="hero">
            <Header />

            <div className="hero__text">
                <h1 translate="no">Hi, I'm Luis Tormes</h1>
                <p translate="no">Web Developer.</p>
                <MenuIcons />
            </div>
        </div>
    );
}

export default Hero;
