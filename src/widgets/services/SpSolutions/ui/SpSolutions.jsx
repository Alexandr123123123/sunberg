import React from 'react';
import { motion } from 'framer-motion';
import { specializedSolutions } from '../../../../entities/services/model/servicesData';
import { IconCheck } from '../../../../shared/ui/icon';
import { Button } from '../../../../shared/ui/Button';
import styles from '../SpSolutions.module.css';

const SpSolutions = ({ fadeUp }) => (
  <section className={styles.solutions}>
    <div className="container">
      <motion.div
        className={styles.header}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="section-label">Sector Specialization</span>
        <h2 className="section-title">High-Performance Solutions</h2>
      </motion.div>
      <div className={styles.grid}>
        {specializedSolutions.map((sol, i) => (
          <motion.div
            className={styles.card}
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            custom={i}
          >
            <div className={styles.icon}>{sol.icon}</div>
            <h3 className={styles.title}>{sol.title}</h3>
            <p className={styles.desc}>{sol.desc}</p>
            <ul className={styles.list}>
              {sol.list.map((item, j) => (
                <li key={j} className={styles.item}>
                  <IconCheck />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* ── Inline CTA (Integrated & Refined) ── */}
      <div className={styles.ctaWrapper}>
        <motion.div 
          className={styles.ctaInner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.ctaGrid}>
            <div className={styles.ctaStat}>48H</div>
            
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to harness the power of the sun?</h2>
              <p className={styles.ctaDesc}>
                Get a free, no-obligation site assessment and custom solar proposal.
              </p>
            </div>
            
            <Button variant="primary" size="lg" uppercase>
              Get a Free Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SpSolutions;
