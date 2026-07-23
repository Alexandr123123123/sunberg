import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from '../ElHero.module.css';
import birdImg from '../../../../assets/images/el-hero-bird.png';

export const ElHero = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.hero}>
      <div className={styles.accent}>{t('electricalPage.hero.watermark')}</div>
      <div className={styles.birdWrapper}>
        <motion.img
          src={birdImg}
          alt="Sunberg Icon"
          className={styles.bird}
          initial={{ opacity: 0, x: -30, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
      </div>
      <div className="container">
        <div className={styles.inner}>
          <motion.div
            className={styles.top}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.label}>{t('electricalPage.hero.label')}</span>
            <h1 className={styles.title}>{t('electricalPage.hero.title')}</h1>
          </motion.div>
          
          <motion.div
            className={styles.bottom}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className={styles.desc}>{t('electricalPage.hero.desc')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
