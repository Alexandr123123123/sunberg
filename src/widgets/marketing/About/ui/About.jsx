import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../../../../assets/about.png';
import styles from '../About.module.css';

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.grid}>
          <motion.div 
            className={styles.contentCol}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="section-label">About Sunberg</span>
            <h2 className="section-title">Engineering a Cleaner Future, One Roof at a Time</h2>

            <div className={styles.body}>
              <div className={styles.description}>
                <p className={styles.text}>
                  <strong>Sunberg</strong> bridges high-performance engineering with sustainable design 
                  to construct the clean energy infrastructure of tomorrow. We believe the transition to 
                  renewables should be an effortless elevation of your property's value, not a complex compromise.
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <strong>Turnkey Solar Infrastructure</strong>
                    We manage the entire project lifecycle in-house. From structural analysis and custom 
                    system architecture to certified installation and direct grid integration — we leave 
                    no detail to third parties.
                  </li>
                  <li className={styles.listItem}>
                    <strong>Data-Driven Scalability</strong>
                    Whether powering a private residence or a multi-megawatt commercial facility, we deliver 
                    tier-1 hardware, precise yield calculations, and proactive monitoring to ensure decades 
                    of uninterrupted performance.
                  </li>
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
              <img src={aboutImg} alt="Sunberg engineering team" />
            </div>
            
            <div className={styles.milestones}>
              <div className={styles.milestone}>
                <span className={styles.milestoneNumber}>200+</span>
                <span className={styles.milestoneLabel}>Projects</span>
              </div>
              <div className={styles.milestone}>
                <span className={styles.milestoneNumber}>15 MW</span>
                <span className={styles.milestoneLabel}>Installed</span>
              </div>
              <div className={styles.milestone}>
                <span className={styles.milestoneNumber}>98%</span>
                <span className={styles.milestoneLabel}>Satisfaction</span>
              </div>
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
          <p className={styles.manifestoText}>
            “The shift to solar isn't just about preserving the planet—it's about smart, long-term 
            asset management. We are here to engineer that transition flawlessly.”
          </p>
          <span className={styles.signature}>Aleksey Sunberg, Founder</span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
