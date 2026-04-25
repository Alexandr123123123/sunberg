import React from 'react';
import { motion } from 'framer-motion';
import styles from './TrustBanner.module.css';

export const TrustBanner = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.label}>
            Trusted by 200+ homeowners and businesses across Europe and the US
          </span>
        </motion.div>
      </div>
    </section>
  );
};
