import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import heroImg from '../../../../assets/hero_v2.png';
import { Button } from '../../../../shared/ui/Button';
import styles from '../Hero.module.css';

const Hero = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bg}>
        <img src={heroImg} alt="Solar panel installation" />
        <div className={styles.overlay}></div>
      </div>
      <div className="container">
        <motion.div 
          className={styles.content}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span className={styles.label} variants={itemVariants}>
            {t('hero.label')}
          </motion.span>
          <motion.h1 className={styles.title} variants={itemVariants}>
            {t('hero.title')}
          </motion.h1>
          <motion.p className={styles.desc} variants={itemVariants}>
            {t('hero.desc')}
          </motion.p>
          <motion.div className={styles.actions} variants={itemVariants}>
            <Button href="#contact" variant="primary">{t('hero.btn_start')}</Button>
            <Button href="#services" variant="outline">{t('hero.btn_services')}</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
