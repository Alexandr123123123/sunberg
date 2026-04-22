import React from 'react';
import { motion } from 'framer-motion';
import styles from '../SpHero.module.css';

const SpHero = () => (
  <section className={styles.hero}>
    <div className="container">
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-label">Our Capabilities</span>
        <h1 className={styles.title}>Engineering Excellence for a Sustainable Future</h1>
        <p className={styles.desc}>
          We transcend standard solar installation. Our approach is deeply analytical,
          structurally rigorous, and unapologetically premium. Discover how we construct
          independent energy ecosystems.
        </p>
      </motion.div>
    </div>
  </section>
);

export default SpHero;
