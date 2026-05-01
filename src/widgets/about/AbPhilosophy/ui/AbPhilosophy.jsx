import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from '../AbPhilosophy.module.css';
import leafImg from '../../../../assets/images/ab-organic-accent.png';
import structuralImg from '../../../../assets/images/ab-philosophy-structural.png';
import longevityImg from '../../../../assets/images/ab-philosophy-longevity.png';
import ecosystemImg from '../../../../assets/images/ab-philosophy-ecosystem.png';

const images = [structuralImg, longevityImg, ecosystemImg];

export const AbPhilosophy = () => {
  const { t } = useTranslation();
  
  const rawPrinciples = t('aboutPage.philosophy.principles', { returnObjects: true });
  const principles = rawPrinciples.map((p, i) => ({
    ...p,
    image: images[i]
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.label}>{t('aboutPage.philosophy.label')}</span>
            <h2 className={styles.title}>
              <span dangerouslySetInnerHTML={{ __html: t('aboutPage.philosophy.title_pre') }} />
              {t('aboutPage.philosophy.title_highlight')}
            </h2>
            <p className={styles.desc}>
              {t('aboutPage.philosophy.desc')}
            </p>
            <div className={styles.leafWrapper}>
              <img src={leafImg} alt="" className={styles.leaf} />
            </div>
          </motion.div>

          <motion.div 
            className={styles.principles}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {principles.map((p, i) => (
              <motion.div className={styles.principle} key={i} variants={itemVariants}>
                <div className={styles.principleHeader}>
                  <div className={styles.principleIcon}>
                    <img src={p.image} alt="" />
                  </div>
                  <h3 className={styles.principleTitle}>{p.title}</h3>
                </div>
                <p className={styles.principleText}>{p.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
