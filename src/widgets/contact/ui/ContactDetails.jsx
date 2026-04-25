import React from 'react';
import { motion } from 'framer-motion';
import styles from './ContactDetails.module.css';

const contactItems = [
  {
    icon: '✆',
    label: 'Phone',
    value: '+1 (512) 000-0000',
    link: 'tel:+15120000000'
  },
  {
    icon: '✉',
    label: 'Email',
    value: 'hello@sunberg.energy',
    link: 'mailto:hello@sunberg.energy'
  },
  {
    icon: '⌖',
    label: 'Office',
    value: '201 Solar Way, Austin, TX 78701',
    link: 'https://maps.google.com'
  }
];

export const ContactDetails = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {contactItems.map((item, index) => (
            <motion.a 
              href={item.link}
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              target={item.label === 'Office' ? '_blank' : undefined}
              rel={item.label === 'Office' ? 'noopener noreferrer' : undefined}
            >
              <div className={styles.icon}>{item.icon}</div>
              <div className={styles.info}>
                <span className={styles.label}>{item.label}</span>
                <div className={styles.value}>{item.value}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
