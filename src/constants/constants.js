import contactBook from "./../assets/img/contactbook.png";
import drinkfinder from "./../assets/img/drinkfinder.png";
import sunnyside from "./../assets/img/sunnyside.jpeg";
import fylo from "./../assets/img/fylo.jpeg";
import loopstudios from "./../assets/img/loopstudios.jpeg";
import cryptocurrency from "./../assets/img/cryptocurrency-price.png";

import css from "./../assets/img/skills/css.png";
import html from "./../assets/img/skills/html.png";
import react from "./../assets/img/skills/react.png";
import node from "./../assets/img/skills/node.png";
import sass from "./../assets/img/skills/sass.png";
import mdb from "./../assets/img/skills/mdb.png";
import mysql from "./../assets/img/skills/mysql.jpg";
import js from "./../assets/img/skills/js.jpg";
import bootr from "./../assets/img/skills/bt.png";

export const skills = [
    {
        image: html,
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
        tags: [...skills.slice(3, 7)],
        repository: "https://github.com/LuisTormes18/contactBook-reaact-app",
        source: "https://lt-contactbook.netlify.app",
    },
    {
        title: "Drink Finder",
        image: drinkfinder,
        tags: [skills[3], skills[1]],
        repository: "https://github.com/LuisTormes18/drink-finder",
        source: "https://lt-drinkfinder.netlify.app",
    },
    {
        title: "Sunnyside Frontend-Mentor challenge",
        image: sunnyside,
        tags: [skills[3], skills[1]],
        repository: "https://github.com/LuisTormes18/react-sunnyside-agency-landing-page-main",
        source: "https://lt-sunnyside.netlify.app",
    },
    {
        title: "Cryptocurrency Price",
        image: cryptocurrency,
        tags: [skills[3], skills[1]],
        repository: "https://github.com/LuisTormes18/cryptocurrency-finance-price-tracker",
        source: "https://lt-cryptocurrency-price.netlify.app",
    },
    {
        title: "Fylo Frontend-Mentor Challenge",
        image: fylo,
        tags: [skills[0],skills[4]],
        repository: "https://github.com/LuisTormes18/landing-fylo-dark-theme",
        source: "https://lt-fylo.netlify.app",
    },
    {
        title: "Loopstudios Frontend-Mentor Challenge",
        image: loopstudios,
        tags: [...skills.slice(0, 3)],
        repository: "https://github.com/LuisTormes18/reto-loopstudios-landing-page-main",
        source: "https://lt-loopstudios.netlify.app",
    },
];

// export const services = [
//     {
//         img: "",
//         title: "",
//         description: "",
//     },{
//         img: "",
//         title: "",
//         description: "",
//     },{
//         img: "",
//         title: "",
//         description: "",
//     },
// https://github.com/LuisTormes18/ip-address-tracker
// ];
