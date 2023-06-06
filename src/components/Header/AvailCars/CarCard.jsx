import React, { useState, useMemo } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import styles from './AvailCars.module.css';
import { colorSwatches } from './colorSwatches';

const CarCard = ({ car, addToCart }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [carPrice, setCarPrice] = useState(car.price);

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const handlePackageSelection = (e) => {
    setSelectedPackage(e.target.value);

    const packagePrice = parseInt(e.target.value);
    setCarPrice(car.price + packagePrice);
  };

  const handleAddToCart = () => {
    const selectedCar = {
      ...car,
      color: selectedColor,
      package: selectedPackage,
      price: carPrice,
    };

    addToCart(selectedCar);
  };

  const colorSwatchesMemoized = useMemo(() => colorSwatches, []);

  return (
    <Card className={styles['carCard']}>
      <Card.Img variant="top" src={car.image} className={styles['car-image']} />
      <Card.Body>
        <Card.Title className={styles['card-title']}>{car.name}</Card.Title>
        <Card.Text className={styles['card-text']}>
          Price: <span className={`${styles['price']} ${styles['animatedPrice']}`}>${carPrice}</span>
        </Card.Text>
        <Card.Text className={styles['card-text']}>
          Color:
        </Card.Text>
          <div className={styles['colorSwatches']}>
            {colorSwatchesMemoized.map((swatch) => (
              <div
                key={swatch.id}
                className={`${styles['colorSwatch']} ${
                  selectedColor === swatch.color ? styles['selected'] : ''
                }`}
                style={{ backgroundColor: swatch.color }}
                onClick={() => handleColorSelection(swatch.color)}
              ></div>
            ))}
          </div>
        <Card.Text className={styles['card-text']}>
          Package:
          <Form.Select className={styles['card-select']} defaultValue={selectedPackage} onChange={handlePackageSelection}>
            <option value="0">Stock</option>
            <option value="2000">Classic (+$2000)</option>
            <option value="5000">Comfort (+$5000)</option>
            <option value="10000">Luxe (+$10000)</option>
            <option value="15000">Premium (+$15000)</option>
          </Form.Select>
        </Card.Text>
        <div className={styles['card-btn-container']}>
          <Button className={styles['card-btn']} variant="primary" onClick={handleAddToCart}>
            Add to cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CarCard;
