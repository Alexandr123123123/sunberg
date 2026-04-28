import React from 'react';
import { motion } from 'framer-motion';
import styles from '../TechHistory.module.css';
import leafImg from '../../../../assets/images/ab-organic-accent.png';

const milestones = [
  { val: '1839', lab: 'Edmond Becquerel discovers the photovoltaic effect.', pos: { gridArea: '1 / 2 / 2 / 4' } },
  { val: '1883', lab: 'Charles Fritts builds the first selenium-based solar cell.', pos: { gridArea: '1 / 9 / 2 / 11', marginTop: '20px' } },
  { val: '1958', lab: 'Vanguard I becomes the first solar-powered satellite.', pos: { gridArea: '2 / 5 / 3 / 7' } },
  { val: '1954', lab: 'Bell Labs creates the first practical silicon solar cell.', pos: { gridArea: '3 / 2 / 4 / 4' } },
  { val: '1973', lab: 'Construction of the first solar-powered residence.', pos: { gridArea: '3 / 10 / 4 / 13', marginTop: '40px' } },
  { val: '2023', lab: 'Global solar capacity reaches a historic 1.5 TW milestone.', pos: { gridArea: '4 / 5 / 5 / 7' } }
];

export const TechHistory = () => {
  return (
    <section className={styles.section}>
      <div className="container">


        <div className={styles.grid}>
          {milestones.map((item, i) => (
            <motion.div
              key={i}
              className={styles.milestone}
              style={item.pos}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
            >
              <div className={styles.leafContainer}>
                <img src={leafImg} alt="" className={styles.leaf} />
              </div>
              <div className={styles.card}>
                <div className={styles.val}>{item.val}</div>
                <p className={styles.lab}>{item.lab}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
