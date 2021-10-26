import React from "react";
import { projects } from "./../../constants/constants";
import CardProject from "./CardProject";

function Projects() {
    return (
        <section id="session-3">
            <div class="header-session-3">
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
