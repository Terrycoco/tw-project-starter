//ModalPortal is a HOC to wrap any modal in a function that will create it in the DOM
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function ModalPortal({ show, onClose, children }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? <div>{children}</div> : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      <div>{modalContent}</div>,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

export default ModalPortal;
