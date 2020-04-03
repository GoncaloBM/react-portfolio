import React from "react";
import { Component } from "react";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { turn: false };
  }

  turnCard = () => {
    this.setState({
      turn: !this.state.turn
    });
  };
  render() {
    let props = this.props;
    var classNames = require("classnames");
    let window = classNames(
      "project-window",
      { "window-showing": this.state.turn },
      { "window-hidden": !this.state.turn }
    );
    return (
      <div className="projects-card">
        <div
          className="project-image"
          style={{ backgroundImage: `url(${props.logo})` }}
        ></div>
        <div className="project-title">{props.name}</div>
        <div className="project-description">{props.description}</div>
        <div className="project-up" onClick={this.turnCard}></div>

        <div className={window}>
          <div className="project-title-2">
            <div className="title-2">Technologies Used:</div>
            <div className="close-description" onClick={this.turnCard}></div>
          </div>
          <div className="project-description-2">{props.technologies}</div>
          <hr />
          <div className="project-buttons">
            <a
              className="project-button"
              style={{ backgroundImage: `url(${props.link})` }}
              href={props.onlineLink}
            >
              <div className="hover-online">Online View</div>
            </a>
            <a
              className="project-button"
              style={{ backgroundImage: `url(${props.code})` }}
              href={props.codeLink}
            >
              <div className="hover-online">View Code</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Project;
