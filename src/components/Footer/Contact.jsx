import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as FacebookIcon } from './icons/facebook.svg';
import { ReactComponent as TwitterIcon } from './icons/twitter.svg';
import { ReactComponent as InstagramIcon } from './icons/instagram.svg';

export default function ContactPage() {
  return (
    <div>
      <h1 className={styles.pageTitle}>Contact Us</h1>
      <div className={styles.contactContainer}>
      <div>
        <h3 className={styles.contactH3}>Auto House</h3>
          <p className={styles.contactText}>Address: 123 Street, Moscow, Russia</p>
          <p className={styles.contactText}>Phone: <a href="tel:1234567890">123-456-7890</a></p>
          <p className={styles.contactText}>Email: <a href="mailto:info@example.com">info@example.com</a></p>
      </div>
      <div className={styles.contactH3}>
        <h3>Business Hours:</h3>
        <p className={styles.contactText}>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p className={styles.contactText}>Saturday - Sunday: Closed</p>
      </div>
      <div>
      <h3 className={styles.contactH3}>Follow Us on Social Media:</h3>
      <ul className={styles.socialMediaLinks}>
        <li>
          <a href="https://www.instagram.com/example">
            <InstagramIcon className={styles.icon} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/example">
            <FacebookIcon className={styles.icon} />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/example">
            <TwitterIcon className={styles.icon} />
          </a>
        </li>
      </ul>
    </div>
      </div>
    </div>
  );
}
