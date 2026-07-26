import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from '../InverterTypes.module.css';

export const InverterTypes = () => {
  const { t } = useTranslation();

  const advantages = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: t('techPage.inverterTypes.adv1.title', 'Conversion Efficiency'),
      desc: t('techPage.inverterTypes.adv1.desc', 'Up to 98.2% high conversion rate for minimal power loss.')
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: t('techPage.inverterTypes.adv2.title', 'Intelligent Monitoring'),
      desc: t('techPage.inverterTypes.adv2.desc', 'Module-level real-time tracking and performance diagnostics.')
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <rect x="7" y="7" width="10" height="10" />
        </svg>
      ),
      title: t('techPage.inverterTypes.adv3.title', 'Direct Battery Coupling'),
      desc: t('techPage.inverterTypes.adv3.desc', 'Seamless integration with high-voltage home battery storage.')
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: t('techPage.inverterTypes.adv4.title', 'All-Weather Durability'),
      desc: t('techPage.inverterTypes.adv4.desc', 'IP66 dust and waterproof enclosure designed for indoor/outdoor installations.')
    }
  ];

  return (
    <section className={styles.inverterTypes} id="inverters">
      <div className={styles.mainContainer}>

        {/* HEADER BLOCK */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <h1 className={styles.mainTitle}>Power Inverters</h1>
            <div className={styles.leafDivider}>
              <svg className={styles.leafIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 8C8 10 5.5 16 5 21C6.5 20.5 12 18 16 11C16.5 10 17 9 17 8Z" />
                <path d="M16 7C16 7 15.5 5 13 4C10.5 3 6 4.5 4 8C3.5 9 3.5 10 3.5 10C3.5 10 6 9.5 9 10C12 10.5 14 12 15 11C15.5 10.5 16 7 16 7Z" />
              </svg>
              <div className={styles.lineDivider}></div>
            </div>
            <p className={styles.headerSubtitle}>
              Convert DC power to safe AC power.<br />
              Maximize your home energy autonomy.
            </p>
          </div>
          <div className={styles.headerRight}></div>
        </div>

        {/* FEATURE PRESENTATION (Central Inverter & Orbit Icons) */}
        <div className={styles.presentationRow}>

          {/* Left Orbital Column */}
          <div className={styles.orbitalColumn}>
            <motion.div
              className={styles.orbitItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className={styles.orbitCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              </div>
              <span className={styles.orbitLabel}>High Efficiency</span>
            </motion.div>

            <motion.div
              className={styles.orbitItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className={styles.orbitCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <span className={styles.orbitLabel}>Monitoring</span>
            </motion.div>

            <motion.div
              className={styles.orbitItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className={styles.orbitCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span className={styles.orbitLabel}>Absolute Safety</span>
            </motion.div>
          </div>

          {/* Central Inverter Column */}
          <div className={styles.centerPanelColumn}>

            {/* Callout Card Left */}
            <motion.div
              className={`${styles.calloutCard} ${styles.calloutLeft}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className={styles.calloutBadge}>Cooling System</div>
              <h4 className={styles.calloutTitle}>Natural Dissipation</h4>
              <p className={styles.calloutText}>
                Anodized heat sinks ensure fan-less passive cooling, achieving silent operation and extreme durability.
              </p>
              <div className={styles.calloutNoseLeft}></div>
            </motion.div>

            {/* Floating Inverter */}
            <motion.div
              className={styles.panelWrapper}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/inverter_isolated.png"
                alt="Sunberg Premium Hybrid Inverter"
                className={styles.solarPanelImg}
              />
              <div className={styles.panelShadow}></div>
            </motion.div>

            {/* Callout Card Right */}
            <motion.div
              className={`${styles.calloutCard} ${styles.calloutRight}`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className={styles.calloutBadge}>Hybrid Energy</div>
              <h4 className={styles.calloutTitle}>Battery Ready</h4>
              <p className={styles.calloutText}>
                Directly connect high-voltage battery storage, controlling charge/discharge cycles in under 10ms.
              </p>
              <div className={styles.chartWrapper}>
                <div className={styles.chartBar} style={{ height: '40%' }}></div>
                <div className={styles.chartBar} style={{ height: '60%' }}></div>
                <div className={styles.chartBar} style={{ height: '80%' }}></div>
                <div className={styles.chartBar} style={{ height: '98%' }}></div>
              </div>
              <div className={styles.efficiencyValue}>98.2% Eff.</div>
              <div className={styles.calloutNoseRight}></div>
            </motion.div>

          </div>

          {/* Right Orbital Column */}
          <div className={styles.orbitalColumn}>
            <motion.div
              className={styles.orbitItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className={styles.orbitCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className={styles.orbitLabel}>Hybrid Mode</span>
            </motion.div>

            <motion.div
              className={styles.orbitItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className={styles.orbitCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className={styles.orbitLabel}>Active Cooling</span>
            </motion.div>

            <motion.div
              className={styles.orbitItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className={styles.orbitCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                  <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                  <circle cx="12" cy="12" r="2" />
                  <path d="M12 14v8" />
                </svg>
              </div>
              <span className={styles.orbitLabel}>Grid Integration</span>
            </motion.div>
          </div>

        </div>

        {/* BOTTOM AREA (Advantages left & Comparison table right) */}
        <div className={styles.bottomFlexRow}>

          {/* Left Column: Advantages & Button */}
          <div className={styles.advantagesColumn}>
            <div className={styles.advantagesList}>
              {advantages.map((adv, idx) => (
                <motion.div
                  key={idx}
                  className={styles.advantageItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <div className={styles.advIconWrapper}>{adv.icon}</div>
                  <div className={styles.advTextWrapper}>
                    <h3 className={styles.advTitle}>{adv.title}</h3>
                    <p className={styles.advDesc}>{adv.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className={styles.learnMoreBtn}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              Learn More →
            </motion.button>
          </div>

          {/* Right Column: Comparative Matrix Table */}
          <div className={styles.comparisonTableWrapper}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th className={styles.emptyTh}></th>
                  <th>
                    <div className={styles.modelHeader}>
                      <img src="/string_inverter_schematic.png" alt="String Inverter" className={styles.smallPanelImg} />
                      <span className={styles.modelName}>Standard</span>
                    </div>
                  </th>
                  <th>
                    <div className={styles.modelHeader}>
                      <img src="/hybrid_inverter_schematic.png" alt="Hybrid Inverter" className={styles.smallPanelImg} />
                      <span className={styles.modelName}>Performance</span>
                    </div>
                  </th>
                  <th className={styles.premiumTh}>
                    <div className={styles.modelHeader}>
                      <img src="/microinverter_schematic.png" alt="Micro Inverter" className={styles.smallPanelImg} />
                      <span className={styles.modelName}>Premium</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.propLabel}>Maximum Output</td>
                  <td>6 kW</td>
                  <td>10 kW</td>
                  <td className={styles.premiumTd}>15 kW</td>
                </tr>
                <tr>
                  <td className={styles.propLabel}>Peak Efficiency</td>
                  <td>97.8%</td>
                  <td>98.2%</td>
                  <td className={styles.premiumTd}>96.5%</td>
                </tr>
                <tr>
                  <td className={styles.propLabel}>Warranty</td>
                  <td>10 years</td>
                  <td>12 years</td>
                  <td className={styles.premiumTd}>25 years</td>
                </tr>
                <tr>
                  <td className={styles.propLabel}>Shade Tolerance</td>
                  <td>Average</td>
                  <td>Good</td>
                  <td className={styles.premiumTd}>Excellent</td>
                </tr>
                <tr>
                  <td className={styles.propLabel}>Battery Integration</td>
                  <td>External Charger</td>
                  <td>Direct DC Coupling</td>
                  <td className={styles.premiumTd}>AC Coupling</td>
                </tr>
                <tr>
                  <td className={styles.propLabel}>Intelligent Monitoring</td>
                  <td>String level</td>
                  <td>MPPT level</td>
                  <td className={styles.premiumTd}>Module level</td>
                </tr>
                <tr>
                  <td className={styles.propLabel}>Passive Cooling</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td className={styles.premiumTd}>Yes</td>
                </tr>
                <tr>
                  <td className={styles.propLabel}>Protection Rating</td>
                  <td>IP65</td>
                  <td>IP66</td>
                  <td className={styles.premiumTd}>IP67</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        {/* BOTTOM DECORATION ELEMENT */}
        <div className={styles.bottomDecorationRow}>
          <div className={styles.decorationLineWrapper}>
            <div className={styles.decorationHalfLine}></div>
            <svg className={styles.bottomLeafIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8C8 10 5.5 16 5 21C6.5 20.5 12 18 16 11C16.5 10 17 9 17 8Z" />
              <path d="M16 7C16 7 15.5 5 13 4C10.5 3 6 4.5 4 8C3.5 9 3.5 10 3.5 10C3.5 10 6 9.5 9 10C12 10.5 14 12 15 11C15.5 10.5 16 7 16 7Z" />
            </svg>
            <div className={styles.decorationHalfLine}></div>
          </div>
          <span className={styles.decorationCaption}>Powering a cleaner tomorrow.</span>
        </div>

      </div>
    </section>
  );
};
