import React, { useState } from "react";
import logo from "../images/logo.svg";
function Header() {
    const [menuMovil, setMenuMovil] = useState(null);

    function toogleMenu() {
        if (menuMovil) {
            setMenuMovil(null);
        } else {
            setMenuMovil("active-menu-mobile");
        }
    }
    return (
        <header className="header">
            <div id="logo">
                <img src={logo} />
            </div>
            <nav id="navbar" className={menuMovil}>
                <button onClick={toogleMenu} id="btn-mobile">
                    <span id="hamburger"> </span>
                </button>
                <ul id="menu">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Skills</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
