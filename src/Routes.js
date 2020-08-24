import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./Pages/About/About";
import Resume from "./Pages/Resume/Resume";
import Project from "./Pages/Project/Project";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";

export default function Routes() {
  return (
    <div>
      <Router>
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
