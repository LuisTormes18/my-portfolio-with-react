import React, { useState } from "react";

import Logo from "./../global/Logo";
import MenuItem from "./MenuItem";
import "./header.css";

function Header() {
    const [menuMovil, setMenuMovil] = useState(false);
    const [sticky, setSticky] = useState("");

    const classMenuMovil = menuMovil ? "active-menu-mobile" : "";

    window.onscroll = () => {
        let scrollPosition = window.pageYOffset;

        if (scrollPosition > 319) {
            setSticky("sticky");
        } else {
            setSticky("");
        }
    };

    return (
        <header className={`header ${sticky}`}>
            <Logo />

            <nav id="navbar" className={classMenuMovil}>
                <button
                    onClick={() => {
                        setMenuMovil(!menuMovil);
                    }}
                    id="btn-mobile"
                >
                    <span id="hamburger"> </span>
                </button>
                <ul id="menu">
                    <MenuItem text="Home" to="hero" />
                    <MenuItem text="About" to="session-about" />
                    <MenuItem text="Projects" to="session-projects" />
                    <MenuItem text="Skills" to="session-skills" />
                </ul>
            </nav>
        </header>
    );
}

export default Header;
