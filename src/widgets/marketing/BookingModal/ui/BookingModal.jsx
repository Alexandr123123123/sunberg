import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../BookingModal.module.css';

export const BookingModal = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length > 5) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setPhone('');
        onClose();
      }, 4000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className={styles.modal}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.close} onClick={onClose} aria-label="Close">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {!isSubmitted ? (
              <>
                <div className={styles.header}>
                  <h3 className={styles.title}>Book a Free Consultation</h3>
                  <p className={styles.description}>
                    Our engineers will call you back within 30 seconds to discuss your project.
                  </p>
                </div>
                
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000" 
                      className={styles.input}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      autoFocus
                    />
                  </div>
                  <button type="submit" className={styles.submit}>
                    Get My Call Now
                  </button>
                </form>
              </>
            ) : (
              <motion.div 
                className={styles.success}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className={styles.successIcon}>✓</div>
                <h3>Request Received!</h3>
                <p>We're connecting you with an engineer right now. Please keep your phone ready.</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
