import React, { useState } from "react";
import "../../myCss.css";
import "./Education.css";
import { EducationCard } from "./EducationCard";

export const Education = React.forwardRef((props, ref) => {
  const wildCodeSchool = (
    <>
      <ul>
        <li>Front-End Development</li>
        <li>HTML / CSS</li>
        <li>Javascript</li>
        <li>React.js</li>
        <li>jQuery</li>
      </ul>
      
    </>)
  ;

  const [education, setEducation] = useState([
    {
      name: "Wild Code School - Lisbon",
      title: "Web Developer",
      topics: wildCodeSchool,
      link: "https://www.wildcodeschool.com/pt-PT/campuses/Lisboa"
    },
    {
      name: "Faculdade de Ciências e Tecnologias de Coimbra",
      title: "Master in Production and Mechanical Project",
      topics: "",
      link: "https://www.uc.pt/fctuc/dem"
    },
    {
      name: "Instituto Superior de Engenharia de Coimbra",
      title: "Mechanical Engineering",
      topics: "",
      link: "https://www.isec.pt/pt/instituto/departamentos/dem/"
    },
    {
      name: "Faculdade de Linguas da Uníversiddade de Coimbra",
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
  ]);

  return (
    <div id="education-section" ref={ref}>
      <div className="section-title">
        <div className="separator-text">Education</div>
      </div>
      <div id="education-content">
        {education.map((educations, index) => {
          return (
            <EducationCard
              name={education[index].name}
              title={education[index].title}
              link={education[index].link}
              topics={education[index].topics}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
      })


      // class Education extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       education: [
//         {
//           name: "Wild Code School - Lisbon",
//           title: "Web Developer",
//           topics: this.wildCodeSchool(),
//           link: "https://www.wildcodeschool.com/pt-PT/campuses/Lisboa"
//         },
//         {
//           name: "Faculdade de Ciências e Tecnologias de Coimbra",
//           title: "Master in Production and Mechanical Project",
//           topics: "",
//           link: "https://www.uc.pt/fctuc/dem"
//         },
//         {
//           name: "Instituto Superior de Engenharia de Coimbra",
//           title: "Mechanical Engineering",
//           topics: "",
//           link: "https://www.isec.pt/pt/instituto/departamentos/dem/"
//         },
//         {
//           name: "Faculdade de Linguas da Uníversiddade de Coimbra",
//           title: "German Language",
//           topics: "",
//           link: ""
//         },
//         {
//           name: "Instituto de Linguas, Linguas Cultura, Abrantes",
//           title: "First Certificate in English",
//           topics: "",
//           link: ""
//         }
//       ]
//     };
//   }

//   wildCodeSchool = () => {
//     return (
//       <ul>
//         <li>Front-End Development</li>
//         <li>HTML / CSS</li>
//         <li>Javascript</li>
//         <li>React.js</li>
//         <li>jQuery</li>
//       </ul>
//     );
//   };

//   render() {
//     return (
//       <div id="education-section" ref={this.props.innerRef}>
//         <div className="section-title">
//           <div className="separator-text">Education</div>
//         </div>
//         <div id="education-content">
//           {this.state.education.map((education, index) => {
//             return (
//               <EducationCard
//                 name={this.state.education[index].name}
//                 title={this.state.education[index].title}
//                 link={this.state.education[index].link}
//                 topics={this.state.education[index].topics}
//                 key={index}
//               />
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default React.forwardRef((props, ref) => (
//   <Education innerRef={ref} {...props} />
// ));

