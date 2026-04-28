import React from 'react';
import { motion } from 'framer-motion';
import { BookConsultationButton } from '../../../../shared/ui/BookConsultationButton';
import styles from '../CtaBlock.module.css';

export const CtaBlock = ({ 
  variant = 'surface', 
  title = 'Ready to engineer your energy independence?',
  description = 'Get a professional solar performance forecast and custom system architecture within 48 hours.',
  btnVariant = null,
  noWrapper = false 
}) => {
  const content = (
    <motion.div 
      className={`${styles.inner} ${styles[`variant_${variant}`]}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      
      <BookConsultationButton 
        variant={btnVariant || (variant === 'primary' || variant === 'dark' ? 'dark' : 'primary')} 
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
