import React, { Component } from "react";
import "./newsletter.css";

class Newsletter extends Component {
  handlerSendEmail = () => {
    console.log("Email Send!");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React POST Request Example" }),
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));
  };
  render() {
    return (
      <div className="newsletter">
        <div className="newsletter__form">
          <input
            className="newsletter__input"
            text="email"
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
