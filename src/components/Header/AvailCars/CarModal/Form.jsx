import React from 'react';
import styles from './MyModal.module.css';

const Form = ({ name, phone, email, onNameChange, onPhoneChange, onEmailChange, onSubmit, isFormValid }) => (
  <form className={styles.modalForm} onSubmit={onSubmit}>
    <div className={styles.formGroup}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        pattern="[A-Za-zА-Яа-яЁё\s]*"
        title="Please enter only letters."
        required
      />
    </div>
    <div className={styles.formGroup}>
      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => onPhoneChange(e.target.value)}
        pattern="[0-9]*"
        title="Please enter only digits."
        required
      />
    </div>
    <div className={styles.formGroup}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        required
      />
    </div>
    <div className={styles.formButtons}>
      <button
        className={styles.modalButton}
        type="submit"
        disabled={!isFormValid}
      >
        Confirm
      </button>
    </div>
  </form>
);

export default Form;
