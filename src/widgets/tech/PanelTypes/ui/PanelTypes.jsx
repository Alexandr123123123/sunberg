import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../PanelTypes.module.css';

export const PanelTypes = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  // Safely get arrays
  const headers = t('techPage.panelTypes.table.headers', { returnObjects: true }) || [];
  const rows = t('techPage.panelTypes.table.rows', { returnObjects: true }) || [];
  const technologies = t('techPage.panelTypes.technologies', { returnObjects: true }) || [];

  return (
    <section className={styles.panelTypes} id="panels">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">{t('techPage.panelTypes.label', 'Photovoltaic Modules')}</span>
          <h2 className="section-title">{t('techPage.panelTypes.title', 'The Core Engine of Independence')}</h2>
          <p className="section-subtitle">{t('techPage.panelTypes.desc', 'Not all solar panels are created equal...')}</p>
        </div>

        <div className={styles.content}>
          {Array.isArray(technologies) && technologies.length > 0 && (
            <div className={styles.techShowcase}>
              
              <div className={styles.tabsHeaderRow}>
                <div className={styles.tabsContainer}>
                  {technologies.map((tech, idx) => (
                    <button
                      key={tech.id}
                      className={`${styles.tabButton} ${activeTab === idx ? styles.activeTab : ''}`}
                      onClick={() => setActiveTab(idx)}
                    >
                      {tech.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.flushCard}>
                <div className={styles.imageCol}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className={styles.techImageWrapper}
                    >
                      <img src={technologies[activeTab].image} alt={technologies[activeTab].name} className={styles.techImage} />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className={styles.textCol}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className={styles.techDetails}
                    >
                      <h3>{technologies[activeTab].name} Technology</h3>
                      <p>{technologies[activeTab].desc}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

            </div>
          )}

          <div className={styles.tableWrapper}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  {Array.isArray(headers) && headers.map((header, idx) => (
                    <th key={idx}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.isArray(rows) && rows.map((row, idx) => (
                  <motion.tr
                    key={idx}
                    className={row.isPremium ? styles.premiumRow : ''}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <td className={styles.techName}>
                      {row.tech}
                      {row.isPremium && <span className={styles.premiumBadge}>Premium</span>}
                    </td>
                    <td className={styles.highlightCol}>{row.eff}</td>
                    <td>{row.deg}</td>
                    <td>{row.temp}</td>
                    <td>{row.best}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
