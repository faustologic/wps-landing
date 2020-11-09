import React, { Component, Fragment } from "react";
//import "./content.css";
import "./contentUpdate.css";
import footballImg from "../../assets/Hero_image_PNG.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Newsletter from "../Newsletter/newsletter";
import NewsletterFooter from "../NewsletterFooter/newsletterFooter";
import { ToastProvider } from "react-toast-notifications";
class Content extends Component {
  
  render() {

    return (
      <Fragment>
        <div className="content__header"></div>
        <div className="content">
          <div className="content__left">
            <small>La Excelencia del Fútbol Mundial</small>
            <h2>En la Palma de tu Mano.</h2>
            <ToastProvider>
              <Newsletter />
            </ToastProvider>
          </div>
          <div className="content__right">
            <img className="content__img" src={footballImg} alt="" />
          </div>
          {/* <div className="content__separator"></div> */}
        </div>
        <div className="content__footerContainer">
          <div className="content__footer">
            <ToastProvider>
              <NewsletterFooter />
            </ToastProvider>
            <p>
              Regístrate usando tu correo electrónico o conéctate a nuestras
              redes sociales para ser el primero en enterarte.
            </p>
            <div className="content__icons">
              <FontAwesomeIcon icon={["fab", "twitter"]} href="" />
              <FontAwesomeIcon icon={["fab", "instagram"]} href="" />
              <FontAwesomeIcon icon={["fab", "facebook-square"]} href="" />
            </div>
          </div>
        </div>
        <div className="content__allRights">
          <small>
            Todos los derechos reservados. World Soccer Platform, Inc. 2020
          </small>
        </div>
      </Fragment>
    );
  }
}

export default Content;
