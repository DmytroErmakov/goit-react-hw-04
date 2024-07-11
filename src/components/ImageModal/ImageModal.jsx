import React from "react";

import Modal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onRequestClose, image }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className={css.modal}
    overlayClassName={css.overlay}
    ariaHideApp={false}
    shouldCloseOnOverlayClick={true}
  >
    {image && (
      <div className={css.content}>
        <img src={image.urls.regular} alt={image.alt_description} />
        <p>{image.description || image.alt_description}</p>
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
      </div>
    )}
  </Modal>
);


export default ImageModal;
