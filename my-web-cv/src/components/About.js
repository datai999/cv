import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h6 className="mt-bottom">
                <strong>ABOUT ME</strong>
            </h6>
            <p className="grey-text">
                I have good adaptability, 
                bring high spirit and responsibility 
                at work with my passion for code. 
                I hope to have a suitable intern 
                position for myself in the near future.
            </p>
        </div>
        <div className="card-action">
            <div className="row mt">
                <div className="col s12 m6 16 x16">
                    <h6><strong>PERSONAL INFO</strong></h6>
                    <p><strong>Address: </strong>Thu Duc Dist, HCM City</p>
                    <p><strong>Phone: </strong>0905 345670</p>
                    <p><strong>Email: </strong>tai.nguyen.cse.datai@hcmut.edu.vn</p>
                </div>
                <div className="col s12 m6 16 x16">
                    <h6><strong>PROFESSIONAL SKILL</strong></h6>
                    <p><strong>Program language: </strong>Java, Python, C#</p>
                    <p><strong>Database: </strong>MySQL, SQLServer, Firebase</p>
                    <p><strong>English: </strong>Read, Write</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
