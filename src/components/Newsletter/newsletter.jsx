import React, { Component } from "react";
import "./newsletter.css";

class Newsletter extends Component {
  state = {
    email: "",
  };

  handlerSendEmail = () => {
    console.log("Email Send!");
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email: this.state.email }),
    };
    fetch(
      "http://localhost:3001/addNewSuscriber",
      requestOptions
    ).then((response) => console.log(response.json()));
  };

  setEmail = (param) => {
    this.setState({
      email: param,
    });
  };

  render() {
    return (
      <div className="newsletter">
        <div className="newsletter__form">
          <input
            className="newsletter__input"
            text="email"
            value={this.state.email}
            onChange={(e) => this.setEmail(e.target.value)}
            placeholder="Ingresa tu correo"
            required
          />
          <button className="newsletter__btn" onClick={this.handlerSendEmail}>
            AVÍSAME
          </button>
        </div>
      </div>
    );
  }
}

export default Newsletter;
