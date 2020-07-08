import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { hot } from "react-hot-loader";
import "./App.css";
import About from './Pages/About/About';
import Resume from './Pages/Resume/Resume';
import Project from './Pages/Project/Project'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home';
const App = () => {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/project">Projects</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </nav>

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
      </div>
    </Router>
    </div>
  );
};

export default hot(module)(App);
