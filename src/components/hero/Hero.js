import React from "react";
import { Link } from "react-router-dom";

import Header from "./../header/Header";

function Hero() {
    return (
        <div id="hero">
            <Header />

            <div className="hero__text">
                <h1 translate="no">Hi, I'm Luis Tormes</h1>
                <p translate="no">Web Developer.</p>
                <ul className="ul-icons">
                    <li>
                        <Link
                            className="fab fa-linkedin"
                            to="https://www.linkedin.com/in/luis-angel-tormes-aguilera"
                            aria-hidden="true"
                            target="_blank"
                            rel="noreferrer"
                        ></Link>
                    </li>
                    <li>
                        <Link
                            className="fab fa-instagram"
                            to="https://www.instagram.com/luistormes_oficial/"
                            aria-hidden="true"
                            target="_blank"
                            rel="noreferrer"
                        ></Link>
                    </li>
                    <li>
                        <Link
                            className="fab fa-github"
                            to="https://github.com/LuisTormes18"
                            aria-hidden="true"
                            target="_blank"
                            rel="noreferrer"
                        ></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Hero;
