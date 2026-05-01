import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import techBg from '../../../../assets/images/ab-tech-bg.png';
import styles from '../AbTech.module.css';

export const AbTech = () => {
  const { t } = useTranslation();
  const stats = t('aboutPage.tech.stats', { returnObjects: true });
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className={styles.section} ref={ref}>
      <motion.div className={styles.bg} style={{ y }}>
        <img src={techBg} alt="European nature with solar integration" />
      </motion.div>
      <div className={styles.overlay} />

      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.main}>
            <span className="section-label text-white">{t('aboutPage.tech.label')}</span>
            <h2 className={styles.title}>
              {t('aboutPage.tech.title_pre')}
              <span className="text-primary">{t('aboutPage.tech.title_highlight')}</span>
              {t('aboutPage.tech.title_post')}
            </h2>
            <p className={styles.desc}>
              {t('aboutPage.tech.desc')}
            </p>
          </div>

          <div className={styles.stats}>
            {stats.map((s, i) => (
              <div className={styles.stat} key={i}>
                <span className={styles.val}>{s.val}</span>
                <span className={styles.lab}>{s.lab}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
