import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './TrustBanner.module.css';

export const TrustBanner = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.label}>
            {t('contactPage.trust')}
          </span>
        </motion.div>
      </div>
    </section>
  );
};
