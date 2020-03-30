import React from "react";
import "./About.css";

export const About = React.forwardRef((props, ref) => {
  return (
    <div id="about-section" ref={ref}>
      <div className="section-title">
        <div className="separator-text">About me</div>
      </div>
      <div id="about-content" />
    </div>
  );
});
