import ModalPortal from "./ModalPortal";

function Modal({ show, onClose, title, body }) {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? <div>{children}</div> : null;

  return <ModalPortal show={props.show}>{title}</ModalPortal>;
}

export default Modal;
