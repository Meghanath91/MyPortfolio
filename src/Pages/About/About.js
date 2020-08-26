import React, { useState } from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="image">
        <img
          src="/pictures/profilePic.jpg"
          alt="meghanath-picture"
          width="200px"
        />
      </div>
      <div className="bio">
        <h1 className="title">A bit about my journey</h1>
        <p>
          "I am a Full Stack Web Developer with a strong interest in projects
          requiring conceptual and analytical thinking. I enjoy designing and
          developing web applications with end users in mind. I'm passionate
          about technology and art. I love everything that has to do with web
          development. I prefer to keep learning, continue challenging myself,
          and do interesting things that matter. Moreover I am a professional
          photographer and graphic designer, so I wanted to combine these
          experiences together and create multidimensional experiences for
          users."
        </p>
      </div>
    </div>
  );
};
export default About;
