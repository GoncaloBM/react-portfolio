import React from "react";

export const EducationCard = props => {
  return (
    <div className="education-card">
      <a className="education-school" href={props.link}>
        {props.name}
      </a>
      <div className="education-title">{props.title}</div>
      {props.topics && <hr />}
      <div className="education-topics">{props.topics}</div>
    </div>
  );
};
