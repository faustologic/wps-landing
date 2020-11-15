import React, { Component, Fragment } from "react";
import "./contentUpdate.css";
import logo from "../../assets/logo.png";
import Newsletter from "../Newsletter/newsletter";
import SocialIcons from "../socialIcons/socialIcons";
import { ToastProvider } from "react-toast-notifications";

class Content extends Component {
  render() {
    return (
      <Fragment>
        <div className="content">
          <div className="content__logo">
            <img className="content__img" src={logo} alt="" />
          </div>
          <div className="content__newsletter">
            <ToastProvider>
              <Newsletter />
            </ToastProvider>
            <p>
              Regístrate usando tu correo electrónico o conéctate a nuestras
              redes sociales para ser el primero en enterarte.
            </p>
            <SocialIcons />
          </div>
          <div className="content__allRights">
            <small>
              Todos los derechos reservados. World Soccer Platform, Inc. 2020
            </small>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Content;
