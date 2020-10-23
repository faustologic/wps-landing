import React, { Component } from "react";
import "./newsletterFooter.css";

class NewsletterFooter extends Component {
  state = {
    email: "",
  };
  handlerSendEmail = () => {
    console.log("Email Send!");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: this.state.email }),
    };
    fetch("http://localhost:3001/addNewSuscriber", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));
  };

  setEmail = (param) => {
    this.setState({ email: param });
  };

  render() {
    return (
      <div className="newsletterFooter">
        <div className="newsletterFooter__form">
          <input
            className="newsletterFooter__input"
            text="email"
            value={this.state.email}
            onChange={(e) => this.setEmail(e.target.value)}
            placeholder="Ingresa tu correo"
            required
          />
          <button
            className="newsletterFooter__btn"
            onClick={this.handlerSendEmail}
          >
            AVÍSAME
          </button>
        </div>
      </div>
    );
  }
}

export default NewsletterFooter;
