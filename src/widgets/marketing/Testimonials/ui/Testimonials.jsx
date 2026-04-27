import React from 'react';
import { motion } from 'framer-motion';
import styles from '../Testimonials.module.css';

const testimonials = [
  {
    text: "Sunberg made going solar effortless. From the first call to flipping the switch, everything was handled professionally. Our energy bills dropped by 78% in the first quarter.",
    name: 'Sarah Mitchell',
    role: 'Homeowner, Austin TX',
    rating: 5,
  },
  {
    text: "We needed a reliable partner for our office park installation. Sunberg delivered a 340 kW system on schedule and under budget. Their monitoring platform is outstanding.",
    name: 'Erik Johansson',
    role: 'Facilities Director, Lumina Estate Group',
    rating: 5,
  },
  {
    text: "What impressed me most was the transparency. No hidden costs, no surprises. The system has been running flawlessly for two years now, and their support team is always responsive.",
    name: 'Maria García',
    role: 'Homeowner, Barcelona',
    rating: 5,
  },
];

const Testimonials = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Client Stories</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <motion.div 
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((t, i) => (
            <motion.div className={styles.card} key={i} variants={item}>
              <div className={styles.quoteIcon}>“</div>
              <blockquote className={styles.text}>{t.text}</blockquote>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{t.name}</span>
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

export default Testimonials;
