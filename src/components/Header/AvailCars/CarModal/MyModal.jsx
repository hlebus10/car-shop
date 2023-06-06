import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import CloseButton from './CloseButton';
import OrderConfirmation from './OrderConfirmation';
import Form from './Form';
import styles from './MyModal.module.css';

const MyModal = ({ handleModalClose, handleCheckout }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [name, phone, email]);

  const validateForm = () => {
    const nameRegex = /^[A-Za-zА-Яа-яЁё\s]*$/;
    const phoneRegex = /^[0-9]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isNameValid = nameRegex.test(name);
    const isPhoneValid = phoneRegex.test(phone);
    const isEmailValid = emailRegex.test(email);

    return isNameValid && isPhoneValid && isEmailValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      setIsOrderConfirmed(true);
      handleCheckout(); 
    }
  };

  return (
    <Modal isOpen={true} onRequestClose={handleModalClose} style={customStyles}>
      <CloseButton onClick={handleModalClose} />
      <h2 className={styles.modalTitle}>Order Confirmation</h2>
      {isOrderConfirmed ? (
        <OrderConfirmation onClose={handleModalClose} />
      ) : (
        <Form
          name={name}
          phone={phone}
          email={email}
          onNameChange={setName}
          onPhoneChange={setPhone}
          onEmailChange={setEmail}
          onSubmit={handleSubmit}
          isFormValid={isFormValid}
        />
      )}
    </Modal>
  );
};

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    width: '600px',
    height: '400px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fff',
    borderRadius: '8px',
    padding: '20px',
  },
};

export default MyModal;
