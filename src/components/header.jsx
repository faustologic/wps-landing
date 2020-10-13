import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="header__img" src="./assets/header_image.png" alt="" />
      </div>
    );
  }
}

export default Header;
