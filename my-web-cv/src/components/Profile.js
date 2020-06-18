import React, { Component } from "react";
import ImgProfile from ".././cv2.jpg";

export default class Profile extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img className="activator" src={ImgProfile} alt="Duc Anh Tai" />
        </div>
      </div>
    );
  }
}
