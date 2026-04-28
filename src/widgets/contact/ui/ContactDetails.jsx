import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ContactDetails.module.css';

const contactItems = [
  {
    icon: '✆',
    label: 'Phone',
    value: '+1 (512) 000-0000',
  },
  {
    icon: '✉',
    label: 'Email',
    value: 'hello@sunberg.energy',
  },
  {
    icon: '⌖',
    label: 'Office',
    value: '201 Solar Way, Austin, TX 78701',
  }
];

export const ContactDetails = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (value, index) => {
    navigator.clipboard.writeText(value);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {contactItems.map((item, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleCopy(item.value, index)}
            >
              <div className={styles.icon}>{item.icon}</div>
              <div className={styles.info}>
                <span className={styles.label}>{item.label}</span>
                <div className={styles.value}>{item.value}</div>
              </div>
              
              <div className={styles.copyIcon}>
                {copiedIndex === index ? (
                  <span className={styles.copiedText}>Copied!</span>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
