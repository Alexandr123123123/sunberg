import React from 'react';
import { motion } from 'framer-motion';
import styles from '../AbTestimonials.module.css';
import avatar1 from '../../../../assets/images/clients/avatar1.png';
import avatar2 from '../../../../assets/images/clients/avatar2.png';
import avatar3 from '../../../../assets/images/clients/avatar3.png';

const testimonials = [
  {
    id: 1,
    content: "Sunberg's architectural approach to solar was exactly what we needed for our heritage property. They respected the design while delivering cutting-edge efficiency.",
    author: "Lars Svensson",
    role: "Private Homeowner",
    avatar: avatar1
  },
  {
    id: 2,
    content: "The level of precision in their engineering is unmatched. Our industrial facility now runs on 100% clean energy with zero downtime during the transition.",
    author: "Ingrid Berg",
    role: "Operations Director, EcoLogistics",
    avatar: avatar2
  },
  {
    id: 3,
    content: "Working with Erik and his team was a seamless experience. They don't just sell panels; they design long-term energy independence.",
    author: "Anders Holm",
    role: "Founder, Nordic Heights",
    avatar: avatar3
  }
];

export const AbTestimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
