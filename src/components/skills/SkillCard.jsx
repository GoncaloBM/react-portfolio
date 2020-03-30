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

class SkillCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      skills: {
        coding: [
          { name: "HTML", logo: htmllogo },
          { name: "CSS", logo: csslogo },
          { name: "Javascript", logo: javascriptlogo },
          { name: "Jquery", logo: jquerylogo },
          { name: "Bootstrap", logo: bootstraplogo },
          { name: "SASS", logo: sasslogo },
          { name: "Mocha", logo: mochalogo },
          { name: "Github", logo: githublogo }
        ],
        other: [
          { name: "Photoshop", logo: photoshoplogo },
          { name: "Excel", logo: excellogo },
          { name: "Word", logo: wordlogo },
          { name: "Powerpoint", logo: powerpointlogo },
          { name: "Project", logo: projectlogo }
        ]
      }
    };
  }

  render() {
    return (
      <div className="skill-card">
        <div className="skill-it">{this.state.type}</div>
        <hr />
        <div className="skills">
          {this.state.type === "Coding Skills" &&
            this.state.skills.coding.map((skill, index) => {
              return (
                <Skill
                  name={this.state.skills.coding[index].name}
                  logo={this.state.skills.coding[index].logo}
                />
              );
            })}

          {this.state.type === "Other Skills" &&
            this.state.skills.other.map((skill, index) => {
              return (
                <Skill
                  name={this.state.skills.other[index].name}
                  logo={this.state.skills.other[index].logo}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
export default SkillCard;
