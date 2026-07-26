import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from '../TechHistory.module.css';
import leafImg from '../../../../assets/images/ab-organic-accent.png';

export const TechHistory = () => {
  const { t } = useTranslation();
  const rawMilestones = t('techPage.milestones', { returnObjects: true });

  const milestonePositions = [
    { gridArea: '1 / 2 / 2 / 4' },
    { gridArea: '1 / 9 / 2 / 11', marginTop: '20px' },
    { gridArea: '2 / 5 / 3 / 7' },
    { gridArea: '3 / 2 / 4 / 4' },
    { gridArea: '3 / 10 / 4 / 13', marginTop: '40px' },
    { gridArea: '4 / 5 / 5 / 7' }
  ];

  const milestones = rawMilestones.map((m, i) => ({
    ...m,
    pos: milestonePositions[i] || {}
  }));

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {milestones.map((item, i) => (
            <motion.div
              key={i}
              className={styles.milestone}
              style={item.pos}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
            >
              <div className={styles.leafContainer}>
                <img src={leafImg} alt="" className={styles.leaf} />
              </div>
              <div className={styles.card}>
                <div className={styles.val}>{item.val}</div>
                <p className={styles.lab}>{item.lab}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
