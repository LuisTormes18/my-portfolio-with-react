import React, { useState } from "react";
import { MdMenu } from "react-icons/md";

import Logo from "./../Logo/Logo";
import MenuItem from "./MenuItem";
import "./header.css";

function Header() {
  const [menuMovil, setMenuMovil] = useState(false);
  const [sticky, setSticky] = useState("");

  const classMenuMovil = menuMovil ? "active-menu-mobile" : "";

  window.onscroll = () => {
    let scrollPosition = window.pageYOffset;

    if (scrollPosition > 1) {
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
          <MdMenu size={35} color={"#f1f1f1"} />
        </button>
        <ul id="menu">
          <MenuItem text="Home" to="hero" />
          <MenuItem text="About" to="session-about" />
          <MenuItem text="Services" to="session-services" />
          <MenuItem text="Projects" to="session-projects" />
          <MenuItem text="Skills" to="session-skills" />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
