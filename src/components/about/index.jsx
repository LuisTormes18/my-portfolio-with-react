import React from "react";

import MyImg from "./../../assets/img/yo4.png";
import cv_es from "./../../assets/cv/cv_es.pdf";
import cv_en from "./../../assets/cv/cv_en.pdf";

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
            I am Luis Tormes, Frontend Developer with React and Nextjs, I am passionate
about this wonderful world of programming, web development, and software
development in general. I have knowledge in various web development
technologies: HTML, CSS, JavaScript, ReactJS, Redux, Nextjs, React Native,
Nodejs, Tailwind, Bootstrap, Sass, Git, I also have knowledge in other technologies
such as: python, C#, and .Net.
As a person I have a great willingness to learn, the ability to overcome challenges
that arise, a sense of responsibility, and I am capable of adapting to any
circumstance, always giving my best.

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
