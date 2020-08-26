import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <div className="main-container">
      <h1>Resume</h1>
      <div>
        <p>Education</p>
        <ul>
          <li>Lighthouse Labs</li>
          <div className="education-container">
            <p>
              Fullstack Web Developer Diploma <span>&bull;</span>
              <em> April2020 </em>
            </p>
          </div>
          <li>IndiaOptions</li>
          <p>
            Software Automation Diploma <span>&bull;</span>
            <em> December2016 </em>
          </p>
          <li>Centennial college</li>
          <p>
            Energy Systems Engineering <span>&bull;</span>
            <em> April2016 </em>
          </p>
          <li>Calicut University</li>
          <p>
            Electrical and Computer Engineering <span>&bull;</span>
            <em> April2013 </em>
          </p>
        </ul>
      </div>
      <div>
        <p>Experience</p>
        <ul>
          <li>MedEssist</li>
          <p>
            Junior Full Stack Developer <span>&bull;</span>
            <em> July2020 to Present </em>
          </p>
          <li>Orbixlab</li>
          <p>
            Front End Developer <span>&bull;</span>
            <em> April2020 to Present </em>
          </p>
          <li>Bell</li>
          <p>
            Telecommunications Technician <span>&bull;</span>
            <em> May2017 to December2019 </em>
          </p>
        </ul>
      </div>
      <div>
        <p>skills</p>
        <ul>
          <li>Back end</li>
          <div className="vertical-container">
            <div className="vertical">
              <div className="skills">
                <p>Node.js</p>
                <p>UX/UI Designer</p>
                <p>Photographer</p>
              </div>
            </div>
          </div>
          <li>Front end</li>
          <li>Frameworks</li>
          <li>Database</li>
          <li>Automation Frameworks</li>
          <li>Design</li>
          <li>Other tools</li>
          <li>OS</li>
          <li>Version control</li>
        </ul>
      </div>

      <div className="education-container">
        <p>
          Fullstack Web Developer Diploma <span>&bull;</span>
          <em> April2020 </em>
        </p>
      </div>

      <div className="work-container">
        <h1>Work</h1>
        <h1>Bell</h1>
        <p>
          Telecommunication technician <span>&bull;</span>
          <em> May2020 </em>
        </p>
      </div>
      <div className="skill-container"></div>
      <h1>Skills</h1>
    </div>
  );
};
export default Resume;
