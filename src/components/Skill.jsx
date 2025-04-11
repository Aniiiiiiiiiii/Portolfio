export default function Skill() {
 
  const skills = [
    { text: "HTML5" },
    { text: "CSS3" },
    { text: "JAVASCRIPT" },
    { text: "BOOTSTRAP" },
    { text: "PHP" },
    { text: "CODEIGNITER" },
    { text: "REACT" },
    { text: "MYSQL" },
    
  ];

 
  const SkillBox = ({ icon, text }) => {
    return (
      <div className="col-6 col-sm-4 col-lg-3 d-flex flex-col mb-5 justify-content-center align-items-center">
        <div className="skill-box d-flex justify-content-center align-items-center" >
          {/* <img src={icon} alt={text} className="skill-box-icon" /> */}
          <p>{text}</p>
        </div>
      </div>
    );
  };

  
  return (
    <>
      <section className="container mt-5" id="skill">
        <h2 className="mb-4 text-center nunito-bold sec-head">My Skills</h2>
        <div className="row ">
            {skills.map((skill, index) => (
              <SkillBox key={index} icon={skill.icon} text={skill.text} />
            ))}
        </div>
      </section>
    </>
  );
}
