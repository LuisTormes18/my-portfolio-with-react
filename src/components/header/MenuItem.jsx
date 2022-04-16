import React from "react";
import { Link } from "react-scroll";

export default function MenuItem({ text, to }) {
  return (
    <li>
      <Link className="pointer" to={to} smooth={true} duration={1100}>
        {text}
      </Link>
    </li>
  );
}
