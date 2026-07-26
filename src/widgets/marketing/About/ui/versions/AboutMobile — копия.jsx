import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '../../../../../shared/lib/hooks/useMediaQuery';
import aboutImg from '../../../../../assets/about.png';
import styles from './AboutMobile.module.css';

export const AboutMobile = ({ fadeUp }) => {
  const [activePoint, setActivePoint] = useState(0);
  const isCompactMobile = useMediaQuery('(max-width: 600px)');
  const { t } = useTranslation();
  const points = t('about.points', { returnObjects: true });
  const milestones = t('about.milestones', { returnObjects: true });

  const togglePoint = () => {
    setActivePoint((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <section className={styles.about} id="about">
      <div className="container">
        <motion.div 
          className={styles.headerArea}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="section-label">{t('about.label')}</span>
          <h2 className="section-title">{t('about.title')}</h2>
        </motion.div>

        <div className={styles.stack}>
          <motion.div 
            className={styles.imageCol}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className={styles.image}>
              <img src={aboutImg} alt="Sunberg engineering" />
            </div>

            <div className={styles.milestones}>
              {milestones.map((milestone, index) => (
                <div key={index} className={styles.milestone}>
                  <span className={styles.milestoneNumber}>{milestone}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={styles.contentCol}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className={styles.body}>
              <p className={styles.text}>
                <strong>Sunberg</strong> {t('about.description')}
              </p>
              
              <div className={styles.sliderContainer}>
                <div className={styles.sliderWrapper}>
                  <div className={styles.pointsStack}>
                    {/* Hidden placeholders to maintain stable height based on the tallest point */}
                    <div className={styles.heightStabilizer}>
                      {points.map((point, index) => (
                        <div key={index} className={styles.pointPlaceholder} aria-hidden="true">
                          <strong>{point.title}</strong>
                          <p>{point.text}</p>
                        </div>
                      ))}
                    </div>

                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.div 
                        key={activePoint}
                        className={styles.pointItem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <strong>{points[activePoint].title}</strong>
                        <p>{points[activePoint].text}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <button className={styles.switchBtn} onClick={togglePoint} aria-label="Next point">
                    <svg width="32" height="80" viewBox="0 0 32 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15L20 40L12 65" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className={styles.manifesto}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className={styles.manifestoText}>{t('about.manifesto_text')}</p>
          <span className={styles.signature}>{t('about.manifesto_signature')}</span>
        </motion.div>
      </div>
    </section>
  );
};
