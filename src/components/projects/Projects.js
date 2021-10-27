import React from "react";
import { projects } from "./../../constants/constants";
import CardProject from "./CardProject";

import './projects.css';

function Projects() {
    return (
        <section id="session-projects">
            <div class="header-session">
                <h2>Projects</h2>
            </div>
            <div class="cards">
                {projects.map((project) => (
                    <CardProject key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
