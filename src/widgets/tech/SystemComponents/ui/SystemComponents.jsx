import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from '../SystemComponents.module.css';

import imgPanels from '../../../../assets/comp_panels.png';
import imgInverter from '../../../../assets/comp_inverter.png';
import imgBattery from '../../../../assets/comp_battery.png';
import imgMounting from '../../../../assets/comp_mounting.png';
import imgSafety from '../../../../assets/comp_safety.png';

export const SystemComponents = () => {
  const { t } = useTranslation();

  const handleScrollTo = (id) => {
    // In the future this will scroll to the specific sections like PanelTypes, InverterTypes etc.
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cards = [
    { id: 'panels', key: 'panel', image: imgPanels },
    { id: 'inverters', key: 'inverter', image: imgInverter },
    { id: 'storage', key: 'battery', image: imgBattery },
    { id: 'safety', key: 'fuses', image: imgSafety },
    { id: 'mounting', key: 'mounting', image: imgMounting },
  ];

  return (
    <section className={styles.systemComponents}>
      <div className={`container ${styles.splitContainer}`}>
        <div className={styles.leftCol}>
          <div className={styles.stickyHeader}>
            <span className="section-label">{t('techPage.systemComponents.label')}</span>
            <h2 className="section-title">{t('techPage.systemComponents.title')}</h2>
            <p className="section-subtitle">{t('techPage.systemComponents.desc')}</p>
          </div>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.list}>
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className={styles.listItem}
                onClick={() => handleScrollTo(card.id)}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.listImageWrapper}>
                  <img src={card.image} alt={card.key} className={styles.listImage} />
                </div>
                <div className={styles.listContent}>
                  <h3 className={styles.listTitle}>
                    {t(`techPage.systemComponents.cards.${card.key}.title`)}
                  </h3>
                  <p className={styles.listDesc}>
                    {t(`techPage.systemComponents.cards.${card.key}.desc`)}
                  </p>
                </div>
                <div className={styles.listAction}>
                  <span>{t('common.learnMore', 'Learn more')}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
