import React from "react";
import { animateScroll as scroll } from "react-scroll";

// import logo from "./../../assets/img/logo.png";
import "./logo.css";

export default function Logo() {
  return (
    <div
      id="logo"
      className="pointer"
      onClick={() => {
        scroll.scrollToTop();
      }}
    >
      <h1>
        Luis<small>Tormes</small>
      </h1>
    </div>
  );
}
