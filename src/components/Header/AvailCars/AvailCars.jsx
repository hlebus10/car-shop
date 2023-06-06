import React, { useState } from 'react';
import CarCard from './CarCard';
import carData from './carData';
import styles from './AvailCars.module.css';
import Cart from './Cart';

const AvailCars = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (selectedCar) => {
    const cartItemId = Date.now();
    const updatedCar = { ...selectedCar, cartItemId };
    setCartItems([...cartItems, updatedCar]);
  };

  const handleRemoveItem = (cartItemId) => {
    const updatedCartItems = cartItems.filter((item) => item.cartItemId !== cartItemId);
    setCartItems(updatedCartItems);
  };

  const handleCheckout = () => {
    setCartItems([]);
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles['container']}>
      <h1 className={styles['cars-h1']}>
        You can get acquainted with the model range of cars that we have in stock and choose the one that suits you:
      </h1>
      <Cart cartItems={cartItems} handleRemoveItem={handleRemoveItem} handleCheckout={handleCheckout} />
      <div className={styles['car-wrapper']}>
        {carData.map((car) => (
          <CarCard key={car.id} car={car} addToCart={addToCart} />
        ))}
      </div>
      <button className={styles['scroll-top']} onClick={handleScrollTop}>
        ↑
      </button>
      <h3 className={styles['cars-h3']}>
      You can also come to our showroom and personally look at the proposed range of cars. See where we are on the  <a className={styles['cars-dealers']} href="/dealers">maps</a>.
      </h3>

    </div>
  );
};

export default AvailCars;
