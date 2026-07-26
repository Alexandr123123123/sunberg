import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './ServiceCardEditorial.module.css';

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ServiceCardEditorial = ({ service, index, reverse = false }) => {
  return (
    <motion.div
      className={`${styles.card} ${reverse ? styles.reverse : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <div className={styles.imageBox}>
        <img src={service.image} alt={service.title} className={styles.image} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.body}>
        <div className={styles.watermark}>{service.num}</div>
        <div className={styles.content}>
          <h3 className={styles.title}>{service.title}</h3>
          <p className={styles.text}>{service.text}</p>
          <Link to="/services" className={styles.footer}>
            <span className={styles.linkText}>Explore Service</span>
            <span className={styles.icon}><ArrowRight /></span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
