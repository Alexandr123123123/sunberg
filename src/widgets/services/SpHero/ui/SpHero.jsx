import React from 'react';
import { motion } from 'framer-motion';
import styles from '../SpHero.module.css';
import birdImg from '../../../../assets/images/sp-hero-bird.png';

const SpHero = () => (
  <section className={styles.hero}>
    <div className={styles.watermark}>SERVICES</div>
    <div className={styles.birdWrapper}>
      <motion.img 
        src={birdImg} 
        alt="Natural Element" 
        className={styles.bird}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />
    </div>
    
    <div className="container">
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.label}>Our Capabilities</span>
          <h1 className={styles.title}>Engineering Excellence for a Sustainable Future</h1>
        </motion.div>

        <motion.div 
          className={styles.bottom}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className={styles.desc}>
            We transcend standard solar installation. Our approach is deeply analytical,
            structurally rigorous, and unapologetically premium. Discover how we construct
            independent energy ecosystems.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SpHero;
