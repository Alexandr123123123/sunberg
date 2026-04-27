import React from 'react';
import { motion } from 'framer-motion';
import styles from '../AbHero.module.css';
import birdImg from '../../../../assets/images/ab-hero-bird.png';

export const AbHero = () => {
  return (
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
      <div className={styles.accent}>SUNBERG</div>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.top}>
            <motion.span 
              className={styles.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Mission
            </motion.span>
            
            <motion.h1 
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Designing the Future <br />
              of Solar Architecture.
            </motion.h1>
          </div>

          <motion.div 
            className={styles.bottom}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className={styles.desc}>
              Founded on the principles of technical rigor and environmental stewardship, 
              Sunberg is more than a solar provider. We are architects of energy independence, 
              bridging the gap between high-end engineering and sustainable living.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
