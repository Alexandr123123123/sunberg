import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import rev1 from '../../../../assets/rev1_natural.png';
import rev2 from '../../../../assets/rev2_coal.png';
import rev3 from '../../../../assets/rev3_gen.png';
import rev4 from '../../../../assets/rev4_refined.png';
import rev5 from '../../../../assets/rev5_absolute_real.png';
import { BookConsultationButton } from '../../../../shared/ui/BookConsultationButton';
import styles from '../Revolution.module.css';

const Revolution = () => {
  const { t } = useTranslation();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className={styles.revolution} id="revolution">
      <div className="container">
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="section-label">{t('revolution.header_label')}</span>
          <h2 className="section-title">{t('revolution.header_title')}</h2>
          <p className="section-subtitle">
            {t('revolution.header_subtitle')}
          </p>
        </motion.div>

        <div className={styles.narrative}>
          {/* Chapter 1: The Scale */}
          <motion.div
            className={`${styles.block} ${styles.blockScale} ${styles.blockExperiment}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className={styles.floatingStat}>30s</span>
            <div className={styles.content}>
              <div className={styles.contentDesktop}>
                <span className={styles.stat}>30s</span>
                <div className={styles.titleGroup}>
                  <h3 className={styles.title}>{t('revolution.ch1_title')}</h3>
                  <div className={styles.divider}></div>
                </div>
                <p className={styles.text}>
                  {t('revolution.ch1_text')}
                </p>
              </div>

              {/* Mobile version: separated title and text cards */}
              <div className={styles.mobileTitleBlock}>
                <h3 className={styles.title}>{t('revolution.ch1_title')}</h3>
                <div className={styles.divider}></div>
              </div>
              <div className={styles.mobileTextBlock}>
                <p className={styles.text}>
                  {t('revolution.ch1_text')}
                </p>
              </div>
            </div>
            <div className={styles.image}>
              <img src={rev1} alt="Solar transformation in Europe" />
            </div>
          </motion.div>

          {/* Chapter 2: The Macro Shift */}
          <motion.div
            className={`${styles.block} ${styles.blockShift} ${styles.blockExperiment} ${styles.blockExperimentRight}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className={styles.floatingStat}>2024</span>
            <div className={styles.image}>
              <img src={rev2} alt="Solar surpassing coal" />
            </div>
            <div className={styles.content}>
              <div className={styles.contentDesktop}>
                <span className={styles.stat}>2024</span>
                <div className={styles.titleGroup}>
                  <h3 className={styles.title}>{t('revolution.ch2_title')}</h3>
                  <div className={styles.divider}></div>
                </div>
                <p className={styles.text}>
                  {t('revolution.ch2_text')}
                </p>
              </div>

              <div className={styles.mobileTitleBlock}>
                <h3 className={styles.title}>{t('revolution.ch2_title')}</h3>
                <div className={styles.divider}></div>
              </div>
              <div className={styles.mobileTextBlock}>
                <p className={styles.text}>
                  {t('revolution.ch2_text')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Chapter 3: The Micro Impact (Panorama) */}
          <motion.div
            className={`${styles.block} ${styles.blockImpact}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className={styles.panorama}>
              <img src={rev3} alt="The impact of a single panel" />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <span className={styles.stat}>13 t</span>
                  <h3 className={styles.title}>{t('revolution.ch3_title')}</h3>
                  <p className={styles.text}>
                    {t('revolution.ch3_text')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chapter 4: Global Dominance */}
          <motion.div
            className={`${styles.block} ${styles.blockDominance} ${styles.blockExperiment}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className={styles.floatingStat}>50%</span>
            <div className={styles.content}>
              <div className={styles.contentDesktop}>
                <span className={styles.stat}>50%</span>
                <div className={styles.titleGroup}>
                  <h3 className={styles.title}>{t('revolution.ch4_title')}</h3>
                  <div className={styles.divider}></div>
                </div>
                <p className={styles.text}>
                  {t('revolution.ch4_text')}
                </p>
              </div>

              <div className={styles.mobileTitleBlock}>
                <h3 className={styles.title}>{t('revolution.ch4_title')}</h3>
                <div className={styles.divider}></div>
              </div>
              <div className={styles.mobileTextBlock}>
                <p className={styles.text}>
                  {t('revolution.ch4_text_mobile')}
                </p>
              </div>
            </div>
            <div className={styles.image}>
              <img src={rev4} alt="Global solar growth" />
            </div>
          </motion.div>

          {/* Chapter 5: The Financial Logical (CTA) */}
          <motion.div
            className={`${styles.block} ${styles.blockValue}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className={styles.image}>
              <img src={rev5} alt="Property value increase" />
            </div>
            <div className={styles.content}>
              <div className={styles.contentDesktop}>
                <h3 className={styles.title}>{t('revolution.ch5_title')}</h3>
                <p className={styles.text}>
                  {t('revolution.ch5_text')}
                </p>
                <div className={styles.accent}>
                  {t('revolution.ch5_accent')}
                </div>
                <div className={styles.cta}>
                  <BookConsultationButton variant="dark" />
                </div>
              </div>

              <div className={styles.mobileTitleBlock}>
                <h3 className={styles.title}>{t('revolution.ch5_title')}</h3>
                <div className={styles.divider}></div>
              </div>
              <div className={styles.mobileTextBlock}>
                <p className={styles.text}>
                  {t('revolution.ch5_text_mobile')}
                </p>
                <div className={styles.cta}>
                  <BookConsultationButton variant="dark" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Revolution;
