import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import birdImg from '../../../assets/images/sp-hero-bird_2.png';
import styles from './ContactHero.module.css';

export const ContactHero = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.hero}>
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
      <div className={styles.watermark}>{t('contactPage.hero.watermark')}</div>
      <div className="container">
        <div className={styles.content}>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('contactPage.hero.label')}
          </motion.span>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            dangerouslySetInnerHTML={{ __html: t('contactPage.hero.title') }}
          />
          <motion.p
            className={styles.desc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('contactPage.hero.desc')}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
