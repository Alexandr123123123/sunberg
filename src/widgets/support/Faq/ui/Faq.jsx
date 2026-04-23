import React from 'react';
import { motion } from 'framer-motion';
import { faqItems as defaultItems } from '../../../../shared/config/services/servicesData';
import { IconChevron } from '../../../../shared/ui/icon';
import { useFaqControl } from '../../../../features/faq-accordion-control';
import styles from '../Faq.module.css';

const Faq = ({ items = defaultItems, title = "Common questions", label = "Frequently asked", subtitle = "Everything you need to know before going solar.", fadeUp }) => {
  const { openId, toggleItem } = useFaqControl();

  return (
    <section className={styles.faq} id="faq">
      <div className="container">
        <motion.div
          className={styles.header}
          variants={fadeUp}
          initial={fadeUp ? "hidden" : false}
          whileInView={fadeUp ? "visible" : false}
          viewport={{ once: true }}
        >
          <span className="section-label">{label}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </motion.div>
        <div className={styles.list}>
          {items.map((item, i) => (
            <div
              className={`${styles.item}${openId === i ? ` ${styles.itemOpen}` : ''}`}
              key={i}
            >
              <button
                className={styles.question}
                onClick={() => toggleItem(i)}
              >
                {item.q}
                <span className={styles.icon}><IconChevron /></span>
              </button>
              <div className={styles.answer}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
