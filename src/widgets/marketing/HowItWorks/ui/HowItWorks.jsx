import React from 'react';
import { motion } from 'framer-motion';
import styles from '../HowItWorks.module.css';
import leafImg from '../../../../assets/images/how-it-works-leaf.png';

const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'We discuss your energy goals, evaluate your property remotely, and provide an initial cost estimate — completely free.',
  },
  {
    num: '02',
    title: 'Site Survey & Design',
    desc: 'Our engineers visit your property, analyze roof orientation, shading, and structural capacity. We then create a custom system design.',
  },
  {
    num: '03',
    title: 'Installation',
    desc: 'Our certified crew installs your system in 1–3 days. We handle all permitting, inspections, and grid connection paperwork.',
  },
  {
    num: '04',
    title: 'Activation & Support',
    desc: 'Your system goes live and starts generating savings immediately. We provide 24/7 monitoring and ongoing maintenance support.',
  },
];

const HowItWorks = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className={styles.process} id="process">
      <div className={styles.leafWrapper}>
        <motion.img 
          src={leafImg} 
          alt="Natural Element" 
          className={styles.leaf}
          initial={{ opacity: 0, x: 30, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
      </div>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">How It Works</span>
          <h2 className="section-title">From Inquiry to Clean Energy in 4 Steps</h2>
          <p className="section-subtitle">
            We've streamlined every part of the process so you can focus on what matters — saving money and the planet.
          </p>
        </div>
        <motion.div 
          className={styles.steps}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step, i) => (
            <motion.div className={styles.step} key={i} variants={item}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepLine}></div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
