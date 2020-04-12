import React, { Component, useState } from "react";
import swizlandlogo from "./images/swiz-logo.jpg";
import memorygamelogo from "./images/Christmas-Game.png";
import wwtbmlogo from "./images/wwtbm.png";
import onlinelink from "./images/deployment.png";
import githublink from "./images/Github.png";
import portfoliolink from "./images/portfolio.png";
import Project from "./Project";
import "./Projects.css";

export const Projects = React.forwardRef((props, ref) => {
  const technologiesPortfolio = (
    <>
      <ul>
        <li>React Hooks</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>SCSS</li>
      </ul>
    </>
  );
  const technologiesWwtbm = (
    <>
      <ul>
        <li>React.js</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>SCSS</li>
      </ul>
    </>
  );

  const technologiesSwizLand = (
    <>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Ajax</li>
      </ul>
    </>
  );

  const technologiesMemoryGame = (
    <>
      {" "}
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>jQuery</li>
      </ul>
    </>
  );

  const [projects, setProject] = useState([
    {
      name: "Portfolio",
      logo: portfoliolink,
      description: "My Portfolio.",
      technologies: technologiesPortfolio,
      codelink: "https://github.com/GoncaloBM/react-portfolio",
      onlinelink: "https://goncalobm.com",
    },
    {
      name: "Who Wants To Be A Millionaire",
      logo: wwtbmlogo,
      description: "Everyone's unmistakable game.",
      technologies: technologiesWwtbm,
      codelink: "https://github.com/GoncaloBM/WWTBM",
      onlinelink: "https://competent-archimedes-29ed49.netlify.com/",
    },
    {
      name: "Swizland Blog",
      logo: swizlandlogo,
      description:
        "A blog about adventure, culture and relaxing in the beatufil country of Switzerland.",
      technologies: technologiesSwizLand,
      codeLink: "https://github.com/GoncaloBM/swisscheeseblog",
      onlinelink: "https://goncalobm.github.io/swisscheeseblog/",
    },
    {
      name: "Christmas Memory Game",
      logo: memorygamelogo,
      description: "A memory game with a Christmas theme.",
      technologies: technologiesMemoryGame,
      codeLink: "https://github.com/GoncaloBM/Christma-Game",
      onlinelink: "https://goncalobm.github.io/Christma-Game/",
    },
  ]);

  const [link, setLink] = useState(onlinelink);
  const [code, setCode] = useState(githublink);

  return (
    <div id="projects-section" ref={ref}>
      <div className="section-title">
        <div className="separator-text">Projects</div>
      </div>
      <div id="projects-content">
        {projects.map((projectsUnit, index) => {
          return (
            <Project
              name={projects[index].name}
              logo={projects[index].logo}
              description={projects[index].description}
              technologies={projects[index].technologies}
              onlineLink={projects[index].onlinelink}
              codeLink={projects[index].codeLink}
              link={link}
              code={code}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
});
