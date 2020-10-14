import React, { Component, Fragment } from "react";
import "./content.css";
import headerImg from '../../assets/header_image.png';
import footballImg from '../../assets/Hero_Image_1-2.png';

class Content extends Component {
  handlerSendEmail = () => {
    console.log("Email Sent!");
  };

  render() {
    return (
      <Fragment>
        <div className="content__header" >
          <img
            className="content__img"
            src={headerImg}
            alt="header"
          />
        </div>
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
            <img
              className="content__img"
              src={footballImg}
              alt=""
            />
          </div>
          {/* <div className="content__separator"></div> */}
        </div>
        <div className="content__footer" >
          
        </div>
      </Fragment>
    );
  }
}

export default Content;
