import React, { useState } from 'react';
import styles from './Dealers.module.css';
import YandexMap from './YandexMap';
import addresses from './addresses';

export default function Dealers() {
  const apiKey = '7f837b19-cfc7-4e80-86a4-eb6acc84d07c';
  const [selectedAddress, setSelectedAddress] = useState('');

  const handleAddressClick = (address) => {
    setSelectedAddress(address);
  };

  return (
    <div className={styles.container}>
      <div className={styles.addressList}>
        <h2 className={styles['dealers-h2']}>Addresses:</h2>
        <ul>
          {addresses.map((address, index) => (
            <li
              className={styles['dealers-addresses']}
              key={index}
              onClick={() => handleAddressClick(address)}
            >
              {address}
            </li>
          ))}
        </ul>
      </div>
          <div className={styles['addressMap']}>
            <YandexMap apiKey={apiKey} addresses={addresses} selectedAddress={selectedAddress} />
          </div>
    </div>
  );
}
