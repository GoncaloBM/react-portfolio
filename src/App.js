import React, { Component, createRef } from "react";
import "./myCss.css";
import Navbar from "./components/navbar/navbar";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Professional } from "./components/professional/Professional";
import {Education} from "./components/education/Education";
import Skills from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import { Contacts } from "./components/contact/Contacts";
import { MobileNavbar } from "./components/mobilenavbar/MobileNavbar";
import classNames from "classnames";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: this.isMobile(),
      navbarHidden: false
    };
    this.about = createRef();
    this.professional = createRef();
    this.education = createRef();
    this.skills = createRef();
    this.projects = createRef();
    this.contacts = createRef();
  }

  isMobile = () => {
    if (window.innerWidth < 450) {
      return true;
    } else if (window.innerWidth > 450) {
      return false;
    }
  };

  scrollToContent = a => {
    this.hideNavbar();
    if (a === 0) {
      this.about.current.scrollIntoView({ behavior: "smooth" });
    } else if (a === 1) {
      this.professional.current.scrollIntoView({ behavior: "smooth" });
    } else if (a === 2) {
      this.education.current.scrollIntoView({ behavior: "smooth" });
    } else if (a === 3) {
      this.skills.current.scrollIntoView({ behavior: "smooth" });
    } else if (a === 4) {
      this.projects.current.scrollIntoView({ behavior: "smooth" });
    } else if (a === 5) {
      this.contacts.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  displayNavbar = () => {
    this.setState({ navbarHidden: true });
  };

  hideNavbar = () => {
    this.setState({ navbarHidden: false });
  };

  componentDidMount() {
    this.isMobile();
  }

  render() {
    let mobileScreen = classNames(
      { "screen-web": !this.state.isMobile },
      { "screen-mobile": this.state.isMobile }
    );
    return (
      <body>
        <Navbar
          scrol={this.scrollToContent}
          isMobile={this.state.isMobile}
          navbarHidden={this.state.navbarHidden}
          hideNavbar={this.hideNavbar}
        />
        
        <div
          id="screen"
          className={mobileScreen}
          onClick={this.state.navbarHidden ? this.hideNavbar : null}
        >
          <MobileNavbar
            isMobile={this.state.isMobile}
            displayNavbar={this.displayNavbar}
          />
          <Home />
          <About ref={this.about} />
          <Professional ref={this.professional} />
          <Education ref={this.education} />
          <Skills ref={this.skills} />
          <Projects ref={this.projects} />
          <Contacts ref={this.contacts} />
        </div>
      </body>
    );
  }
}

export default App;
