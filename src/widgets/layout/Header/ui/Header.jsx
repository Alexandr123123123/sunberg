import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../../../shared/ui/Button';
import styles from '../Header.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const menuVariants = {
  closed: { x: '-100%', transition: { duration: 0.6, ease: [0.2, 0, 0.2, 1] } },
  open: { x: 0, transition: { duration: 0.6, ease: [0.2, 0, 0.2, 1] } }
};

const linkVariants = {
  closed: { opacity: 0, y: 20 },
  open: (i) => ({
    opacity: 1, 
    y: 0, 
    transition: { delay: 0.2 + (i * 0.1), duration: 0.5 }
  })
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className={`${styles.header} ${isMenuOpen ? styles.headerOpen : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>Sun<span>berg</span></Link>
        
        <nav className={styles.nav}>
          <Link to="/about" className={styles.link}>About</Link>
          <Link to="/services" className={styles.link}>Services</Link>
          <Link to="/projects" className={styles.link}>Projects</Link>
          <Link to="/tech" className={styles.link}>Solar Tech</Link>
          <Button to="/contact" variant="primary" size="sm">Contact Us</Button>
        </nav>

        <button 
          className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className={styles.mobileMenu}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className={styles.mobileNav}>
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/services', label: 'Services' },
                { to: '/projects', label: 'Projects' },
                { to: '/tech', label: 'Solar Tech' }
              ].map((link, i) => (
                <motion.div key={link.to} custom={i} variants={linkVariants}>
                  <Link to={link.to} className={styles.mobileLink}>{link.label}</Link>
                </motion.div>
              ))}
              
              <motion.div custom={5} variants={linkVariants}>
                <Button to="/contact" variant="primary" size="lg" className={styles.mobileCta}>Contact Us</Button>
              </motion.div>
            </div>

            <motion.div 
              className={styles.mobileFooter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className={styles.mobileContact}>
                <p>hello@sunberg.energy</p>
                <p>+1 (512) 000-0000</p>
              </div>
              <div className={styles.socials}>
                <span>LinkedIn</span>
                <span>Instagram</span>
                <span>Twitter</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
