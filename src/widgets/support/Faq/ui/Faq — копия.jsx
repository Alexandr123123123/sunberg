import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IconChevron } from '../../../../shared/ui/icon';
import { useFaqControl } from '../../../../features/faq-accordion-control';
import styles from '../Faq.module.css';

const Faq = ({ items, title, label, subtitle, fadeUp }) => {
  const { openId, toggleItem } = useFaqControl();
  const { t } = useTranslation();

  const displayItems = items || t('faq.items', { returnObjects: true });
  const displayTitle = title || t('faq.title');
  const displayLabel = label || t('faq.label');
  const displaySubtitle = subtitle || t('faq.subtitle');

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
          <span className="section-label">{displayLabel}</span>
          <h2 className="section-title">{displayTitle}</h2>
          <p className="section-subtitle">{displaySubtitle}</p>
        </motion.div>
        <div className={styles.list}>
          {displayItems.map((item, i) => (
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
