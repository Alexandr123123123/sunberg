import React from 'react';
import { motion } from 'framer-motion';
import birdImg from '../../../assets/images/sp-hero-bird_1.png';
import styles from './TechHero.module.css';

export const TechHero = () => (
  <section className={styles.hero}>
    <div className={styles.birdWrapper}>
      <motion.img 
        src={birdImg} 
        alt="Sunberg Icon" 
        className={styles.bird}
        initial={{ opacity: 0, x: -30, rotate: -5 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
    </div>
    <div className="container">
      <div className={styles.content}>
        <span className="section-label">Engineering Excellence</span>
        <h1 className={styles.title}>The Future of Solar Technology</h1>
        <p className={styles.desc}>
          At Sunberg, we push the boundaries of energy efficiency through advanced materials, 
          precision engineering, and technical innovation.
        </p>
      </div>
    </div>
  </section>
);
