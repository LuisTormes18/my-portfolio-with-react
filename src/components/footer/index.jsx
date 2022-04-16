import React from "react";

import NavbarIcons from "../NavbarIcons/NavbarIcons";
import Logo from "../Logo/Logo";
import "./footer.css";

function Footer() {
  return (
    <footer id="footer">
      <Logo />

      <NavbarIcons />

      <div className="licencia">
        <span>© Luis Tormes | All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
