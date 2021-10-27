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
{
    // <div class="card">
    //     <div class="card-img">
    //         <img src="./assets/img/drinkfinder.png" alt="" />
    //     </div>
    //     <div class="card-footer">
    //         <div class="card-title">
    //             <h2>Drink Finder</h2>
    //         </div>
    //         <ul class="card-skills">
    //             <li>
    //                 <img
    //                     src="./assets/img/skills/react.png"
    //                     alt=""
    //                 />
    //             </li>
    //             <li>
    //                 <img src="./assets/img/skills/css.png" alt="" />
    //             </li>
    //         </ul>
    //         <div class="card-btn">
    //             <a
    //                 href="
    //                 target="_blank"
    //                 rel="noreferrer"
    //                 >see more.</a
    //             >
    //         </div>
    //     </div>
    // </div>
    // <div class="card">
    //     <div class="card-img">
    //         <img src="./assets/img/fylo.jpeg" alt="" />
    //     </div>
    //     <div class="card-footer">
    //         <div class="card-title">
    //             <h2>Fylo Frontend-Mentor Challenge</h2>
    //         </div>
    //         <ul class="card-skills">
    //             <li>
    //                 <img
    //                     src="./assets/img/skills/html.png"
    //                     alt=""
    //                 />
    //             </li>
    //             <li>
    //                 <img
    //                     src="./assets/img/skills/sass.jpg"
    //                     alt=""
    //                 />
    //             </li>
    //         </ul>
    //         <div class="card-btn">
    //             <a
    //                 href="https://lt-fylo.netlify.app"
    //                 target="_blank"
    //                 rel="noreferrer"
    //                 >see more.</a
    //             >
    //         </div>
    //     </div>
    // </div>
    // <div class="card">
    //     <div class="card-img">
    //         <img src="./assets/img/insure.jpeg" alt="" />
    //     </div>
    //     <div class="card-footer">
    //         <div class="card-title">
    //             <h2>Insure Frontend-Mentor challenge</h2>
    //         </div>
    //         <ul class="card-skills">
    //             <li>
    //                 <img
    //                     src="./assets/img/skills/html.png"
    //                     alt=""
    //                 />
    //             </li>
    //             <li>
    //                 <img src="./assets/img/skills/css.png" alt="" />
    //             </li>
    //             <li>
    //                 <img src="./assets/img/skills/js.jpg" alt="" />
    //             </li>
    //         </ul>
    //         <div class="card-btn">
    //             <a
    //                 href="https://lt-insure.netlify.app"
    //                 target="_blank"
    //                 rel="noreferrer"
    //                 >see more.</a
    //             >
    //         </div>
    //     </div>
    // </div>
    // <div class="card">
    //     <div class="card-img">
    //         <img src="./assets/img/loopstudios.jpeg" alt="" />
    //     </div>
    //     <div class="card-footer">
    //         <div class="card-title">
    //             <h2>Loopstudios Frontend-Mentor challenge</h2>
    //         </div>
    //         <ul class="card-skills">
    //             <li>
    //                 <img
    //                     src="./assets/img/skills/html.png"
    //                     alt=""
    //                 />
    //             </li>
    //             <li>
    //                 <img src="./assets/img/skills/css.png" alt="" />
    //             </li>
    //             <li>
    //                 <img src="./assets/img/skills/js.jpg" alt="" />
    //             </li>
    //         </ul>
    //         <div class="card-btn">
    //             <a
    //                 href="https://lt-loopstudios.netlify.app"
    //                 target="_blank"
    //                 rel="noreferrer"
    //                 >see more.</a
    //             >
    //         </div>
    //     </div>
    // </div>
    // <div class="card">
    //     <div class="card-img">
    //         <img src="./assets/img/sunnyside.jpeg" alt="" />
    //     </div>
    //     <div class="card-footer">
    //         <div class="card-title">
    //             <h2></h2>
    //         </div>
    //         <ul class="card-skills">
    //             <li>
    //                 <img
    //                     src="./assets/img/skills/react.png"
    //                     alt=""
    //                 />
    //             </li>
    //             <li>
    //                 <img src="./assets/img/skills/css.png" alt="" />
    //             </li>
    //         </ul>
    //         <div class="card-btn">
    //             <a
    //                 href="https://lt-sunnyside.netlify.app"
    //                 target="_blank"
    //                 rel="noreferrer"
    //                 >see more.</a
    //             >
    //         </div>
    //     </div>
    // </div> */
}
