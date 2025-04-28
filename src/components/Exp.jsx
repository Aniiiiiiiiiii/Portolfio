import React from "react";

export default function Exp() {
  const exps = [
    {
      head: "Krold IT Solutions",
      time: "September 2024 - Present",
      role: "Front-End Developer",
      jobDescription: `
        <p>Working closely with cross-functional teams including designers, backend developers, and project managers to build modern and dynamic web applications. Specialized in developing responsive UIs using <b>React.js</b> and integrating dynamic features through <b>CodeIgniter</b>. Actively contributing to client projects, ensuring high-quality delivery and seamless user experiences.</p>
        <ul>
          <li>Developed dynamic and responsive web applications using <b>React.js</b> and <b>CodeIgniter</b>.</li>
          <li>Collaborated with designers and backend teams to integrate <b>dynamic APIs</b> and deliver complete solutions.</li>
          <li>Built websites for <b>international clients</b>, focusing on clean design, functionality, and performance.</li>
          <li>Implemented user-centric features to improve <b>UX/UI</b> based on project requirements.</li>
          <li>Optimized web applications for <b>speed</b>, <b>scalability</b>, and <b>cross-browser compatibility</b>.</li>
          <li>Participated in Agile development cycles, ensuring timely project delivery and documentation.</li>
        </ul>`
    },
    {
      head: "Technosoft Academy",
      time: "February 2024 - July 2024",
      role: "Web Developer",
      jobDescription: `
        <p>At Technosoft Academy, I worked as a Web Developer Intern, where I contributed to the development of Internship4you.com, a full-stack web application. I was responsible for building dynamic user interfaces using Bootstrap and Javascript and integrating them with the backend developed in Core PHP. Alongside this, I also worked on multiple UI-based projects, focusing on creating responsive and user-friendly designs.</p>
        <ul>
          <li>Developed the front-end for Internship4you.com, ensuring seamless user interactions.</li>
          <li>Integrated dynamic features and forms by connecting AJAX with PHP.</li>
          <li>Built responsive and mobile-friendly user interfaces for client-facing websites.</li>
          <li>Worked on multiple UI-only projects, enhancing design, usability, and responsiveness.</li>
          <li>Participated in Agile workflows, daily stand-ups, and code reviews to deliver high-quality output on time.</li>
        </ul>`
    }
  ];

  const ExpBox = ({ head, time, jobDescription, role }) => {
    return (
      <div className="col-12 d-flex flex-col mb-5 justify-content-center align-items-center">
        <div className="exp-box w-100 py-3 px-4">
          <div className="row justify-content-between">
            <h4 className="text-white fw-bold d-inline w-fit">{head}</h4>
            <p className="text-white d-inline w-fit">{time}</p>
          </div>
          <h5 className="text-white fw-bold d-inline w-fit">{role}</h5>
          <p
            className="text-white text-justify nunito-exlight"
            dangerouslySetInnerHTML={{ __html: jobDescription }}
          />
        </div>
      </div>
    );
  };

  return (
    <section className="container-fluid mt-5 px-0 bg-dark">
      <div className="container pt-5">
        <h2 className="text-white text-center mb-5 nunito-bold sec-head">My Experience</h2>
        <div className="row">
          {exps.map((exp, index) => (
            <ExpBox
              key={index}
              head={exp.head}
              time={exp.time}
              role={exp.role}
              jobDescription={exp.jobDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
