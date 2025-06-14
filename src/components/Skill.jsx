// export default function Skill() {
 
//   const skills = [
//     { icon:"../images/html.png", text: "HTML5" },
//     { icon:"../images/css.png", text: "CSS3" },
//     { icon:"../images/js.png", text: "JAVASCRIPT" },
//     { icon:"../images/bootstrap.png", text: "BOOTSTRAP" },
//     { icon:"../images/php.png", text: "PHP" },
//     { icon:"../images/ci.png", text: "CODEIGNITER" },
//     { icon:"../images/react.png", text: "REACT" },
//     { icon:"../images/mysql.png", text: "MYSQL" },
//     { icon:"../images/git.png", text: "GIT" },
//     { icon:"../images/github.png", text: "GITHUB" },
//     { icon:"../images/figma.png", text: "FIGMA" },
    
//   ];

 
//   const SkillBox = ({ icon, text }) => {
//     return (
//       <div className=" col d-flex flex-col mb-5 justify-content-center align-items-center">
//         <div className="skill-box d-flex justify-content-between align-items-center px-3 py-2" >
//           <img src={icon} alt={text} className="skill-box-icon me-2" />
//           <p className="mb-0">{text}</p>
//         </div>
//       </div>
//     );
//   };

  
//   return (
//     <>
//       <section className="container mt-5" id="skill">
//         <h2 className="mb-4 text-center nunito-bold sec-head">My Skills</h2>
//         <div className="row justify-content-center">
//             {skills.map((skill, index) => (
//               <SkillBox key={index} icon={skill.icon} text={skill.text} />
//             ))}
//         </div>
//       </section>
//     </>
//   );
// }


export default function Skill() {
  const skills = [
    { icon: "../images/html.png", text: "HTML5" },
    { icon: "../images/css.png", text: "CSS3" },
    { icon: "../images/js.png", text: "JAVASCRIPT" },
    { icon: "../images/bootstrap.png", text: "BOOTSTRAP" },
    { icon: "../images/php.png", text: "PHP" },
    { icon: "../images/ci.png", text: "CODEIGNITER" },
    { icon: "../images/react.png", text: "REACT" },
    { icon: "../images/mysql.png", text: "MYSQL" },
    { icon: "../images/git.png", text: "GIT" },
    { icon: "../images/github.png", text: "GITHUB" },
    { icon: "../images/figma.png", text: "FIGMA" },
  ];

  const SkillBox = ({ icon, text }) => {
    return (
      <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
        <div className="skill-box p-3 text-center rounded-4 shadow-sm bg-white h-100 border hover-scale">
          <img src={icon} alt={text} className="img-fluid mb-2 skill-icon" style={{ height: "40px" }} />
          <p className="mb-0 fw-semibold small text-uppercase">{text}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="container mt-5" id="skill">
      <h2 className="mb-4 text-center nunito-bold sec-head">My Skills</h2>
      <div className="row justify-content-center">
        {skills.map((skill, index) => (
          <SkillBox key={index} icon={skill.icon} text={skill.text} />
        ))}
      </div>
    </section>
  );
}
