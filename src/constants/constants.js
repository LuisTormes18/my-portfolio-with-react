import ltnews from "./../assets/img/ltnews.png";
import contactBook from "./../assets/img/contactbook.png";
import drinkfinder from "./../assets/img/drinkfinder.png";
import sunnyside from "./../assets/img/sunnyside.jpeg";
import fylo from "./../assets/img/fylo.jpeg";
import loopstudios from "./../assets/img/loopstudios.jpeg";
import cryptocurrency from "./../assets/img/cryptocurrency-price.png";

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

const htmlIcon = <DiHtml5 size={40} color="orange" />;
const cssIcon = <DiCss3 size={40} color="#00f9" />;
const jsIcon = <DiJsBadge size={40} color="#EFF453" />;
const reactIcon = <DiReact size={40} color="#53CFF4" />;
const sassIcon = <DiSass size={40} color="#F453A8" />;
const bootstrapIcon = <DiBootstrap size={40} color="#AA48D7" />;
const nodeIcon = <DiNodejsSmall size={40} color="green" />;
const mongoIcon = <DiMongodb size={40} color="#40BD44" />;
const mysqlIcon = <DiMysql size={40} />;
const nextIcon = <SiNextdotjs size={35} />;
const expressIcon = <SiExpress size={35} />;

export const projects = [
    {
        title: "LTNews",
        image: ltnews,
        tags: [nextIcon, cssIcon],
        repository: "https://github.com/LuisTormes18/lt-news",
        source: "https://ltnews.netlify.app",
    },

    {
        title: "Contact Book",
        image: contactBook,
        tags: [reactIcon, sassIcon, bootstrapIcon, expressIcon],
        repository: "https://github.com/LuisTormes18/contactBook-reaact-app",
        source: "https://lt-contactbook.netlify.app",
    },
    {
        title: "Drink Finder",
        image: drinkfinder,
        tags: [reactIcon, cssIcon],
        repository: "https://github.com/LuisTormes18/drink-finder",
        source: "https://lt-drinkfinder.netlify.app",
    },
    {
        title: "Sunnyside Frontend-Mentor challenge",
        image: sunnyside,
        tags: [reactIcon, cssIcon],
        repository:
            "https://github.com/LuisTormes18/react-sunnyside-agency-landing-page-main",
        source: "https://lt-sunnyside.netlify.app",
    },
    {
        title: "Cryptocurrency Price",
        image: cryptocurrency,
        tags: [reactIcon, cssIcon],
        repository:
            "https://github.com/LuisTormes18/cryptocurrency-finance-price-tracker",
        source: "https://lt-cryptocurrency-price.netlify.app",
    },
    {
        title: "Fylo Frontend-Mentor Challenge",
        image: fylo,
        tags: [htmlIcon, sassIcon],
        repository: "https://github.com/LuisTormes18/landing-fylo-dark-theme",
        source: "https://lt-fylo.netlify.app",
    },
    {
        title: "Loopstudios Frontend-Mentor Challenge",
        image: loopstudios,
        tags: [htmlIcon, cssIcon, jsIcon],
        repository:
            "https://github.com/LuisTormes18/reto-loopstudios-landing-page-main",
        source: "https://lt-loopstudios.netlify.app",
    },
];
