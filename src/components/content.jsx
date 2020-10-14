import React, { Component } from "react";
import "./content.css";

class Content extends Component {
  handlerSendEmail = () => {
    console.log("Email Sent!");
  };

  render() {
    return (
      <div className="content">
        <div className="content__left">
          <small>La Excelencia del Futbol Mundial</small>
          <h2>En la Palma de tu Mano.</h2>
          <input text="email" placeholder="Ingresa tu Email" />
          <button className="btn btn-danger" onClick={this.handlerSendEmail}>
            Avísame!
          </button>
        </div>
        <div className="content__right">
          <h1>Imagen</h1>
          {/* <img
            className="content__img"
            src="./assets/hero_Image_1-2.png"
            alt=""
          /> */}
        </div>
        <div className="content__separator"></div>
      </div>
    );
  }
}

export default Content;
