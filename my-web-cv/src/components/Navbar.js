import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCopy,
  faIdBadge,
  faGraduationCap,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="light-blue darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                Đức Anh Tài
              </Link>
              <Link to="/" data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </Link>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/">
                    <FontAwesomeIcon icon={faHome} />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/skills">
                    <FontAwesomeIcon icon={faCopy} />
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="/experience">
                    <FontAwesomeIcon icon={faIdBadge} />
                    Experience
                  </Link>
                </li>
                <li>
                  <Link to="/education">
                    <FontAwesomeIcon icon={faGraduationCap} />
                    Education
                  </Link>
                </li>
                <li>
                  <Link to="/portfolios">
                    <FontAwesomeIcon icon={faAddressCard} />
                    Portfolios
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ul className="sidenav" id="slide-out">
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
              Home
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <FontAwesomeIcon icon={faCopy} />
              Skills
            </Link>
          </li>
          <li>
            <Link to="/experience">
              <FontAwesomeIcon icon={faIdBadge} />
              Experience
            </Link>
          </li>
          <li>
            <Link to="/education">
              <FontAwesomeIcon icon={faGraduationCap} />
              Education
            </Link>
          </li>
          <li>
            <Link to="/portfolios">
              <FontAwesomeIcon icon={faAddressCard} />
              Portfolios
            </Link>
          </li>
        </ul>
      </>
    );
  }
}
