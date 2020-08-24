import React from "react";

import { hot } from "react-hot-loader";
import "./App.css";

import Store from "./context/Store";
import Routes from "./Routes";

// import { UserContext } from "./context/UserContext";

const App = () => {
  return (
    <Store>
      <div className="App">
        <Routes />
      </div>
    </Store>
  );
};

export default hot(module)(App);
