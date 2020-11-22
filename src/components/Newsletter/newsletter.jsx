import React, { useState } from "react";
import axios from "axios";
import { apiUrl } from "../../config/app";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";


import "./newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState({ open: false });
  const [message, setMessage] = useState("");
  const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
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
  const openModal = () => {
    return setModal({
      open: !modal.open,
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!handleValidation()) {
      setMessage(error);
      openModal();
      return setEmail("");
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
        setMessage(
          `¡${response.data.email} ha sido registrado de manera exitosa!`
        );
        openModal();
        setEmail("");
      })
      .catch((err) => {
        if (err.response.data.message.includes("unique")) {
          setMessage("¡Este email ya existe en nuestra base de datos!");
          openModal();
          setEmail("");
        }
      });
  };

  return (
    <div>
      <div className="newsletter__modal">
        <Modal isOpen={modal.open} style={modalStyles}>
          <ModalHeader>Notificacíon</ModalHeader>
          <ModalBody>{message}</ModalBody>
          <ModalFooter>
            <Button className="newsletter__btn_close" onClick={openModal}>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
      </div>

      <div className="newsletter__form">
        <input
          type="text"
          text="email"
          className="newsletter__input"
          value={email}
          placeholder="Ingrese su email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="submit"
          className="newsletter__btn"
          value="AVISAME"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Newsletter;
