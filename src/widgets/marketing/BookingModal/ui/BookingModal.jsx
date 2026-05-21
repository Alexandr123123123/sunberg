import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IMaskInput } from 'react-imask';
import { supabase } from '../../../../shared/api/supabase';
import styles from '../BookingModal.module.css';

export const BookingModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState('+32 (');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const maskPlaceholder = '+32 (470) 000-00-00';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phone.length > 5) {
      setIsSubmitted(true);

      // Get or create session ID
      let sessionId = localStorage.getItem('sunberg_chat_session');
      if (!sessionId) {
        sessionId = 'session_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('sunberg_chat_session', sessionId);
      }

      const textToSend = `📞 Запрос консультации: ${phone} (Форма обратной связи)`;

      // 2. Notify Slack via Edge Function
      try {
        const currentThreadTs = localStorage.getItem(`sunberg_chat_thread_${sessionId}`);
        
        const { data, error } = await supabase.functions.invoke('slack-webhook', {
          body: {
            source: 'website',
            sessionId: sessionId,
            text: textToSend,
            threadTs: currentThreadTs,
            messageType: 'consultation'
          }
        });

        // Save the thread timestamp if this was the first message or if thread was reset
        if (data && data.ts && (!currentThreadTs || data.threadReset)) {
          localStorage.setItem(`sunberg_chat_thread_${sessionId}`, data.ts);
        }

        // If Slack explicitly returned an error, clear the thread so the next attempt starts fresh
        if (data && data.ok === false) {
          console.warn('Slack API Error, clearing thread timestamp:', data.error);
          localStorage.removeItem(`sunberg_chat_thread_${sessionId}`);
        }
        
        if (error) console.error('Edge Function Error:', error);
      } catch (err) {
        console.error('Failed to send callback request to Slack', err);
      }

      setTimeout(() => {
        setIsSubmitted(false);
        setPhone('+32 (');
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
                  <h3 className={styles.title}>{t('bookingModal.title')}</h3>
                  <p className={styles.description}>
                    {t('bookingModal.description')}
                  </p>
                </div>
                
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                    <div className={styles.inputOverlay} aria-hidden="true">
                      <span className={styles.hiddenText}>{phone}</span>
                      <span className={styles.visiblePlaceholder}>
                        {maskPlaceholder.slice(phone.length).split('').map((char, index) => {
                          const globalIndex = phone.length + index;
                          const isDigitPlaceholder = globalIndex > 3 && /\d/.test(char);
                          return (
                            <span 
                              key={index} 
                              style={{ color: isDigitPlaceholder ? '#999' : 'var(--color-text)' }}
                            >
                              {char}
                            </span>
                          );
                        })}
                      </span>
                    </div>
                    <IMaskInput 
                      mask="+32 (000) 000-00-00"
                      lazy={true}
                      className={styles.input}
                      value={phone}
                      onAccept={(value) => setPhone(value)}
                      onFocus={() => {
                        if (phone.length < 5) setPhone('+32 (');
                      }}
                      required
                      autoFocus
                    />
                  </div>
                  <button type="submit" className={styles.submit}>
                    {t('bookingModal.submit')}
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
                <h3>{t('bookingModal.successTitle')}</h3>
                <p>{t('bookingModal.successDesc')}</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
