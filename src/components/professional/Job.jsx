import React from "react";

export const Job = props => {
  return (
    <div id="professional-card">
      <div className="job-text">
        <div
          className="job-image"
          style={{ backgroundImage: `url(${props.logo})` }}
        ></div>
        <div className="job-name">{props.name}</div>
        <div className="job-function">{props.function}</div>
      </div>
      <hr />
      <div className="job-description">{props.description}</div>
      <div className="job-place">
        <div className="job-time">{props.time}</div>
        <div className="job-separator"></div>
        <div className="job-town">{props.town}</div>
      </div>
    </div>
  );
};
