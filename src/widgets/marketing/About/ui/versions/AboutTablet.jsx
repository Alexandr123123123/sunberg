import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '../../../../../shared/lib/hooks/useMediaQuery';
import aboutImg from '../../../../../assets/about.png';
import styles from './AboutTablet.module.css';

export const AboutTablet = ({ fadeUp }) => {
  const isSmallTablet = useMediaQuery('(max-width: 750px)');
  const { t } = useTranslation();
  const points = t('about.points', { returnObjects: true });
  const milestones = t('about.milestones', { returnObjects: true });

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

        <div className={styles.grid}>
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
            {isSmallTablet ? (
              <div className={styles.body}>
                <p className={styles.text}>
                  <strong>Sunberg</strong> {t('about.description')}
                </p>
                
                <div className={styles.pointsGrid}>
                  {points.map((point, index) => (
                    <div key={index} className={styles.pointItem}>
                      <strong>{point.title}</strong>
                      <p>{point.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className={styles.largeTabletGrid}>
                <div className={styles.mainText}>
                  <p className={styles.text}>
                    <strong>Sunberg</strong> {t('about.description')}
                  </p>
                </div>
                <div className={styles.sidePoints}>
                  {points.map((point, index) => (
                    <div key={index} className={styles.pointItem}>
                      <strong>{point.title}</strong>
                      <p>{point.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
