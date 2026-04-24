import React from 'react';
import { motion } from 'framer-motion';
import styles from '../AbManifesto.module.css';

export const AbManifesto = () => {
  return (
    <section className={styles.manifesto}>
      <div className="container">
        <motion.div 
          className={styles.inner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className={styles.text}>
            “We don't just install solar panels; we design energy ecosystems 
            that empower communities and preserve the architectural soul of our landscapes.”
          </p>
          <span className={styles.signature}>Erik Sundberg, Founder</span>
        </motion.div>
      </div>
    </section>
  );
};
