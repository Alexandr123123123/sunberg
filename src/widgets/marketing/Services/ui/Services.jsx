import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import designImg from '../../../../assets/service_design.png';
import installImg from '../../../../assets/service_install.png';
import maintainImg from '../../../../assets/service_maintain.png';
import styles from '../Services.module.css';

const services = [
  {
    num: '01',
    title: 'Architecture & Engineering',
    text: 'Custom solar system design based on site mechanics, energy goals, and architectural flow. We manage structural analysis and complete permitting.',
    image: designImg,
  },
  {
    num: '02',
    title: 'Deployment & Grid Integration',
    text: 'Precision panel mounting, inverter calibration, and flawless grid integration. We prioritize operational speed and technical rigor, maintaining uncompromising safety standards across every project.',
    image: installImg,
  },
  {
    num: '03',
    title: 'Endurance & Optimization',
    text: 'Proactive system monitoring, automated diagnostics, and rapid-response maintenance, ensuring your asset performs optimally for decades.',
    image: maintainImg,
  },
];

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Services = () => (
  <section className={styles.services} id="services">
    <div className="container">
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-label">What We Do</span>
        <h2 className="section-title">Full-Cycle Solar Solutions</h2>
        <p className="section-subtitle">
          From the first sketch to proactive lifetime optimization — we handle every
          step of your solar journey.
        </p>
      </motion.div>
      <div className={styles.grid}>
        {services.map((s, i) => (
          <motion.div
            className={styles.card}
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className={styles.cardImage}>
              <img src={s.image} alt={s.title} />
              <div className={styles.cardOverlay}></div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardWatermark}>{s.num}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.text}</p>
              <Link to="/services" className={styles.cardFooter} style={{ textDecoration: 'none' }}>
                <span className={styles.cardLink}>Explore</span>
                <span className={styles.cardIcon}><ArrowRight /></span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
