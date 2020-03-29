import React from "react";
import "../../myCss.css";

export const Navbutton = props => {
  return (
    <div className="navbutton">
      <div className="nav-line"></div>
      <div
        className="button-ico"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="button-text">{props.text}</div>
    </div>
  );
};
