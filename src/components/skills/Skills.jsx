import React, { Component } from "react";
import "./Skills.css";
import SkillCard from "./SkillCard";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = { skillType: ["Coding Skills", "Other Skills"] };
  }
  render() {
    return (
      <div id="skills-section" ref={this.props.innerRef}>
        <div className="section-title">
          <div className="separator-text">Skills</div>
        </div>
        <div id="skills-content">
          {this.state.skillType.map((type, index) => {
            return <SkillCard type={this.state.skillType[index]} />;
          })}
        </div>
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <Skills innerRef={ref} {...props} />
));
