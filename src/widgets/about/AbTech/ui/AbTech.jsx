import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import techBg from '../../../../assets/images/ab-tech-bg.png';
import styles from '../AbTech.module.css';

export const AbTech = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className={styles.section} ref={ref}>
      <motion.div className={styles.bg} style={{ y }}>
        <img src={techBg} alt="European nature with solar integration" />
      </motion.div>
      <div className={styles.overlay} />

      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.main}>
            <span className="section-label text-white">Engineering Focus</span>
            <h2 className={styles.title}>N-Type <span className="text-primary">TOPCon</span> Efficiency</h2>
            <p className={styles.desc}>
              Next-generation Tunnel Oxide Passivated Contact modules achieving
              unmatched conversion rates and long-term stability.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.val}>22.5%</span>
              <span className={styles.lab}>Peak Efficiency</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.val}>-0.4%</span>
              <span className={styles.lab}>Yearly Degradation</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.val}>30Y</span>
              <span className={styles.lab}>Linear Warranty</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
