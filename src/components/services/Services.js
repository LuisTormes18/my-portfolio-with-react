import React from "react";
import Service from "./Service";

import { FaCode, FaMobile, FaTachometerAlt } from "react-icons/fa";

import "./services.css";

function Services() {
  return (
    <session id="session-services">
      <div className="header-session">
        <h2>Services</h2>
      </div>
      <div className="grid-services">
        <Service
          icon={FaCode}
          title="Web Development"
          description="Creation of high-quality websites, which help you boost your business."
        />
        <Service
          icon={FaMobile}
          title="Responsive Design"
          description="Your site will display correctly on any device, including desktop computers, tablets, and mobile phones."
        />
        <Service
          icon={FaTachometerAlt}
          title="Performance"
          description=" Creation of high-performance sites to attract and retain users."
        />
      </div>
    </session>
  );
}

export default Services;

//  <Service
//     icon="fal fa-location"
//     title="Seo"
//     description="Optimization of your website to appear in the main search engines, and have a greater presence on the web for your clients"
// />
