import React from "react";

import CardBtn from "./CardBtn";

function CardProject({ project }) {
    const { title, image, tags, repository, source } = project;

    return (
        <div className="card">
            <div className="card-img">
                <img src={image} alt={title} />
            </div>

            <div className="card-footer">
                <div className="card-title">
                    <h2>{title}</h2>
                </div>

                <ul className="card-tags">
                    {tags.map(({ img, name }) => (
                        <li key={name}>
                            <img src={img} alt={name} />
                        </li>
                    ))}
                </ul>
                <div className="sources">
                    <CardBtn url={repository} text="GitHub" />
                    <CardBtn url={source} text="Demo" />
                </div>
            </div>
        </div>
    );
}

export default CardProject;
