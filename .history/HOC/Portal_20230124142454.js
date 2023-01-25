import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Portal = ({ show, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? <div className="relative">{children}</div> : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("#modal-root")
    );
  } else {
    return null;
  }
};

export default Portal;
