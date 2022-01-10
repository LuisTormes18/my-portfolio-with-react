import React from "react";

import "./MenuIcons.css";

function MenuIcons() {
  return (
    <ul className="ul-icons">
      <li>
        <a
          href="https://www.linkedin.com/in/luis-angel-tormes-aguilera"
          aria-hidden="true"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/luistormes_oficial/"
          aria-hidden="true"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/LuisTormes18"
          aria-hidden="true"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </li>
    </ul>
  );
}

export default MenuIcons;
