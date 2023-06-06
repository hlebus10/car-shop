import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import styles from './AvailCars.module.css';
import MyModal from './CarModal/MyModal';

const Cart = ({ cartItems, handleRemoveItem, handleCheckout }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const formattedPrice = (price) =>
    price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleOrder = () => {
    if (cartItems.length === 0) {
      showOrderAlert('Your cart is empty.', 'warning');
    } else {
      setShowModal(true);
    }
  };

  const showOrderAlert = (message, variant) => {
    setAlertMessage(message);
    setAlertVariant(variant);
    setShowAlert(true);

    if (cartItems.length === 0) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
  
      return () => {
        clearTimeout(timer);
      };
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Cart</h2>
      {cartItems.length === 0 ? (
        <p className={styles.emptyCart}>Add the items you like to your shopping cart.</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartItems.map((item) => (
              <li key={item.cartItemId} className={styles.cartItem}>
                <div className={styles.cartName}>{item.name}</div>
                <div className={styles.cartPrice}>{formattedPrice(item.price)}</div>
                <button
                  className={styles.removeButton}
                  onClick={() => handleRemoveItem(item.cartItemId)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <p className={styles.totalPrice}>Итого: {formattedPrice(totalPrice)}</p>
        </>
      )}
      <Button className={styles.checkoutButton} onClick={handleOrder}>
        Order
      </Button>
      <Alert
        variant={alertVariant}
        show={showAlert}
        onClose={handleAlertClose}
        className={`${styles.alert} ${
          alertVariant === 'success' ? styles.successAlert : styles.warningAlert
        }`}
        transition={null}
      >
        {alertMessage}
      </Alert>
      {showModal && (
        <MyModal
          handleModalClose={handleModalClose}
          handleCheckout={handleCheckout}
        />
      )}
    </div>
  );
};

export default Cart;
