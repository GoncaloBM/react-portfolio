import React, { Component } from "react";
import "./Professional.css";
import "../../myCss.css";
import { Job } from "./Job";
import exidelogo from "./images/Exide.png";
import tecnotronicalogo from "./images/Tecnotronica.png";
import cbilogo from "./images/ChassisBrakes.png";

class Professional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [
        {
          name: "Exide Technologies, Lda.",
          logo: exidelogo,
          function: "Product Engineer",
          time: "Oct. 2017 - Present",
          town: "Castanheira do Ribatejo, Portugal",
          description: this.exide()
        },
        {
          name: "Tecnotronica",
          logo: tecnotronicalogo,
          function: "Mechanical Engineer",
          time: "Jul. 2016 - Oct. 2017",
          town: "Samora Correia, Portugal",
          description: this.tecntrotonica()
        },
        {
          name: "Chassis Brakes International",
          logo: cbilogo,
          function: "Process Engineer",
          time: "Mar. 2015 - Jun. 2016",
          town: "Abrantes, Portugal",
          description: this.cbi()
        }
      ]
    };
  }

  exide = () => {
    return (
      <>
        <p>
          In this company I have the opportunity to grow as a professional
          inside the development department of a multinational company where I
          deal with several people, clients and suppliers to better achieve a
          product with good quality. The tasks that I am responsible are the
          following:
        </p>
        <ul>
          <li>
            Project management of launching new products since its conception
            until its release to the market, as well as projects for the
            modification of the current ones, to reduce costs and facilitate the
            assembly in plant.
          </li>
          <li>
            Responsible of the mechanical part of the product, by
            designing/modificate the components and keep up their production
            with the supplier;
          </li>
          <li>
            Mechanical designer of the processes and layouts of the plants.
          </li>
        </ul>
      </>
    );
  };

  tecntrotonica = () => {
    return (
      <>
        <p>
          On this actual time, it was given to me the experience, not only, on
          the mechanical project, but also on the project management in a
          stamping tool company, being responsible on several tasks, such as:
        </p>
        <ul>
          <li>
            Mechanical designer of the progressive stamping tools with small
            dimensions, respective calipers and prototypes, using 3D modulation
            software, Solidworks;
          </li>
          <li>
            On the production of the tools, I do the conception follow-up
            between the operators on the workshop.
          </li>
          <li>
            Project manager since the beginning of the tool production until the
            part approval phase. On these tasks I highlight the planning
            management, using the software MS Project and Excel, and occasional
            meeting with customers to discuss parts geometries and the feedback
            from the production.
          </li>
        </ul>
      </>
    );
  };

  cbi = () => {
    return (
      <>
        <p>
          On this period, I work on a success multinational company in the
          automotive area, being responsible for:
        </p>
        <ul>
          <li>
            Mechanical designer, using the software Autodesk Inventor, of
            several internal plant projects;
          </li>
          <li>
            Project Manager of a new product to the company which was awarded to
            the company. To get that objective I was responsible for the
            conception of an assembly line and all the processes on it;
          </li>
          <li>
            With Lean tools and MTM analysis, I got the correct balance for the
            assembly line to various cycles times, to further analysis and
            studies for the cost development;
          </li>
          <li>
            Coordinator of the Manufacturing Network Meetings, where engineer
            member from each CBI factory shared the monthly results and on-going
            projects.
          </li>
        </ul>
      </>
    );
  };

  render() {
    return (
      <div id="professional-section">
        <div className="section-title">
          <div className="separator-text">Professional Experience</div>
        </div>
        <div id="professional-content">
          {this.state.jobs.map((job, index) => {
            return (
              <Job
                name={this.state.jobs[index].name}
                logo={this.state.jobs[index].logo}
                function={this.state.jobs[index].function}
                time={this.state.jobs[index].time}
                town={this.state.jobs[index].town}
                description={this.state.jobs[index].description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Professional;
