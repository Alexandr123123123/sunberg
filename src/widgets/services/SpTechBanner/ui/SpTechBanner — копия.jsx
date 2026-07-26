import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { spTechHighlightImgExport } from '../../../../shared/config/services/servicesData';
import styles from '../SpTechBanner.module.css';

export const SpTechBanner = () => {
  const { t } = useTranslation();
  const techBanner = t('servicesPage.techBanner', { returnObjects: true });

  return (
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
            <span className="section-label text-white">{techBanner.label}</span>
            <h2 className={styles.title}>
              {techBanner.title_pre} <span className="text-primary">{techBanner.title_highlight}</span>
            </h2>
            <p className={styles.desc}>
              {techBanner.desc}
            </p>
          </div>

          <div className={styles.stats}>
            {techBanner.stats.map((stat, i) => (
              <div className={styles.stat} key={i}>
                <span className={styles.val}>{stat.val}</span>
                <span className={styles.lab}>{stat.lab}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
