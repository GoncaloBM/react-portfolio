import React from "react";
import "./MobileNavbar.css";
import classNames from "classnames";

export const MobileNavbar = props => {
  let showingBar = classNames(
    "mobile-navbar",
    { showing: props.isMobile },
    { hidden: !props.isMobile }
  );
  return (
    <div className={showingBar}>
      <div className="burger-icon" onClick={props.displayNavbar}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
      <div className="names">
        <div className="name">Gonçalo Mira</div>
        <div className="function">Web Developer</div>
      </div>
    </div>
  );
};
