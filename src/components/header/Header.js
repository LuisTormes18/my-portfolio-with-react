import React, { useState } from "react";

import logo from './../../assets/img/logo.png'
import './header.css';

function Header() {
    const [menuMovil, setMenuMovil] = useState(null);
    const [sticky, setSticky] = useState('');

    function toogleMenu() {
        if (menuMovil) {
            setMenuMovil(null);
        } else {
            setMenuMovil("active-menu-mobile");
        }
    }
    window.onscroll = () => {
    let Scrollposition = window.pageYOffset;

    if (Scrollposition > 319) {
        setSticky('sticky');
    } else {
        setSticky('');
    }
    };

    return (
        <header className={`header ${sticky}`}>
            <div id="logo">
                <img src={logo} alt='logo'/>
            </div>
            <nav id="navbar" className={menuMovil}>
                <button onClick={toogleMenu} id="btn-mobile">
                    <span id="hamburger"> </span>
                </button>
                <ul id="menu">
                    <li>
                        <a href="#session-about">About</a>
                    </li>
                                        <li>
                        <a href="#session-projects">Projects</a>
                    </li>
                    <li>
                        <a href="#session-services">Services</a>
                    </li>

                    <li>
                        <a href="#session-skills">Skills</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
