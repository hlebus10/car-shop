import React from 'react';
import styles from './MyModal.module.css';

const OrderConfirmation = ({ onClose }) => (
  <div className={styles.modalContent}>
    <p className={styles['modal-confirm-text']}>Thank for your order! Our team will contact you soon to confirm your order.</p>
    <button className={styles.modalButton} onClick={onClose}>
      Close
    </button>
  </div>
);

export default OrderConfirmation;
