import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IconResidential, IconCommercial, IconStorage, IconCheck } from '../../../../shared/ui/icon/Icons';
import { CtaBlock } from '../../../marketing/CtaBlock';
import styles from '../SpSolutions.module.css';

const icons = [<IconResidential />, <IconCommercial />, <IconStorage />];

const SpSolutions = ({ fadeUp }) => {
  const { t } = useTranslation();
  const rawSolutions = t('servicesPage.solutions', { returnObjects: true });
  const items = rawSolutions.items.map((sol, i) => ({
    ...sol,
    icon: icons[i]
  }));

  return (
    <section className={styles.solutions}>
      <div className="container">
        <motion.div
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="section-label">{rawSolutions.label}</span>
          <h2 className="section-title">{rawSolutions.title}</h2>
        </motion.div>
        <div className={styles.grid}>
          {items.map((sol, i) => (
            <motion.div
              className={styles.card}
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i}
            >
              <div className={styles.icon}>{sol.icon}</div>
              <h3 className={styles.title}>{sol.title}</h3>
              <p className={styles.desc}>{sol.desc}</p>
              <ul className={styles.list}>
                {sol.list.map((item, j) => (
                  <li key={j} className={styles.item}>
                    <IconCheck />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── Inline CTA (Integrated & Refined) ── */}
        <div style={{ marginTop: '80px' }}>
          <CtaBlock 
            noWrapper={true}
            variant="dark"
          />
        </div>
      </div>
    </section>
  );
};

export default SpSolutions;
