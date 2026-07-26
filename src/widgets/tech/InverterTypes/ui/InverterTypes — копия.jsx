import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from '../InverterTypes.module.css';

export const InverterTypes = () => {
  const { t } = useTranslation();

  // Safely get arrays
  const headers = t('techPage.inverterTypes.table.headers', { returnObjects: true }) || [];
  const rows = t('techPage.inverterTypes.table.rows', { returnObjects: true }) || [];
  const technologies = t('techPage.inverterTypes.technologies', { returnObjects: true }) || [];

  const getImagePath = (id) => {
    switch (id) {
      case 'string':
        return '/string_inverter_schematic.png';
      case 'micro':
        return '/microinverter_schematic.png';
      case 'hybrid':
        return '/hybrid_inverter_schematic.png';
      default:
        return '';
    }
  };

  return (
    <section className={styles.panelTypes} id="inverters">
      <div className="container">
        
        {/* Header Block */}
        <div className={styles.header}>
          <span className="section-label">{t('techPage.inverterTypes.label', 'Power Inverters')}</span>
          <h2 className="section-title">{t('techPage.inverterTypes.title', 'Inverters')}</h2>
          <p className="section-subtitle">{t('techPage.inverterTypes.desc', 'Reliable conversion components. Can maximize your home energy autonomy, converting DC power to safe AC power to store or use.')}</p>
        </div>

        {/* Alternating row-by-row structure with central divider */}
        <div className={styles.alternatingRows}>
          {Array.isArray(technologies) && technologies.map((tech, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={tech.id}
                className={`${styles.row} ${isEven ? styles.normalRow : styles.reverseRow}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Left Column */}
                <div className={styles.leftCol}>
                  {isEven ? (
                    <div className={styles.imageBlock}>
                      <img src={getImagePath(tech.id)} alt={tech.name} className={styles.schematicImg} />
                    </div>
                  ) : (
                    <div className={styles.textBlock}>
                      <h3 className={styles.techTitle}>{tech.name}</h3>
                      <p className={styles.techDesc}>{tech.desc}</p>
                    </div>
                  )}
                </div>

                {/* Right Column */}
                <div className={styles.rightCol}>
                  {!isEven ? (
                    <div className={styles.imageBlock}>
                      <img src={getImagePath(tech.id)} alt={tech.name} className={styles.schematicImg} />
                    </div>
                  ) : (
                    <div className={styles.textBlock}>
                      <h3 className={styles.techTitle}>{tech.name}</h3>
                      <p className={styles.techDesc}>{tech.desc}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Comparison Table */}
        <div className={styles.tableSection}>
          <h3 className={styles.tableTitle}>Technical Comparison</h3>
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
                    <td className={styles.highlightCol}>{row.cost}</td>
                    <td>{row.shade}</td>
                    <td>{row.battery}</td>
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
