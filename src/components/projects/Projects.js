import React from "react";
import { projects } from "./../../constants/constants";
import CardProject from "./CardProject";

import './projects.css';

function Projects() {
    return (
        <section id="session-projects">
            <div className="header-session">
                <h2>Projects</h2>
            </div>
            <div className="cards">
                {projects.map((project) => (
                    <CardProject key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
