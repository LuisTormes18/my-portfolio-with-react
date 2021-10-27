import contactBook from "./../assets/img/contactbook.png";
import drinkfinder from "./../assets/img/drinkfinder.png";
import sunnyside from "./../assets/img/sunnyside.jpeg";

import css from "./../assets/img/skills/css.png";
import html from "./../assets/img/skills/html.png";
import react from "./../assets/img/skills/react.png";
import node from "./../assets/img/skills/node.png";
import sass from "./../assets/img/skills/sass.jpg";
import mdb from "./../assets/img/skills/mdb.png";
import mysql from "./../assets/img/skills/mysql.jpg";
import js from "./../assets/img/skills/js.jpg";
import bootr from "./../assets/img/skills/bt.png";

export const skills = [
    {
        image:html,
        name: "Html",
    },
    {
        image: css,
        name: "Css",
    },
    {
        image: js,
        name: "JavaScript",
    },
    {
        image: react,
        name: "React",
    },
    {
        image: sass,
        name: "Sass",
    },
    {
        image: bootr,
        name: "Bootstrap 5",
    },

    {
        image: node,
        name: "Node.js",
    },

    {
        image: mdb,
        name: "MongoDb",
    },

    {
        image: mysql,
        name: "MySql",
    },
];
export const projects = [
    {
        title: "Contact Book",
        image: contactBook,
        tags: [...skills.slice(3,7)],
        repository: "",
        source: "https://lt-contactbook.netlify.app",
    },
    {
        title: "Drink Finder",
        image: drinkfinder,
        tags: [skills[3],skills[1]],
        repository: "",
        source: "https://lt-drinkfinder.netlify.app",
    },
    {
        title: "Sunnyside Frontend-Mentor challenge",
        image: sunnyside,
        tags: [skills[3],skills[1]],
        repository: "",
        source: "https:/lt-sunnyside.netlify.app",
    },
    {
        title: "",
        image: "./../assets/img/",
        tags: [skills[3]],
        repository: "",
        source: "",
    },
    {
        title: "",
        image: "./../assets/img/",
        tags: [skills[3]],
        repository: "",
        source: "",
    },
    {
        title: "",
        image: "./../assets/img/",
        tags: [skills[3]],
        repository: "",
        source: "",
    },
];
