import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";
import PaymentForm from "../Cart/PaymentForm";
const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-30 bg-black bg-opacity-75"
      onClick={props.onClose}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-[10vh] sm:top-[20vh] left-1/2 -translate-x-1/2 w-11/12  sm:w-1/2 z-40 bg-white overflow-hidden p-10 rounded">
      <Button
        className="border-none absolute -right-2 top-0"
        onClick={props.onClose}
      >
        <FontAwesomeIcon
          icon={faCircleXmark}
          style={{ color: "#4361EE" }}
          size="2xl"
        />
      </Button>
      <PaymentForm />
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};
export default Modal;
