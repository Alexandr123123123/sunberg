import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../../../../../assets/about.png';
import { aboutContent } from '../../model/content';
import styles from './AboutDesktop.module.css';

export const AboutDesktop = ({ fadeUp }) => {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <motion.div 
          className={styles.headerArea}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="section-label">{aboutContent.label}</span>
          <h2 className="section-title">{aboutContent.title}</h2>
        </motion.div>

        <div className={styles.grid}>
          <motion.div 
            className={styles.contentCol}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className={styles.body}>
              <div className={styles.description}>
                <p className={styles.text}>
                  <strong>Sunberg</strong> {aboutContent.description}
                </p>
                <ul className={styles.list}>
                  {aboutContent.points.map((point, index) => (
                    <li key={index} className={styles.listItem}>
                      <strong>{point.title}</strong>
                      {point.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.imageCol}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className={styles.image}>
              <img src={aboutImg} alt="Sunberg engineering" />
            </div>

            <div className={styles.milestones}>
              {aboutContent.milestones.map((milestone, index) => (
                <div key={index} className={styles.milestone}>
                  <span className={styles.milestoneNumber}>{milestone}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className={styles.manifesto}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className={styles.manifestoText}>{aboutContent.manifesto.text}</p>
          <span className={styles.signature}>{aboutContent.manifesto.signature}</span>
        </motion.div>
      </div>
    </section>
  );
};
