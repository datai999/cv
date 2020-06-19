import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EXPERIENCE</strong>
          </h6>

          <div className="card-action">
            <p>
              <strong>Happy Lunch </strong>(2019)
            </p>
            <p>
              <strong>Description: </strong>- App Android giúp khách hàng đặt
              món ăn. - App Andorid giúp nhân viên làm việc.
            </p>
            <p>
              <strong>Team size: </strong>5
            </p>
            <p>
              <strong>My responsibilities: </strong>- Quản lí dự án (github,
              timeline, nhân sự) - Thiết kế giao diện (xml, java) - Truy xuất DB
              (firebase) - Hiện thực chức năng - Demo sản phẩm
              (bit.ly/happylunch-youtube)
            </p>
            <p>
              <strong>Technologies used: </strong>- Java (Spring), Python -
              MySQL - FireBase
            </p>
          </div>

          <div className="card-action">
            <p>
              <strong>Iot Platform </strong>(2020-Now)
            </p>
            <p>
              <strong>Description: </strong>- Web service hiển thị thông tin
              sensor - Web serviec điều khiển sensor
            </p>
            <p>
              <strong>Team size: </strong>5
            </p>
            <p>
              <strong>My responsibilities: </strong>- Thiết kế DB - Query DB -
              Tạo API
            </p>
            <p>
              <strong>Technologies used: </strong>- Github - Java(Spring), mySQL
              - Fire Base - ReactJS
            </p>
          </div>
        </div>
      </div>
    );
  }
}
