import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

function Modal({ show, onClose, children, title }) {
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
      <div>Hello from modal</div>,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

export default Modal;
