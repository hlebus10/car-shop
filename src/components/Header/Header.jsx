import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const location = useLocation();

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles['header-logo']}>
          <Link to='/'><img className={styles['logo-img']} src="https://cdn.svgporn.com/logos/create-react-app.svg" alt="" /></Link>
        </div>
        <div className={styles['header-menu']}>
          <ul className={styles['menu-list']}>
            <li className={styles['menu-elem']}>
              <Link to="/" className={location.pathname === '/' ? styles.active : ''}>Main</Link>
            </li>
            <li className={styles['menu-elem']}>
              <Link to="/available-cars" className={location.pathname === '/available-cars' ? styles.active : ''}>Available cars</Link>
            </li>
            <li className={styles['menu-elem']}>
              <Link to="/dealers" className={location.pathname === '/dealers' ? styles.active : ''}>Dealers</Link>
            </li>
            <li className={styles['menu-elem']}>
              <Link to="/about-us" className={location.pathname === '/about-us' ? styles.active : ''}>Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
