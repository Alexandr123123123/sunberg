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
        <div className={styles.grid}>
          <div className={styles.stat}>48H</div>
          
          <div className={styles.content}>
            <h2 className={styles.title}>
              Ready to Engineer Your <br />
              <span className={styles.highlight}>Energy Independence?</span>
            </h2>
            <p className={styles.desc}>
              Start with a free, no-obligation consultation. Our engineers will 
              assess your property and design a system tailored to your goals.
            </p>
          </div>
          
          <Button href="/#contact" variant="outline" size="lg" uppercase>
            Book a Consultation
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);
