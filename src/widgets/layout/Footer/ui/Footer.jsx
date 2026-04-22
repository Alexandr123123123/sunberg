import React from 'react';
import styles from '../Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>Sun<span>berg</span></div>
          <p className={styles.tagline}>
            Comprehensive solar energy solutions — from design and engineering through
            installation and long-term maintenance.
          </p>
        </div>
        <div className={styles.links}>
          <div>
            <div className={styles.colTitle}>Company</div>
            <ul className={styles.colList}>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className={styles.colTitle}>Services</div>
            <ul className={styles.colList}>
              <li><a href="#services">Design & Engineering</a></li>
              <li><a href="#services">Installation</a></li>
              <li><a href="#services">Monitoring</a></li>
              <li><a href="#services">Maintenance</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© 2026 Sunberg. All rights reserved.</span>
        <span>Built with clean energy in mind.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
