import React from 'react';
import { motion } from 'framer-motion';
import styles from './TechHighlight.module.css';

export const TechHighlight = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div 
          className={styles.wrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.main}>
            <span className={styles.label}>Engineering Focus</span>
            <h2 className={styles.title}>N-Type TOPCon Efficiency</h2>
            <p className={styles.desc}>
              Next-generation Tunnel Oxide Passivated Contact modules achieving 
              unmatched conversion rates and long-term stability.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>22.5%</div>
              <div className={styles.statLabel}>Peak Efficiency</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>-0.4%</div>
              <div className={styles.statLabel}>Yearly Degradation</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>30Y</div>
              <div className={styles.statLabel}>Linear Warranty</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
