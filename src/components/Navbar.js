import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const handleClick = () => {
    const element = document.body;
    element.classList.toggle("dark-mode");
  };
  return (
    <nav className="navbar">
      <div>
        <Link className="Links" to="/">
          MEGHANATH PONOLY
        </Link>
      </div>
      <div className="pages">
        <Link className="Links" to="/about">
          ABOUT
        </Link>

        <Link className="Links" to="/resume">
          RESUME
        </Link>

        <Link className="Links" to="/project">
          PROJECTS
        </Link>

        <Link className="Links" to="/contact">
          CONTACT
        </Link>
        <button onClick={handleClick}>mode</button>
      </div>
    </nav>
  );
}
