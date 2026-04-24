import React from 'react';
import { motion } from 'framer-motion';
import { Counter } from '../../../../shared/ui/Counter';
import styles from '../AbStats.module.css';

const stats = [
  { value: 12, unit: '+', label: 'Experience', desc: 'Years of industry leadership and technical expertise.' },
  { value: 500, unit: '+', label: 'Portfolio', desc: 'Successfully completed projects across Europe.' },
  { value: 25, unit: 'MW', label: 'Capacity', desc: 'Total solar power installed and managed globally.' },
  { value: 98, unit: '%', label: 'Trust', desc: 'Client satisfaction and recommendation rate.' }
];

export const AbStats = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              className={styles.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <span className={styles.label}>{stat.label}</span>
              <div className={styles.valueWrapper}>
                <div className={styles.value}>
                  <Counter value={stat.value} />
                </div>
                <span className={styles.unit}>{stat.unit}</span>
              </div>
              <p className={styles.subLabel}>{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
