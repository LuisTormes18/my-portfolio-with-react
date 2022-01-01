import React from "react";

import CardBtn from "./CardBtn";

function CardProject({ title, image, tags, repository, source }) {

    return (
        <div className="card">
            <div className="card-img">
                <img src={`${image}`} alt={title} />
            </div>

            <div className="card-footer">
                <div className="card-title">
                    <h2>{title}</h2>
                </div>

                <div className="card-tags">{tags}</div>
                <div className="sources">
                    <CardBtn url={repository} text="repository" />
                    <CardBtn url={source} text="demo" />
                </div>
            </div>
        </div>
    );
}

export default CardProject;
