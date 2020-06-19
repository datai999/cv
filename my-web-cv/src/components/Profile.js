import React, { Component } from "react";
import ImgProfile from ".././cv2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";

export default class Profile extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img className="activator" src={ImgProfile} alt="Duc Anh Tai" />
          <div className="activator btn-floating halfway-fab  waves-light blue">
            <i className="material-icons right">more_vert</i>
          </div>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Đức Anh Tài
          </span>
          <p>Backend Java web developer</p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Contact me<i className="material-icons right">close</i>
          </span>
          <ul className="collection">
            <li className="collection-item">
              <a href="https://www.facebook.com/datai99/">Facebook</a>
            </li>
            <li className="collection-item">
              <a href="https://github.com/datai999">Github</a>
            </li>
            <li className="collection-item">
              <FontAwesomeIcon icon={faPhone} />
              0905 345670
            </li>
            <li className="collection-item">
              <FontAwesomeIcon icon={faMailBulk} />
              tai.nguyen.cse.datai @hcmut.edu.vn
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
