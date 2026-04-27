import React from 'react';
import { motion } from 'framer-motion';
import styles from '../TrustStrip.module.css';

const stats = [
  {
    number: '2 TW',
    label: 'Cumulative Global Capacity',
  },
  {
    number: '55%',
    label: "China's Global Solar Share",
  },
  {
    number: '90%',
    label: 'Solar Cost Drop Since 2010',
  },
];

const TrustStrip = () => (
  <section className={styles.trustStrip}>
    <div className="container">
      <div className={styles.grid}>
        {stats.map((item, index) => (
          <motion.div 
            key={index}
            className={styles.item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <span className={styles.number}>{item.number}</span>
            <span className={styles.label}>{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;
