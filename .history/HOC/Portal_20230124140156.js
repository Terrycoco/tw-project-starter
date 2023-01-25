import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Portal = ({ show, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.querySelector("#portal"))
    : null;
};

export default Portal;
