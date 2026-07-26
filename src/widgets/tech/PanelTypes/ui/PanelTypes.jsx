import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from '../PanelTypes.module.css';

export const PanelTypes = () => {
  const { t } = useTranslation();

  const advantages = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: t('techPage.panelTypes.adv1.title', 'High Power Output'),
      desc: t('techPage.panelTypes.adv1.desc', 'Up to 550W for maximum energy yield.')
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: t('techPage.panelTypes.adv2.title', 'Long Warranty'),
      desc: t('techPage.panelTypes.adv2.desc', '25 years product & performance warranty.')
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ),
      title: t('techPage.panelTypes.adv3.title', 'Low-Light Performance'),
      desc: t('techPage.panelTypes.adv3.desc', 'Excellent energy generation even on cloudy days.')
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10A10 10 0 0 0 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: t('techPage.panelTypes.adv4.title', 'Sustainable Choice'),
      desc: t('techPage.panelTypes.adv4.desc', 'Eco-friendly manufacturing and 100% recyclable modules.')
    }
  ];

  return (
    <section className={styles.panelTypes} id="panels">
      <div className={styles.mainContainer}>
        
        {/* HEADER BLOCK */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <h1 className={styles.mainTitle}>Solar Panels</h1>
            <div className={styles.leafDivider}>
              <svg className={styles.leafIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 8C8 10 5.5 16 5 21C6.5 20.5 12 18 16 11C16.5 10 17 9 17 8Z" />
                <path d="M16 7C16 7 15.5 5 13 4C10.5 3 6 4.5 4 8C3.5 9 3.5 10 3.5 10C3.5 10 6 9.5 9 10C12 10.5 14 12 15 11C15.5 10.5 16 7 16 7Z" />
              </svg>
              <div className={styles.lineDivider}></div>
            </div>
            <p className={styles.headerSubtitle}>
              Capture more sunlight. Generate clean energy.<br />
              Built for performance. Designed for the future.
            </p>
          </div>
          <div className={styles.headerRight}></div>
        </div>

        {/* FEATURE PRESENTATION (Central Panel & Orbit Icons) */}
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span className={styles.orbitLabel}>Durability</span>
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
                  <path d="M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10A10 10 0 0 0 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
              </div>
              <span className={styles.orbitLabel}>Sustainability</span>
            </motion.div>
          </div>

          {/* Central Panel Column */}
          <div className={styles.centerPanelColumn}>
            
            {/* Callout Card Left */}
            <motion.div 
              className={`${styles.calloutCard} ${styles.calloutLeft}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className={styles.calloutBadge}>TOPCon Tech</div>
              <h4 className={styles.calloutTitle}>Next-Gen Silicon</h4>
              <p className={styles.calloutText}>
                Tunnel Oxide Passivated Contact cells minimize recombination, setting new benchmarks in output.
              </p>
              <div className={styles.calloutNoseLeft}></div>
            </motion.div>

            {/* Floating Solar Panel */}
            <motion.div 
              className={styles.panelWrapper}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="/solar_panel_isolated.png" 
                alt="Sunberg Premium Solar Panel" 
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
              <div className={styles.calloutBadge}>High Efficiency</div>
              <h4 className={styles.calloutTitle}>Maximize Yield</h4>
              <p className={styles.calloutText}>
                Our solar panels deliver industry-leading efficiency with higher energy yield even in limited sunlight.
              </p>
              <div className={styles.chartWrapper}>
                <div className={styles.chartBar} style={{ height: '30%' }}></div>
                <div className={styles.chartBar} style={{ height: '50%' }}></div>
                <div className={styles.chartBar} style={{ height: '70%' }}></div>
                <div className={styles.chartBar} style={{ height: '90%' }}></div>
              </div>
              <div className={styles.efficiencyValue}>Up to 22.8%</div>
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
                  <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
                  <line x1="8" y1="16" x2="8" y2="22" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                  <line x1="16" y1="16" x2="16" y2="20" />
                </svg>
              </div>
              <span className={styles.orbitLabel}>Weather Resistant</span>
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
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <span className={styles.orbitLabel}>Low Maintenance</span>
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
                  <path d="M14 14.75V3.5a2.5 2.5 0 0 0-5 0v11.25a4.5 4.5 0 1 0 5 0z" />
                </svg>
              </div>
              <span className={styles.orbitLabel}>Temperature Tolerance</span>
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
                      <img src="/solar_panel_isolated.png" alt="Standard Panel" className={styles.smallPanelImg} />
                      <span className={styles.modelName}>Standard</span>
                    </div>
                  </th>
                  <th>
                    <div className={styles.modelHeader}>
                      <img src="/solar_panel_isolated.png" alt="Performance Panel" className={styles.smallPanelImg} />
                      <span className={styles.modelName}>Performance</span>
                    </div>
                  </th>
                  <th className={styles.premiumTh}>
                    <div className={styles.modelHeader}>
                      <img src="/solar_panel_isolated.png" alt="Premium Panel" className={styles.smallPanelImg} />
                      <span className={styles.modelName}>Premium</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.propLabel}>Maximum Power</td>
                  <td>320W</td>
                  <td>420W</td>
                  <td className={styles.premiumTd}>550W</td>
                </tr>
                <tr>
                  <td className={styles.propLabel}>Module Efficiency</td>
                  <td>19.2%</td>
                  <td>21.4%</td>
                  <td className={styles.premiumTd}>22.8%</td>
                </tr>
                <tr>
                  <td className={styles.propLabel}>Warranty</td>
                  <td>10 years</td>
                  <td>15 years</td>
                  <td className={styles.premiumTd}>25 years</td>
                </tr>
                <tr>
                  <td className={styles.propLabel}>Temperature Coefficient</td>
                  <td>-0.40%/°C</td>
                  <td>-0.34%/°C</td>
                  <td className={styles.premiumTd}>-0.30%/°C</td>
                </tr>
                <tr>
                  <td className={styles.propLabel}>Performance Warranty</td>
                  <td>90% (10 yrs)</td>
                  <td>92% (12 yrs)</td>
                  <td className={styles.premiumTd}>95% (25 yrs)</td>
                </tr>
                <tr>
                  <td className={styles.propLabel}>Degradation (Year 1)</td>
                  <td>≤ 2%</td>
                  <td>≤ 1.5%</td>
                  <td className={styles.premiumTd}>≤ 1%</td>
                </tr>
                <tr>
                  <td className={styles.propLabel}>Degradation (Annual)</td>
                  <td>≤ 0.55%</td>
                  <td>≤ 0.45%</td>
                  <td className={styles.premiumTd}>≤ 0.30%</td>
                </tr>
                <tr>
                  <td className={styles.propLabel}>Low-Light Performance</td>
                  <td>
                    <div className={styles.dotIndicator}>
                      <span className={styles.dotActive}></span>
                      <span className={styles.dotActive}></span>
                      <span></span>
                      <span></span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.dotIndicator}>
                      <span className={styles.dotActive}></span>
                      <span className={styles.dotActive}></span>
                      <span className={styles.dotActive}></span>
                      <span></span>
                    </div>
                  </td>
                  <td className={styles.premiumTd}>
                    <div className={styles.dotIndicator}>
                      <span className={styles.dotActive}></span>
                      <span className={styles.dotActive}></span>
                      <span className={styles.dotActive}></span>
                      <span className={styles.dotActive}></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className={styles.propLabel}>Frame Thickness</td>
                  <td>35 mm</td>
                  <td>35 mm</td>
                  <td className={styles.premiumTd}>40 mm</td>
                </tr>
                <tr>
                  <td className={styles.propLabel}>Weight</td>
                  <td>19 kg</td>
                  <td>21.5 kg</td>
                  <td className={styles.premiumTd}>22.5 kg</td>
                </tr>
                <tr>
                  <td className={styles.propLabel}>Dimensions</td>
                  <td>1722×1134 mm</td>
                  <td>1908×1134 mm</td>
                  <td className={styles.premiumTd}>2278×1134 mm</td>
                </tr>
                <tr>
                  <td className={styles.propLabel}>Cell Type</td>
                  <td>PERC</td>
                  <td>TOPCon</td>
                  <td className={styles.premiumTd}>HJT</td>
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
