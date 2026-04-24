import React from 'react';
import { motion } from 'framer-motion';
import { IconDesign, IconIntegration, IconAnalytics, IconStorage } from '../../../../shared/ui/icon/Icons';
import styles from '../AbValues.module.css';

const values = [
  {
    title: 'Structural Respect',
    desc: 'Engineering that honors the existing architecture, ensuring seamless integration of solar technology with built environments.',
    icon: <IconDesign />
  },
  {
    title: 'Environmental Stewardship',
    desc: 'Deep commitment to preserving natural resources and minimizing the carbon footprint of every energy project we undertake.',
    icon: <IconIntegration />
  },
  {
    title: 'Nordic Precision',
    desc: 'Swedish engineering standards applied to every calculation, ensuring maximum yield and unmatched system longevity.',
    icon: <IconAnalytics />
  },
  {
    title: 'Ecosystem Mindset',
    desc: 'Building intelligent energy networks that function as unified ecosystems, providing stability and autonomy for decades.',
    icon: <IconStorage />
  }
];

export const AbValues = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {values.map((val, i) => (
            <motion.div 
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={styles.iconWrapper}>
                {val.icon}
              </div>
              <h3 className={styles.title}>{val.title}</h3>
              <p className={styles.desc}>{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
