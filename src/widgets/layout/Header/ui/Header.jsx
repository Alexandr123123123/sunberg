import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../../shared/ui/Button';
import styles from '../Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={`container ${styles.inner}`}>
      <Link to="/" className={styles.logo}>Sun<span>berg</span></Link>
      <nav className={styles.nav}>
        <a href="/#about" className={styles.link}>About</a>
        <Link to="/services" className={styles.link}>Services</Link>
        <Link to="/projects" className={styles.link}>Projects</Link>
        <a href="/#contact" className={styles.link}>Contact</a>
        <Button href="/#contact" variant="primary" size="sm">Get a Quote</Button>
      </nav>
    </div>
  </header>
);

export default Header;
