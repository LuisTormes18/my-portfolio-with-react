import React from "react";

import CardBtn from "./CardBtn";

function CardProject({ project }) {
    const { title, image, tags, repository, source } = project;

    return (
        <div className="card">
            <div className="card-img">
                <img src={`${image}`} alt={title} />
            </div>

            <div className="card-footer">
                <div className="card-title">
                    <h2>{title}</h2>
                </div>

                <ul className="card-tags">
                    {tags.map((tag,index)=> (
                        <li key={index}>
                            <img src={tag.image} alt={tag.name} />
                        </li>
                    ))}
                </ul>
                <div className="sources">
                    <CardBtn url={repository} text="repository" />
                    <CardBtn url={source} text="demo" />
                </div>
            </div>
        </div>
    );
}

export default CardProject;
