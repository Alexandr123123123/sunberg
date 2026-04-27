import React from 'react';
import { motion } from 'framer-motion';
import { Counter } from '../../../../shared/ui/Counter';
import styles from '../AbStats.module.css';

const stats = [
  { value: 500, unit: 'B$', label: 'Capital Shift', desc: "Annual global investment in solar power has surpassed $500 billion, outstripping all other generation sources." },
  { value: 600, unit: 'GW', label: 'Annual Growth', desc: 'Total solar power capacity added to the global grid in the last 12 months.' },
  { value: 64, unit: '%', label: 'Market Surge', desc: 'Growth rate of new solar installations in early 2025 compared to 2024.' },
  { value: 100, unit: '%', label: 'Demand Engine', desc: 'Solar and wind met the entirety of new global electricity demand in 2025.' }
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
