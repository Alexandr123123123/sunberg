import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from '../SpHardware.module.css';

const SpHardware = ({ fadeUp }) => {
  const { t } = useTranslation();
  const hardware = t('servicesPage.hardware', { returnObjects: true });
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
            <span className="section-label">{hardware.label}</span>
            <h2 className={styles.title}>{hardware.title}</h2>
            <p className={styles.intro}>
              {hardware.intro}
            </p>
          </motion.div>

          {/* Outer Partners */}
          {hardware.partners.map((partner, i) => (
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
