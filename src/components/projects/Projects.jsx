import React, { Component } from "react";
import swizlandlogo from "./images/swiz-logo.jpg";
import memorygamelogo from "./images/Christmas-Game.png";
import onlinelink from "./images/deployment.png";
import githublink from "./images/Github.png";
import Project from "./Project";
import "./Projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: "Swizland Blog",
          logo: swizlandlogo,
          description:
            "A blog about adventure, culture and relaxing in the beatufil country of Switzerland.",
          technologies: this.technologiesSwizLand()
        },
        {
          name: "Christmas Memory Game",
          logo: memorygamelogo,
          description: "A memory game with a Christmas theme.",
          technologies: this.technologiesMemoryGame()
        }
      ],
      link: onlinelink,
      code: githublink
    };
  }

  technologiesSwizLand = () => {
    return (
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Ajax</li>
      </ul>
    );
  };

  technologiesMemoryGame = () => {
    return (
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>jQuery</li>
      </ul>
    );
  };

  render() {
    return (
      <div id="projects-section" ref={this.props.innerRef}>
        <div className="section-title">
          <div className="separator-text">Projects</div>
        </div>
        <div id="projects-content">
          {this.state.projects.map((projects, index) => {
            return (
              <Project
                name={this.state.projects[index].name}
                logo={this.state.projects[index].logo}
                description={this.state.projects[index].description}
                technologies={this.state.projects[index].technologies}
                link={this.state.link}
                code={this.state.code}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <Projects innerRef={ref} {...props} />
));
