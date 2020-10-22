import React, { Component } from "react";
import "./newsletterFooter.css";

class NewsletterFooter extends Component {
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
      <div className="newsletterFooter">
        <div className="newsletterFooter__form">
          <input
            className="newsletterFooter__input"
            text="email"
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
