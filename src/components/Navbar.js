import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
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
      </div>
    </nav>
  );
}
