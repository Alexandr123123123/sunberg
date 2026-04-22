import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../../../shared/ui/Button';
import styles from '../CtaBanner.module.css';

const CtaBanner = () => (
  <section className={styles.banner}>
    <div className="container">
      <motion.div 
        className={styles.inner}
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.content}>
          <h3 className={styles.title}>Ready to harness the power of the sun?</h3>
          <p className={styles.desc}>
            Get a free, no-obligation site assessment and custom solar proposal within 48 hours.
          </p>
        </div>
        <Button href="#contact" variant="primary">Get a Free Quote</Button>
      </motion.div>
    </div>
  </section>
);

export default CtaBanner;
