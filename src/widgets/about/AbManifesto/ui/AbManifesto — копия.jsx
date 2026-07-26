import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from '../AbManifesto.module.css';

export const AbManifesto = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.manifesto}>
      <div className="container">
        <motion.div 
          className={styles.inner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className={styles.text}>
            {t('aboutPage.manifesto.text')}
          </p>
          <span className={styles.signature}>{t('aboutPage.manifesto.signature')}</span>
        </motion.div>
      </div>
    </section>
  );
};
