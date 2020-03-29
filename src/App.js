import React, { Component } from "react";
import "./myCss.css";
import Navbar from "./components/navbar/navbar";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import Professional from "./components/professional/Professional";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <body>
        <Navbar />
        <div id="screen">
          <Home />
          <About />
          <Professional />
          <Education />
          <Skills />
          <Projects />
          <div id="contacts-section">
            <div className="section-title">
              <div className="separator-text">Contacts</div>
            </div>
            <div id="contacts-content">
              <div className="contact">
                <div className="contact-image" id="Mail-logo"></div>
                <a
                  className="contact-text"
                  href="mailto:goncalobeiraodemira@gmail.com"
                >
                  goncalobeiraodemira@gmail.com
                </a>
              </div>
              <div className="contact">
                <div className="contact-image" id="Github-logo"></div>
                <a
                  className="contact-text"
                  href="https://github.com/GoncaloBM<"
                >
                  https://github.com/GoncaloBM
                </a>
              </div>
              <div className="contact">
                <div className="contact-image" id="Linkedin-logo"></div>
                <a
                  className="contact-text"
                  href="https://www.linkedin.com/in/goncalomira"
                >
                  https://www.linkedin.com/in/goncalomira
                </a>
              </div>
            </div>
          </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="javascript.js"></script>
      </body>
    );
  }
}

export default App;
