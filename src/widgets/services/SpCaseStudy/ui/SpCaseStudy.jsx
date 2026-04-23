import React from 'react';
import { motion } from 'framer-motion';
import { caseStudyData } from '../../../../shared/config/services/servicesData';
import { IconArrowRight } from '../../../../shared/ui/icon';
import styles from '../SpCaseStudy.module.css';

const SpCaseStudy = ({ fadeUp }) => (
  <section className={styles.case}>
    <div className="container">
      <motion.div
        className={styles.header}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="section-label">Featured Project</span>
        <h2 className="section-title">Proven in the Field</h2>
      </motion.div>
      <motion.div
        className={styles.card}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className={styles.image}>
          <img src={caseStudyData.image} alt={caseStudyData.title} />
          <div className={styles.imageOverlay}></div>
        </div>
        <div className={styles.body}>
          <div className={styles.meta}>
            <h3 className={styles.title}>{caseStudyData.title}</h3>
            <span className={styles.location}>{caseStudyData.location}</span>
          </div>
          <p className={styles.desc}>{caseStudyData.description}</p>
          <div className={styles.metrics}>
            {caseStudyData.metrics.map((m, i) => (
              <div className={styles.metric} key={i}>
                <span className={styles.metricValue}>
                  {m.value}<span className={styles.metricUnit}>{m.unit}</span>
                </span>
                <span className={styles.metricLabel}>{m.label}</span>
              </div>
            ))}
          </div>
          <a href="/#projects" className={styles.link}>
            <span>View all projects</span>
            <IconArrowRight />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SpCaseStudy;
