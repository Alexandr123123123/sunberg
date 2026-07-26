import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from '../HowItWorks.module.css';
import leafImg from '../../../../assets/images/how-it-works-leaf.png';

const HowItWorks = () => {
  const { t } = useTranslation();
  const rawSteps = t('howItWorks.steps', { returnObjects: true });
  const steps = rawSteps.map((step, index) => ({
    ...step,
    num: `0${index + 1}`
  }));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className={styles.process} id="process">
      <div className={styles.leafWrapper}>
        <motion.img 
          src={leafImg} 
          alt="Natural Element" 
          className={styles.leaf}
          initial={{ opacity: 0, x: 30, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
      </div>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">{t('howItWorks.header_label')}</span>
          <h2 className="section-title">{t('howItWorks.header_title')}</h2>
          <p className="section-subtitle">
            {t('howItWorks.header_subtitle')}
          </p>
        </div>
        <motion.div 
          className={styles.steps}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step, i) => (
            <motion.div className={styles.step} key={i} variants={item}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepLine}></div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
