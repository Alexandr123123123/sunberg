import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import flagshipImg from '../../../../assets/images/featured-flagship.png';
import styles from '../PrFeatured.module.css';

export const PrFeatured = () => {
  const containerRef = useRef(null);
  const { t } = useTranslation();
  const featured = t('projectsPage.featured', { returnObjects: true });
  
  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  return (
    <section className={styles.featured} ref={containerRef}>
      <motion.div className={styles.bgWrapper} style={{ y }}>
        <img src={flagshipImg} alt={featured.title} className={styles.bg} />
      </motion.div>
      <div className={styles.overlay}></div>

      <div className="container">
        <div className={styles.content}>
          <motion.div 
            className={styles.meta}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.location}>{featured.location}</span>
            <h2 className={styles.title}>{featured.title}</h2>
          </motion.div>

          <motion.div 
            className={styles.quoteWrapper}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className={styles.quote}>"{featured.quote}"</p>
            <span className={styles.author}>— {featured.author}</span>
          </motion.div>

          <div className={styles.specs}>
            {featured.specs.map((spec, i) => (
              <motion.div 
                key={i} 
                className={styles.specItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
              >
                <span className={styles.specVal}>{spec.value}</span>
                <span className={styles.specLab}>{spec.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
