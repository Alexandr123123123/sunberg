import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from '../PrIntro.module.css';
import birdImg from '../../../../assets/images/pr-intro-bird.png';

const PrIntro = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.intro}>
      <div className={styles.birdWrapper}>
        <motion.img 
          src={birdImg} 
          alt="Natural Element" 
          className={styles.bird}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        />
      </div>
      <div className={styles.accent}>{t('projectsPage.intro.accent')}</div>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.topWrapper}>
            <motion.div 
              className={styles.top}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className={styles.label}>{t('projectsPage.intro.label')}</span>
              <h1 
                className={styles.title} 
                dangerouslySetInnerHTML={{ __html: t('projectsPage.intro.title') }} 
              />
            </motion.div>
          </div>
          
          <motion.div 
            className={styles.bottom}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className={styles.desc}>
              {t('projectsPage.intro.desc')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrIntro;
