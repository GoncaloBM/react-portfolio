import React, { Component } from "react";
import "../../myCss.css";
import { Navbutton } from "./Navbutton";
import { NavInfo } from "./NavInfo";
import abouticon from "./images/About-me.png";
import contacticon from "./images/Contact.png";
import professionalicon from "./images/Professional.png";
import educationicon from "./images/Education.png";
import skillsicon from "./images/Skills.png";
import projectsicon from "./images/Projects.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Gonçalo Mira",
      function: "Web Developer",
      buttons: [
        { name: "About me", image: abouticon },
        { name: "Professional Experience", image: professionalicon },
        { name: "Education", image: educationicon },
        { name: "Skills", image: skillsicon },
        { name: "Projects", image: projectsicon },
        { name: "Contacts", image: contacticon }
      ]
    };
  }

  render() {
    return (
      <div id="nav">
        <NavInfo name={this.state.name} function={this.state.function} />
        {this.state.buttons.map((button, index) => {
          return (
            <Navbutton
              text={this.state.buttons[index].name}
              image={this.state.buttons[index].image}
            />
          );
        })}
      </div>
    );
  }
}
export default Navbar;
