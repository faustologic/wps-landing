import React, { Component } from "react";
import "./body.css";
import Content from "./Content/content";

class Body extends Component {
  render() {
    return (
      <div className="body">
        <Content />
      </div>
    );
  }
}

export default Body;
