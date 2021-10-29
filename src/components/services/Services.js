import React from "react";
import Service from "./Service";

import './services.css';

function Services() {
    return (
        <session id="session-services">
            <div className="header-session">
                <h2>Services</h2>
            </div>
           <div className="grid-services">
                <Service
                    icon="fab fa-html"
                    title="Developer web"
                    description="texto texto texto texto textotextotexto 
                    texto texto texto texto textotextotexto"
                />
                <Service
                    icon="fab fa-html"
                    title="Developer web"
                    description="texto texto texto texto textotextotexto 
                    texto texto texto texto textotextotexto"
                />
                <Service
                    icon="fab fa-html"
                    title="Developer web"
                    description="texto texto texto texto textotextotexto 
                    texto texto texto texto textotextotexto"
                />
            </div>
        </session>
    );
}

export default Services;
 