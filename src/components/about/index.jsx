import React from "react";

import MyImg from "./../../assets/img/yo4.png";
import cv_es from "./../../assets/cv/cv_es.pdf";
import cv_en from "./../../assets/cv/cv-en.pdf";

import "./about.css";
function About() {
  return (
    <section id="session-about">
      <div className="about-img">
        <div>
          <img src={MyImg} alt="luis tormes" />
        </div>
      </div>
      <div className="about-description">
        <div>
          <h4 id="who">Who am I?</h4>
          <hr />
          <br />
          <p>
            I am a Bachelor of Computer Science student at the University of
            Orient (VE), I am passionate about the world of programming and web
            development. I have knowledge in various technologies of the
            Software development industry, I also have various personal skills
            such as: good communication, willingness to learn, ability to
            overcome challenges that arise, sense of responsibility, initiative,
            etc.
          </p>

          <div className="cv-container">
            <a
              className="btn-cv btn-cv-es"
              href={cv_es}
              target="_blank"
              rel="noreferrer"
            >
              cv in spanish
            </a>
            <a
              className="btn-cv btn-cv-en"
              href={cv_en}
              target="_blank"
              rel="noreferrer"
            >
              cv in english
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
