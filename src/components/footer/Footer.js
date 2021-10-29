import React from "react";

import MenuIcons from "./../global/MenuIcons";
import './footer.css';

function Footer() {
    return (
        <footer>
            <ul className="menu-footer">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#session-about">About</a>
                </li>
                <li>
                    <a href="#session-projects">Portfolio</a>
                </li>
            </ul>

            <MenuIcons />
            
            <div className="licencia">
                <span>© Luis Tormes | All rights reserved</span>
            </div>
        </footer>
    );
}

export default Footer;
