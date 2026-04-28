import React from 'react';
import { motion } from 'framer-motion';
import { spTechHighlightImgExport } from '../../../../shared/config/services/servicesData';
import styles from '../SpTechBanner.module.css';

export const SpTechBanner = () => (
  <section className={styles.banner}>
    <div className={styles.bg}>
      <img src={spTechHighlightImgExport} alt="TOPCon Technology" />
      <div className={styles.overlay}></div>
    </div>

    <div className="container">
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.main}>
          <span className="section-label text-white">Engineering Focus</span>
          <h2 className={styles.title}>
            Agrivoltaic <span className="text-primary">Synergy</span>
          </h2>
          <p className={styles.desc}>
            Simultaneous land use for solar generation and crop cultivation, 
            reducing irrigation needs by 30% and increasing overall land productivity by 60%.
          </p>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.val}>-30%</span>
            <span className={styles.lab}>Irrigation Demand</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.val}>+60%</span>
            <span className={styles.lab}>Land Efficiency</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.val}>Dual-Use</span>
            <span className={styles.lab}>Optimized Yield</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
