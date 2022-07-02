import React from "react";

import CardBtn from "./CardBtn";

function CardProject({ title, image, tags, repository, source }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={`${image}`} alt={title} />
      </div>

      <div className="card-body">
        <div className="card-header">
          <h2 className="card-title">{title}</h2>
          <div className="card-tags">{tags}</div>
        </div>

        <div className="sources">
          <CardBtn url={repository} text="repository" />
          <CardBtn url={source} text="demo" />
        </div>
      </div>
    </div>
  );
}

export default CardProject;
