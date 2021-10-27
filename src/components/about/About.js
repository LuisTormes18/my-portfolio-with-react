import React from "react";

import Myimg from "./../../assets/img/yo.jpg";
import './about.css';
function About() {
    return (
        <section id="session-about">
            <div className="about-img">
                <div>
                    <img
                        src={Myimg}
                        loading="lazy"
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
                        <b>Universidad de Oriente (VE)</b>, I am passionate
                        about the world of programming and web development.
                        <br />I have knowledge in various technologies of the
                        Software development industry, I also have various
                        personal skills such as: <br />
                        good communication, willingness to learn, ability to
                        overcome challenges that arise, sense of responsibility,
                        initiative, etc.
                    </p>

                    <span className="btn btn-cv">
                        <a
                            href="./../../assets/cv/luis_tormes_cv_en.pdf"
                            target="_blank"
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
