import React from 'react';
import { motion } from 'framer-motion';
import { hardwarePartners } from '../../../../shared/config/services/servicesData';
import styles from '../SpHardware.module.css';

const SpHardware = ({ fadeUp }) => {
  // Mapping partners to specific grid areas for a 4x4 frame
  // 1  2  3  4
  // 5  H  H  8
  // 9  H  H  12
  // 13 14 15 16
  const gridPositions = [1, 2, 3, 4, 5, 8, 9, 12, 13, 14, 15, 16];

  return (
    <section className={styles.hardware}>
      <div className="container">
        <div className={styles.grid}>
          {/* Central Header */}
          <motion.div
            className={styles.header}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-label">Ecosystem Care</span>
            <h2 className={styles.title}>Hardware Integrity</h2>
            <p className={styles.intro}>
              We only partner with Tier 1 manufacturers who share our obsession with 
              structural logic and long-term durability.
            </p>
          </motion.div>

          {/* Outer Partners */}
          {hardwarePartners.map((partner, i) => (
            <motion.div
              className={styles.partner}
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ gridArea: `c${gridPositions[i]}` }}
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
};

export default SpHardware;
