import React from "react";

const Resume = () => {
  return (
    <div className="main-container">
      <h1>Resume</h1>
      <div className="education-container">
        <h1>Education</h1>
        <h1>Lighthouse Labs</h1>
        <p>
          Fullstack Web Developer Diploma <span>&bull;</span>
          <em> April2020 </em>
        </p>
        <p>
          It was an intense learning experience. I used to code almost 15 hours
          per day during my bootcamp. We did 2 projects from scratch our own and
          5 in-class projects. This project experience helped me to sharpen my
          skills in React, Node.js, HTML, CSS, PostgreSQL etc. Moreover we get
          hands on experience on testing frameworks as Selenium, Jest, Chai,
          Cypress.
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
      <ul >
        <li>Git</li>
        <li>HTML</li>
      </ul>
    </div>
  );
};
export default Resume;
