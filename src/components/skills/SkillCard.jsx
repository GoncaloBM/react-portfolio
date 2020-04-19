import React, { Component } from "react";
import "../../myCss.css";
import { Skill } from "./Skill";
import bootstraplogo from "./images/Bootstrap.png";
import csslogo from "./images/CSS.png";
import excellogo from "./images/excel.png";
import githublogo from "./images/Github.png";
import htmllogo from "./images/HTML.png";
import javascriptlogo from "./images/Javascript.png";
import jquerylogo from "./images/JQuery.png";
import mochalogo from "./images/Mocha.png";
import photoshoplogo from "./images/photoshop.png";
import powerpointlogo from "./images/powerpoint.png";
import projectlogo from "./images/Project.png";
import sasslogo from "./images/SASS.png";
import wordlogo from "./images/word.png";
import reactlogo from "./images/1200px-React-icon.svg.png";
import nodelogo from "./images/1200px-Node.js_logo.svg.png";
import mysqllogo from "./images/mysql-logo-png-transparent.png";

class SkillCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      skills: {
        frontend: [
          { name: "HTML", logo: htmllogo },
          { name: "CSS", logo: csslogo },
          { name: "Javascript", logo: javascriptlogo },
          { name: "React.js", logo: reactlogo },
          { name: "Jquery", logo: jquerylogo },
          { name: "Bootstrap", logo: bootstraplogo },
          { name: "SASS", logo: sasslogo },
          { name: "Mocha", logo: mochalogo },
        ],
        backend: [
          { name: "NodeJs", logo: nodelogo },
          { name: "mySQL", logo: mysqllogo },
        ],
        other: [
          { name: "Github", logo: githublogo },
          { name: "Photoshop", logo: photoshoplogo },
          { name: "Excel", logo: excellogo },
          { name: "Word", logo: wordlogo },
          { name: "Powerpoint", logo: powerpointlogo },
          { name: "Project", logo: projectlogo },
        ],
      },
    };
  }

  render() {
    return (
      <div className="skill-card">
        <div className="skill-it">{this.state.type}</div>
        <hr />
        <div className="skills">
          {this.state.type === "Frontend Skills" &&
            this.state.skills.frontend.map((skill, index) => {
              return (
                <Skill
                  name={this.state.skills.frontend[index].name}
                  logo={this.state.skills.frontend[index].logo}
                  key={index}
                />
              );
            })}

          {this.state.type === "Backend Skills" &&
            this.state.skills.backend.map((skill, index) => {
              return (
                <Skill
                  name={this.state.skills.backend[index].name}
                  logo={this.state.skills.backend[index].logo}
                  key={index}
                />
              );
            })}

          {this.state.type === "Other Skills" &&
            this.state.skills.other.map((skill, index) => {
              return (
                <Skill
                  name={this.state.skills.other[index].name}
                  logo={this.state.skills.other[index].logo}
                  key={index}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
export default SkillCard;
