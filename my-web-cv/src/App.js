import React from "react";
import "./App.css";
// import "materialize-css/dist/css/materialize.min.css";
// import "materialize-css/dist/js/materialize.min.js";
// import logo from "./logo.svg"

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home.js";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/cv" component={Home} />
      </>
    </Router>
  );
}

export default App;
