import React, { useState } from "react";
import axios from "axios";
import { apiUrl } from "../../config/app";
import { useToasts } from "react-toast-notifications";
import "./newsletterFooter.css";

const NewsletterFooter = () => {
  const addToast = useToasts().addToast;
  const [email, setEmail] = useState("");
  let error = "";
  const handleValidation = () => {
    let formIsValid = true;
    if (email.length === 0) {
      formIsValid = false;
      error = "¡Por favor, ingrese su email!";
    }
    if (typeof email !== undefined) {
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        error = "¡El email ingresado no es válido!";
      }
    }
    return formIsValid;
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!handleValidation()) {
      return addToast(error, { appearance: "error", autoDismiss: true });
    }
    const data = {
      email: email,
    };

    return axios
      .post(`${apiUrl}/subcriptions`, data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        addToast(
          `¡${response.data.email} ha sido registrado de manera exitosa!`,
          {
            appearance: "success",
            autoDismiss: true,
          }
        );
      })
      .catch((err) => {
        if (err.response.data.message.includes("unique")) {
          addToast("¡Este email ya existe en nuestra base de datos!", {
            appearance: "error",
            autoDismiss: true,
          });
        }
      });
  };
  return (
    <form className="newsletterFooter__form" onSubmit={handleSubmit}>
      <input
        type="text"
        text="email"
        className="newsletterFooter__input"
        value={email}
        placeholder="Ingrese su email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="submit" className="newsletterFooter__btn" value="AVISAME" />
    </form>
  );
};

export default NewsletterFooter;
