import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Profile from "./Profile.js";
import About from "./About.js";
import Education from "./Education.js";
import Experience from "./Experience.js";

export default class Home extends Component {
  render() {
    return (
      <section>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col s12 m4 l3">
              <Profile />
            </div>
            <div className="col s12 m8 l9">
              <About />
              <Education />
              <Experience />
              {/* <Skills />
              
              <Education />
              <Portfolios /> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
