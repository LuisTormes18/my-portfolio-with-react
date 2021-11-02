import React from "react";

import MenuIcons from "./../global/MenuIcons";
import Logo from "./../global/Logo";
import './footer.css';

function Footer() {
    return (
        <footer>
            
            <Logo />
            <MenuIcons />
            
            <div className="licencia">
                <span>© Luis Tormes | All rights reserved</span>
            </div>
        </footer>
    );
}

export default Footer;
