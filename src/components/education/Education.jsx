import React, { Component } from "react";
import "../../myCss.css";
import "./Education.css";
import { EducationCard } from "./EducationCard";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [
        {
          name: "Wild Code School - Lisbon",
          title: "Web Developer",
          topics: this.wildCodeSchool(),
          link: "https://www.wildcodeschool.com/pt-PT/campuses/Lisboa"
        },
        {
          name: "Faculdade de Ciências e Tecnologias de Coimbra",
          title: "Master in Production and Mechanical Project",
          topics: "",
          link: "https://www.uc.pt/fctuc/dem"
        },
        {
          name: "Faculdade de Linguas da Universidade de Coimbra",
          title: "Mechanical Engineering",
          topics: "",
          link: "https://www.isec.pt/pt/instituto/departamentos/dem/"
        },
        {
          name: "Instituto Superior de Engenharia de Coimbra",
          title: "German Language",
          topics: "",
          link: ""
        },
        {
          name: "Instituto de Linguas, Linguas Cultura, Abrantes",
          title: "First Certificate in English",
          topics: "",
          link: ""
        }
      ]
    };
  }

  wildCodeSchool = () => {
    return (
      <ul>
        <li>Front-End Development</li>
        <li>HTML / CSS</li>
        <li>Javascript</li>
        <li>jQuery</li>
        <li>Git / Github</li>
      </ul>
    );
  };

  render() {
    return (
      <div id="education-section">
        <div className="section-title">
          <div className="separator-text">Education</div>
        </div>
        <div id="education-content">
          {this.state.education.map((education, index) => {
            return (
              <EducationCard
                name={this.state.education[index].name}
                title={this.state.education[index].title}
                link={this.state.education[index].link}
                topics={this.state.education[index].topics}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Education;
