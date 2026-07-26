import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from '../PrTrust.module.css';

export const PrTrust = ({ children, paddingTop, paddingBottom }) => {
  const { t } = useTranslation();
  const customStyle = {
    paddingTop: paddingTop !== undefined ? paddingTop : undefined,
    paddingBottom: paddingBottom !== undefined ? paddingBottom : undefined,
  };

  return (
    <section className={styles.trust} style={customStyle}>
      <div className="container">
        <motion.p 
          className={styles.phrase}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {children || t('projectsPage.trustDefault')}
        </motion.p>
      </div>
    </section>
  );
};
