import React from "react";

import MenuIcons from "./../global/MenuIcons";
import './footer.css';

function Footer() {
    return (
        <footer>
            <ul className="menu-footer">
                <li>
                    <a href="#session-1">Home</a>
                </li>
                <li>
                    <a href="#session-2">About</a>
                </li>
                <li>
                    <a href="#session-3">Portfolio</a>
                </li>
            </ul>

            <MenuIcons />
            
            <div className="licencia">
                <span>&copy Luis Tormes | All rights reserved</span>
            </div>
        </footer>
    );
}

export default Footer;
