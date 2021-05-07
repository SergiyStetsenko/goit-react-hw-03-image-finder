import React from "react";
import styles from '../styles.module.css';
const Modal = ({ closeModal, src, tags }) => {
  return(
    <div className={styles.Overlay} onClick={closeModal}>
      <div className={styles.Modal}>
        <img src={src} alt={tags} />
      </div>
    </div>
  );
};

export default Modal;