import React, { Component, Fragment } from "react";
import "./content.css";
import headerImg from "../../assets/header_image.png";
import footballImg from "../../assets/Hero_Image_1-2.png";

class Content extends Component {
  handlerSendEmail = () => {
    console.log("Email Sent!");
  };

  render() {
    return (
      <Fragment>
        <div className="content__header">
          <img className="content__img" src={headerImg} alt="header" />
        </div>
        <div className="content">
          <div className="content__left">
            <small>La Excelencia del Futbol Mundial</small>
            <h2>En la Palma de tu Mano.</h2>
            <input
              className="content__input"
              text="email"
              placeholder="Ingresa tu correo"
            />
            <button className="content__btn" onClick={this.handlerSendEmail}>
              AVÍSAME
            </button>
          </div>
          <div className="content__right">
            <img className="content__img" src={footballImg} alt="" />
          </div>
          {/* <div className="content__separator"></div> */}
        </div>
        <div className="content__footer">
          <p>
            Regístrate usando tu correo electrónico o conéctate a nuestras redes
            sociales para ser el primero en enterarte.
          </p>
          <i className="fab fa-twitter"></i>
        </div>
        <small className="content__allRights">
          Todos los derechos reservados. World Soccer Platform, Inc. 2020
        </small>
      </Fragment>
    );
  }
}

export default Content;
