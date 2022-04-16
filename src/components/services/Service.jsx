import React from "react";

function Service({ icon: Icon, title, description }) {
  return (
    <div className="service-box">
      <span>
        <Icon size={50} color={"#1C89FC"} />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Service;
