import React from 'react';
import styles from '../BookConsultationButton.module.css';
import { useBookingModal } from '../../../../app/providers/BookingModalProvider';
import { useTranslation } from 'react-i18next';

export const BookConsultationButton = ({ 
  variant = 'primary', 
  className = '',
  fullWidth = false,
  ...props 
}) => {
  const { openModal } = useBookingModal();
  const { t } = useTranslation();

  const handleClick = (e) => {
    e.preventDefault();
    openModal();
  };

  const buttonClasses = `
    ${styles.btn} 
    ${styles[variant]} 
    ${fullWidth ? styles.fullWidth : ''}
    ${className}
  `.trim();

  return (
    <a 
      href="/#contact" 
      className={buttonClasses} 
      onClick={handleClick}
      {...props}
    >
      {t('hero.btn_start')}
    </a>
  );
};
