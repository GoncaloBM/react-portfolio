import React from "react";

export const EducationCard = props => {
  return (
    <div className="education-card">
      <a
        className="education-school"
        href="https://www.wildcodeschool.com/pt-PT/campuses/Lisboa"
      >
        {props.name}
      </a>
      <div className="education-title">{props.title}</div>
      {props.topics && <hr />}
      <div className="education-topics">{props.topics}</div>
    </div>
  );
};
