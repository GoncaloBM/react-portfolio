import React from "react";
import "./About.css";

export const About = React.forwardRef((props, ref) => {
  return (
    <div id="about-section" ref={ref}>
      <div className="section-title">
        <div className="separator-text">About me</div>
      </div>
      <div id="about-content">
        <div className="about-description">
          <h2>I'm the one who mount its own pc by the age of 12.</h2>
          <p align="justify">
            Mechanical engineer by training but my passion has always been
            computer science. <br />
            I'm a very hard working person with an atention to the detail
            extremely high with focus on good quality. <br />
            With my professional experience I have been able to be very stress
            resistant and always been pushed to deliver projects on time, and as
            well as with my project management experience, you can count with a
            human-bot in terms of organizing and task scheduling. <br />
            <br />
            I always like to learn the lastest technologies to improve myself,
            and to help others around to improve as well.
            <br />
            <br />
            Share with me your ideas, and get ready to have your project come
            alive.
          </p>
        </div>
      </div>
    </div>
  );
});
