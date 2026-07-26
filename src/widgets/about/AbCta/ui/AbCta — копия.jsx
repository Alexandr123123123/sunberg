import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../../../shared/ui/Button';
import styles from '../AbCta.module.css';

export const AbCta = () => {
  return (
    <section className={styles.banner}>
      <div className="container">
        <motion.div 
          className={styles.inner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.content}>
            <h3 className={styles.title}>Ready to engineer your energy independence?</h3>
            <p className={styles.description}>
              Get a professional solar performance forecast and custom system architecture within 48 hours.
            </p>
          </div>
          <Button href="/contact" variant="primary">Request a Consultation</Button>
        </motion.div>
      </div>
    </section>
  );
};
