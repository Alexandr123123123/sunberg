import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../Partners.module.css';

const Partners = () => {
  const { t } = useTranslation();
  
  return (
    <section className={styles.partners}>
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.label}>{t('partners.label')}</span>
        </div>
      </div>
    </section>
  );
};

export default Partners;
