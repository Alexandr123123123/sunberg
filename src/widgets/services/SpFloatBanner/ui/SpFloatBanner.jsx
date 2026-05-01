import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import spFloatovoltaicsImg from '../../../../assets/sp_floatovoltaics.png';
import styles from '../SpFloatBanner.module.css';

export const SpFloatBanner = () => {
  const { t } = useTranslation();
  const floatBanner = t('servicesPage.floatBanner', { returnObjects: true });

  return (
    <section className={styles.banner}>
      <div className={styles.bg}>
        <img src={spFloatovoltaicsImg} alt="Floatovoltaics" />
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
            <span className="section-label text-white">{floatBanner.label}</span>
            <h2 className={styles.title}>
              {floatBanner.title_pre} <span className="text-primary">{floatBanner.title_highlight}</span>
            </h2>
            <p className={styles.desc}>
              {floatBanner.desc}
            </p>
          </div>

          <div className={styles.stats}>
            {floatBanner.stats.map((stat, idx) => (
              <div key={idx} className={styles.stat}>
                <span className={styles.val}>{stat.value}</span>
                <span className={styles.lab}>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
