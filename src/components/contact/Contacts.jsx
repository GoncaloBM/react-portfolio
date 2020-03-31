import React, { useState } from "react";
import { Contact } from "./Contact";
import githublogo from "../projects/images/Github.png";
import maillogo from "./images/Mail.png";
import linkedinlogo from "./images/Linkedin.png";
import "./Contacts.css";

export const Contacts = React.forwardRef((props, ref) => {
  const [contacts, setContact] = useState([
    { name: "mail", link: "goncalobeiraodemira@gmail.com", image: maillogo },
    { name: "github", link: "https://github.com/GoncaloBM", image: githublogo },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/goncalomira",
      image: linkedinlogo
    }
  ]);

  return (
    <div id="contacts-section" ref={ref}>
      <div className="section-title">
        <div className="separator-text">Contacts</div>
      </div>
      <div id="contacts-content">
        {contacts.map((contact, index) => {
          return (
            <Contact
              link={contacts[index].link}
              image={contacts[index].image}
              name={contacts[index].name}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
});
