import React, { Component } from "react";
import "./body.css";

class Body extends Component {
  handleMail = () => {
    console.log("My email is send!");
  };

  render() {
    return (
      <div className="body">
        <div className="body__left">
          <div className="body__text">
            <small>La Excelencia del Futbol Mundial</small>
            <h2>En la Palma de tu Mano.</h2>
          </div>
          <div className="body__form">
            <input
              className="body__input"
              type="text"
              placeholder="Ingresa tu Correo"
            />
            <button className="body__btn" onClick={this.handleMail}>
              Avísame
            </button>
          </div>
        </div>
        <div className="body__right"></div>
      </div>
    );
  }
}

export default Body;
