import ModalPortal from "./ModalPortal";

function Modal({ show, onClose, title, body }) {
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

export default Modal;
