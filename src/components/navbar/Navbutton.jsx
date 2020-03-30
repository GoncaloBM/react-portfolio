import React from "react";
import "../../myCss.css";

export const Navbutton = props => {
  return (
    <div className="navbutton" onClick={() => props.scroll(props.index)}>
      <div className="nav-line" />
      <div
        className="button-ico"
        style={{ backgroundImage: `url(${props.image})` }}
      />
      <div className="button-text">{props.text}</div>
    </div>
  );
};
