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
            <h2 className="section-title">Engineering a Cleaner Future</h2>

            <div className={styles.body}>
              <div className={styles.description}>
                <p className={styles.text}>
                  <strong>Sunberg</strong> bridges high-performance engineering with sustainable design 
                  to construct the clean energy infrastructure of tomorrow. We believe the transition to 
                  solar should be an effortless evolution—where professional system architecture 
                  eliminates the common pitfalls of mismatched components and inefficient design, 
                  ensuring absolute performance from day one.
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <strong>Turnkey Solar Infrastructure</strong>
                    We manage the entire lifecycle in-house—ensuring flawless system architecture and 
                    precision execution—to guarantee the highest standards of technical quality 
                    and long-term performance.
                  </li>
                  <li className={styles.listItem}>
                    <strong>Data-Driven Scalability</strong>
                    Delivering Tier-1 hardware and precise yield calculations for projects 
                    ranging from private residences to commercial facilities.
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
                <span className={styles.milestoneNumber}>Reliability</span>
              </div>
              <div className={styles.milestone}>
                <span className={styles.milestoneNumber}>Precision</span>
              </div>
              <div className={styles.milestone}>
                <span className={styles.milestoneNumber}>Innovation</span>
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
