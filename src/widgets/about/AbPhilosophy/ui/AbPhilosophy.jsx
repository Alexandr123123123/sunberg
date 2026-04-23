import React from 'react';
import { motion } from 'framer-motion';
import styles from '../AbPhilosophy.module.css';

const principles = [
  {
    title: 'Structural Respect',
    text: 'We don’t just mount systems; we integrate them. Every design respects the architectural integrity and aesthetic flow of your property.'
  },
  {
    title: 'Longevity First',
    text: 'We engineer for the decades, not the years. Our systems are built to outlast a generation using the most resilient materials and components.'
  },
  {
    title: 'Ecosystem Mindset',
    text: 'Environmental stewardship is at our core. We minimize carbon footprint at every stage of the engineering and installation process.'
  }
];

export const AbPhilosophy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.label}>Our Philosophy</span>
            <h2 className={styles.title}>
              Beyond Installation: <br />
              Architectural Integrity.
            </h2>
            <p className={styles.desc}>
              We believe that solar energy should enhance, not compromise, 
              the aesthetic and structural value of your property. Our approach 
              combines Swedish minimalist design with rigorous engineering standards.
            </p>
          </motion.div>

          <motion.div 
            className={styles.principles}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {principles.map((p, i) => (
              <motion.div className={styles.principle} key={i} variants={itemVariants}>
                <h3 className={styles.principleTitle}>{p.title}</h3>
                <p className={styles.principleText}>{p.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
