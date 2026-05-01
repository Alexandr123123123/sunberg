import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IconDesign, IconIntegration, IconAnalytics, IconStorage } from '../../../../shared/ui/icon/Icons';
import styles from '../AbValues.module.css';

const icons = [<IconDesign />, <IconIntegration />, <IconAnalytics />, <IconStorage />];

export const AbValues = () => {
  const { t } = useTranslation();
  const rawValues = t('aboutPage.values', { returnObjects: true });
  const values = rawValues.map((v, i) => ({
    ...v,
    icon: icons[i]
  }));

  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div 
          className={styles.grid}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {values.map((val, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrapper}>
                {val.icon}
              </div>
              <h3 className={styles.title}>{val.title}</h3>
              <p className={styles.desc}>{val.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
