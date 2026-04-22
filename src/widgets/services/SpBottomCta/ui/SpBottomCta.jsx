import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../../../shared/ui/Button';
import styles from '../SpBottomCta.module.css';

export const SpBottomCta = ({ fadeUp }) => (
  <section className={styles.cta}>
    <div className="container">
      <motion.div
        className={styles.inner}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to Engineer Your Energy Independence?</h2>
          <p className={styles.desc}>
            Start with a free, no-obligation consultation. Our engineers will assess 
            your property and design a system tailored to your goals.
          </p>
        </div>
        <Button href="/#contact" variant="primary">
          Book a Consultation
        </Button>
      </motion.div>
    </div>
  </section>
);
