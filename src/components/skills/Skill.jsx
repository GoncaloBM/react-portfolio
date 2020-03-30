import React from "react";

export const Skill = props => {
  return (
    <div className="it-skill">
      <div
        className="skill-image"
        style={{ backgroundImage: `url(${props.logo})` }}
      ></div>
      <div className="skill-name">{props.name}</div>
    </div>
  );
};
