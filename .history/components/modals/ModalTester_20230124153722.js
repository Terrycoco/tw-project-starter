import ModalPortal from "./ModalPortal";

function Modal({ show, onClose, title, body }) {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  return <ModalPortal show={show}>{title}</ModalPortal>;
}

export default Modal;
