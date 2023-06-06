import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles['footer-container']}>
        <Row className={styles['footer-parts']}>
          <Col className={styles['footer-left']} md={6}>
            <h4 className={styles.footerTitle}>Auto House</h4>
            <p className={styles.footerAddress}>Address: 123 Street, Moscow, Russia</p>
            <p className={styles.footerContact}>Phone: <a href="tel:1234567890">123-456-7890</a></p>
            <p className={styles.footerContact}>Email: <a href="mailto:info@example.com">info@example.com</a></p>
          </Col>
          <Col md={6}>
            <h4 className={styles.footerTitle}>Links</h4>
            <ul className={styles.footerLinks}>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/available-cars">Products</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
