import React from "react";

export const Contact = props => {
  return (
    <div className="contact">
      <div
        className="contact-image"
        style={{ backgroundImage: `url(${props.image})` }}
      />
      <a
        className="contact-text"
        href={
          props.name === "mail" ? `mailto:${props.link}` : `${props.link}`
        }
      >
        {props.link}
      </a>
    </div>
  );
};
