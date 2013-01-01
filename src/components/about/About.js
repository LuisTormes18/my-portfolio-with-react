import React from "react";

import Myimg from "./../../assets/img/yo.jpg";
import cv from "./../../assets/cv/luis_tormes_cv_en.pdf";

import './about.css';
function About() {
    return (
        <section id="session-about">
            <div className="about-img">
                <div>
                    <img
                        src={Myimg}
                        alt="luis tormes"
                    />
                </div>
            </div>
            <div className="about-description">
                <div>
                    <h4 id='who'>Who I'm?</h4>
                    <hr />
                    <br />
                    <p>
                        I am a Bachelor of Computer Science student at the 
                        Universidad de Oriente (VE), I am passionate
                        about the world of programming and web development.
                        I have knowledge in various technologies of the
                        Software development industry, I also have various
                        personal skills such as: <br />
                        good communication, willingness to learn, ability to
                        overcome challenges that arise, sense of responsibility,
                        initiative, etc.
                    </p>

                    <span className="btn btn-cv">
                        <a
                            href={cv}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Download cv
                        </a>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default About;
