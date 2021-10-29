import React from "react";
import { skills } from "./../../constants/constants";

import './skills.css';

function Skills() {
    return (
        <section id="session-skills">
            <div className="skills">
            <div className='header-session'>
                <h2 >Skills</h2>

            </div>
                <ul>
                    {skills.map((tag,index) => (
                        <li className="li-skills" key={index}>
                            <img src={tag.image} alt={tag.name} />
                            <span translate="no">{tag.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Skills;
