import React from 'react';
import { motion } from 'framer-motion';
import { floatovoltaicsData } from '../../../../shared/config/services/servicesData';
import styles from '../SpFloatBanner.module.css';

export const SpFloatBanner = () => (
  <section className={styles.banner}>
    <div className={styles.bg}>
      <img src={floatovoltaicsData.image} alt={floatovoltaicsData.title} />
      <div className={styles.overlay}></div>
    </div>

    <div className="container">
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.main}>
          <span className="section-label text-white">Innovation Focus</span>
          <h2 className={styles.title}>
            {floatovoltaicsData.title.split(' ')[0]} <span className="text-primary">{floatovoltaicsData.title.split(' ')[1]}</span>
          </h2>
          <p className={styles.desc}>
            {floatovoltaicsData.desc}
          </p>
        </div>

        <div className={styles.stats}>
          {floatovoltaicsData.stats.map((stat, idx) => (
            <div key={idx} className={styles.stat}>
              <span className={styles.val}>{stat.value}</span>
              <span className={styles.lab}>{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
