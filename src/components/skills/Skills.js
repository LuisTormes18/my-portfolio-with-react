import React from "react";

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiSass,
  DiBootstrap,
  DiNodejsSmall,
  DiMongodb,
  DiMysql,
} from "react-icons/di";
import { SiNextdotjs, SiExpress } from "react-icons/si";

import "./skills.css";

function Skills() {
  return (
    <section id="session-skills">
      <div className="skills">
        <div className="header-session">
          <h2>Skills</h2>
        </div>

        <ul>
          <li className="li-skills">
            <DiHtml5 size={50} color="orange" />
            <span translate="no">Html</span>
          </li>
          <li className="li-skills">
            <DiCss3 size={50} color="#00f9" />
            <span translate="no">Css</span>
          </li>
          <li className="li-skills">
            <DiJsBadge size={50} color="#EFF453" />
            <span translate="no">JavaScript</span>
          </li>
          <li className="li-skills">
            <DiReact size={50} color="#53CFF4" />
            <span translate="no">React</span>
          </li>
          <li className="li-skills">
            <DiSass size={50} color="#F453A8" />
            <span translate="no">Sass</span>
          </li>
          <li className="li-skills">
            <DiBootstrap size={50} color="#AA48D7" />
            <span translate="no">Bootstrap 5</span>
          </li>
          <li className="li-skills">
            <DiNodejsSmall size={50} color="green" />
            <span translate="no">Node.js</span>
          </li>
          <li className="li-skills">
            <DiMongodb size={50} color="#40BD44" />
            <span translate="no">Mongodb</span>
          </li>
          <li className="li-skills">
            <DiMysql size={50} />
            <span translate="no">Mysql</span>
          </li>
          <li className="li-skills">
            <SiNextdotjs size={40} />
            <span translate="no">Next js</span>
          </li>
          <li className="li-skills">
            <SiExpress size={40} />
            <span translate="no">Express js</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
