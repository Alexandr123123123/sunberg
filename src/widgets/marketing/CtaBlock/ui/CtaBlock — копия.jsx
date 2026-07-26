import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BookConsultationButton } from '../../../../shared/ui/BookConsultationButton';
import { useMediaQuery } from '../../../../shared/lib/hooks/useMediaQuery';
import styles from '../CtaBlock.module.css';

export const CtaBlock = ({ 
  variant = 'surface', 
  title,
  description,
  btnVariant = null,
  noWrapper = false 
}) => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const { t } = useTranslation();
  
  const displayTitle = title || t('ctaBlock.title');
  const displayDesc = description || t('ctaBlock.description');

  const content = (
    <motion.div 
      className={`${styles.inner} ${styles[`variant_${variant}`]}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>{displayTitle}</h3>
        <p className={styles.description}>{displayDesc}</p>
      </div>
      
      <BookConsultationButton 
        variant={btnVariant || (variant === 'primary' || variant === 'dark' ? 'dark' : 'primary')} 
        fullWidth={isMobile}
      />
    </motion.div>
  );

  if (noWrapper) return content;

  return (
    <section className={styles.section}>
      <div className="container">
        {content}
      </div>
    </section>
  );
};
