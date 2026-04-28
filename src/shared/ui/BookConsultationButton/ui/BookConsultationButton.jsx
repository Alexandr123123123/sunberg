import React from 'react';
import styles from '../BookConsultationButton.module.css';
import { useBookingModal } from '../../../../app/providers/BookingModalProvider';

export const BookConsultationButton = ({ 
  variant = 'primary', 
  className = '',
  ...props 
}) => {
  const { openModal } = useBookingModal();

  const handleClick = (e) => {
    e.preventDefault();
    openModal();
  };

  const buttonClasses = `
    ${styles.btn} 
    ${styles[variant]} 
    ${className}
  `.trim();

  return (
    <a 
      href="/#contact" 
      className={buttonClasses} 
      onClick={handleClick}
      {...props}
    >
      Book a Consultation
    </a>
  );
};
