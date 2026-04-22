import React from 'react';
import { motion } from 'framer-motion';
import { serviceSectors } from '../../../../entities/services/model/servicesData';
import { IconArrowRight } from '../../../../shared/ui/icon';
import styles from '../SpSectors.module.css';

const SpSectors = ({ fadeUp, scrollToSection }) => (
  <section className={styles.sectors}>
    <div className="container">
      <div className={styles.grid}>
        {serviceSectors.map((sector, i) => (
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
              Подробнее <IconArrowRight />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SpSectors;
