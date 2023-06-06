import React from 'react';
import CloseIcon from './close.svg';
import styles from './MyModal.module.css';

const CloseButton = ({ onClick }) => (
  <button className={styles.modalCloseBtn} onClick={onClick}>
    <img src={CloseIcon} alt="Close" />
  </button>
);

export default CloseButton;
