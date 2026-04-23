import React, { useEffect, useState, useRef } from 'react';
import { motion, animate, useInView } from 'framer-motion';
import { impactStats } from '../../../../shared/config/projects/projectsData';
import styles from '../PrImpact.module.css';

const Counter = ({ value, duration = 2 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        onUpdate: (latest) => setDisplayValue(latest),
        ease: [0.16, 1, 0.3, 1] // Custom quintic ease out
      });
      return () => controls.stop();
    }
  }, [value, duration, isInView]);

  return <span ref={nodeRef}>{displayValue.toLocaleString(undefined, { 
    minimumFractionDigits: value % 1 !== 0 ? 1 : 0,
    maximumFractionDigits: 1 
  })}</span>;
};

export const PrImpact = () => {
  return (
    <section className={styles.impact}>
      <div className="container">
        <div className={styles.grid}>
          {impactStats.map((stat, i) => (
            <motion.div 
              key={stat.id}
              className={styles.statCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <span className={styles.label}>{stat.label}</span>
              <div className={styles.valueWrapper}>
                <div className={styles.value}>
                  <Counter value={stat.value} />
                </div>
                <span className={styles.unit}>{stat.unit}</span>
              </div>
              <p className={styles.desc}>{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
