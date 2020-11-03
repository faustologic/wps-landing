import React, { useState } from "react";
import axios from "axios";
import { apiUrl } from "../../config/app";
import { useToasts } from "react-toast-notifications";
import "./newsletter.css";

const Newsletter = () => {
  const addToast = useToasts().addToast;
  const [email, setEmail] = useState("");
  let error = "";
  const handleValidation = () => {
    let formIsValid = true;
    if (email.length === 0) {
      formIsValid = false;
      error = "el email es requerido";
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
        error = "el email no es valido.";
      }
    }
    return formIsValid;
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!handleValidation()) {
      addToast(error, { appearance: "error", autoDismiss: true });
      return setEmail('')
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
        addToast(`${response.data.email} ha sido registrado exitosamente`, {
          appearance: "success",
          autoDismiss: true,
        });
        setEmail('')
      })
      .catch((err) => {
        if (err.response.data.message.includes('unique')) {
          addToast('el email ya existe en nuestra base de datos', {
            appearance: "error",
            autoDismiss: true,
          });
          setEmail('')
        }
      });

  };
  return (
    <form className="newsletter__form" onSubmit={handleSubmit}>
      <input
        type="text"
        text="email"
        className="newsletter__input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="submit" className="newsletter__btn" value="AVISAME" />
    </form>
  );
};

export default Newsletter;
