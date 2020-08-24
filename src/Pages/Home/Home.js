import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>My</h1>
      <h1 className="portfolio">Portfolio</h1>

      <div class="vertical">
        <div className="skills">
          <p>Full stack Developer</p>
          <p>UX/UI Designer</p>
          <p>Photographer</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
