import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../../../shared/config/projects/projectsData';
import styles from '../PrTestimonials.module.css';

export const PrTestimonials = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <motion.span 
            className={styles.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Client Voices
          </motion.span>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((t) => (
            <motion.div className={styles.card} key={t.id} variants={itemVariants}>
              <div className={styles.quoteIcon}>“</div>
              <p className={styles.content}>{t.content}</p>
              
              <div className={styles.footer}>
                <img src={t.avatar} alt={t.author} className={styles.avatar} />
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{t.author}</span>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
