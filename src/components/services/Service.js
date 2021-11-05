import React from "react";

function Service({ icon, title, description }) {


    return (
        <div className='service-box'>
            <span>
                <i className={ icon }></i>
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Service;
