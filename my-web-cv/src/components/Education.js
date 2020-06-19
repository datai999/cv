import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EDUCATION</strong>
          </h6>
          <div className="row mt-top">
            <div className="col s6">
              <p>
                <strong>University: </strong>Ho Chi Minh University of
                Technology
              </p>
              <p>
                <strong>Major: </strong>Computer Science
              </p>
              <p>
                <strong>GPA: </strong>6.96/10
              </p>
            </div>
            <div className="col s6">
              <p>
                <strong>Will graduate: </strong>MAR 2021
              </p>
              <p>
                <strong>Academic Progress: </strong>
              </p>
              <div className="progress grey">
                <div
                  className="determinate blue"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
