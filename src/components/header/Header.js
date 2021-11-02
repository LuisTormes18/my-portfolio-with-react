import React, { useState } from "react";

import Logo from "./../global/Logo";
import MenuItem from './MenuItem';
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
            <Logo />
           
            <nav id="navbar" className={menuMovil}>
                <button onClick={toogleMenu} id="btn-mobile">
                    <span id="hamburger"> </span>
                </button>
                <ul id="menu">

                <MenuItem text='Home' to='hero' />
                <MenuItem text='About' to='session-about' />
                <MenuItem text='Projects' to='session-projects' />
                <MenuItem text='Skills' to='session-skills' />
                 
                </ul>
            </nav>
        </header>
    );
}

export default Header;
