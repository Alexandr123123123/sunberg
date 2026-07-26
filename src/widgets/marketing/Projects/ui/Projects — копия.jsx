import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import agriImg from '../../../../assets/project_agri_field.png';
import floatingImg from '../../../../assets/project_floating_real.png';
import { Button } from '../../../../shared/ui/Button';
import styles from '../Projects.module.css';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.fullWidthGrid}>
        <motion.div 
          className={styles.projectCard}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={agriImg} alt="Agrivoltaics" className={styles.bgImage} />
          <div className={styles.overlay}>
            <div className={styles.content}>
              <span className={styles.tag}>{t('projects.p1_tag')}</span>
              <h3 className={styles.title}>{t('projects.p1_title')}</h3>
              <p className={styles.desc}>
                {t('projects.p1_desc')}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.projectCard}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={floatingImg} alt="Floating Solar" className={styles.bgImage} />
          <div className={styles.overlay}>
            <div className={styles.content}>
              <span className={styles.tag}>{t('projects.p2_tag')}</span>
              <h3 className={styles.title}>{t('projects.p2_title')}</h3>
              <p className={styles.desc}>
                {t('projects.p2_desc')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
