import React from 'react';
import { motion } from 'framer-motion';
import { hardwarePartners } from '../../../../shared/config/services/servicesData';
import styles from '../SpHardware.module.css';

const SpHardware = ({ fadeUp }) => (
  <section className={styles.hardware}>
    <div className="container">
      <motion.div
        className={styles.header}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="section-label">Ecosystem Care</span>
        <h2 className="section-title">Hardware Integrity</h2>
        <p className={styles.intro}>
          We only partner with Tier 1 manufacturers who share our obsession with structural 
          logic and long-term durability.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {hardwarePartners.map((partner, i) => (
          <motion.div
            className={styles.partner}
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <span className={styles.partnerName}>{partner.name}</span>
            <span className={styles.partnerTagline}>{partner.tagline}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SpHardware;
