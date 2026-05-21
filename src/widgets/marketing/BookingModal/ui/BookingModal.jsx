import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../../../shared/api/supabase';
import styles from '../BookingModal.module.css';

export const BookingModal = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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
