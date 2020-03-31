import React from "react";
import classNames from "classnames";

export const NavInfo = props => {
  let showingInfo = classNames(
    { "navinfo-mobile": props.isMobile },
    { "navinfo-web": !props.isMobile }
  );
  return (
    <div id="navinfo" className={showingInfo}>
      <div id="info-photo"></div>
      <div id="info-name">
        <div className="name-info">{props.name}</div>
        <div className="function-info">{props.function}</div>
      </div>
    </div>
  );
};
