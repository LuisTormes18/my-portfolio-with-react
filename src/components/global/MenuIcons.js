import React from "react";
import { Link } from "react-router-dom";

import './global.css';

function MenuIcons() {
    return (
        <ul className="ul-icons">
            <li>
                <Link
                    className="fab fa-linkedin"
                    to="https://www.linkedin.com/in/luis-angel-tormes-aguilera"
                    aria-hidden="true"
                    target="_blank"
                    rel="noreferrer"
                ></Link>
            </li>
            <li>
                <Link
                    className="fab fa-instagram"
                    to="https://www.instagram.com/luistormes_oficial/"
                    aria-hidden="true"
                    target="_blank"
                    rel="noreferrer"
                ></Link>
            </li>
            <li>
                <Link
                    className="fab fa-github"
                    to="https://github.com/LuisTormes18"
                    aria-hidden="true"
                    target="_blank"
                    rel="noreferrer"
                ></Link>
            </li>
        </ul>
    );
}

export default MenuIcons;
