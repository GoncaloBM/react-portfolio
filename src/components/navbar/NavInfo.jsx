import React from "react";

export const NavInfo = props => {
  return (
    <div id="navinfo">
      <div id="info-photo"></div>
      <div id="info-name">
        <div className="name-function" style={{ fontSize: "3rem" }}>
          {props.name}
        </div>
        <div className="name-function" style={{ fontSize: "1.5em" }}>
          {props.function}
        </div>
      </div>
    </div>
  );
};
