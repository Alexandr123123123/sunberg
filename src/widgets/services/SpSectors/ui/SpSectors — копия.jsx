import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IconDesign, IconIntegration, IconAnalytics } from '../../../../shared/ui/icon/Icons';
import { IconArrowRight } from '../../../../shared/ui/icon';
import styles from '../SpSectors.module.css';

const icons = [<IconDesign />, <IconIntegration />, <IconAnalytics />];
const targetIds = ['design-block', 'integration-block', 'analytics-block'];

const SpSectors = ({ fadeUp, scrollToSection }) => {
  const { t } = useTranslation();
  const rawSectors = t('servicesPage.sectors', { returnObjects: true });
  const sectors = rawSectors.map((s, i) => ({
    ...s,
    icon: icons[i],
    targetId: targetIds[i]
  }));

  return (
    <section className={styles.sectors}>
      <div className="container">
        <div className={styles.grid}>
          {sectors.map((sector, i) => (
            <motion.div
              className={styles.card}
              key={i}
              data-index={`0${i + 1}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i}
              onClick={() => scrollToSection(sector.targetId)}
            >
              <div className={styles.icon}>{sector.icon}</div>
              <h3 className={styles.title}>{sector.title}</h3>
              <p className={styles.desc}>{sector.desc}</p>
              <div className={styles.link}>
                {t('servicesPage.sectorsBtn')} <IconArrowRight />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpSectors;
