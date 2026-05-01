import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IconCheck } from '../../../../shared/ui/icon';
import styles from '../SpDeepDive.module.css';
import branchImg from '../../../../assets/images/services-deep-dive-branch.png';

import spDesignImg from '../../../../assets/sp_design.png';
import spIntegrationImg from '../../../../assets/sp_integration.png';
import spAnalyticsImg from '../../../../assets/sp_analytics.png';

const getBlockClass = (id) => {
  switch (id) {
    case 'design-block': return styles.designBlock;
    case 'integration-block': return styles.integrationBlock;
    case 'analytics-block': return styles.analyticsBlock;
    default: return '';
  }
};

const SpDeepDive = ({ fadeUp, activeTabs, handleTabChange }) => {
  const { t } = useTranslation();
  const rawDeepDive = t('servicesPage.deepDive', { returnObjects: true });
  
  const ids = ['design-block', 'integration-block', 'analytics-block'];
  const tabIds = [
    ['analysis', 'design'],
    ['modules', 'inverters', 'mounting'],
    ['support', 'evolution']
  ];
  const images = [spDesignImg, spIntegrationImg, spAnalyticsImg];

  const blocks = rawDeepDive.blocks.map((b, i) => ({
    ...b,
    id: ids[i],
    image: images[i],
    tabs: b.tabs.map((tab, j) => ({
      ...tab,
      id: tabIds[i][j]
    }))
  }));

  return (
    <section className={styles.deepDive}>
      <div className={styles.branchWrapper}>
        <motion.img 
          src={branchImg} 
          alt="Natural Element" 
          className={styles.branch}
          initial={{ opacity: 0, x: 50, rotate: 5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1 }}
        />
      </div>
      <div className="container">
        <motion.div
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className={styles.headerContent}>
            <span className="section-label">{rawDeepDive.label}</span>
            <h2 className="section-title">{rawDeepDive.title}</h2>
            <p className={styles.intro}>
              {rawDeepDive.intro}
            </p>
          </div>
        </motion.div>

        <div className={styles.narrative}>
          {blocks.map((block) => {
            const activeTabId = activeTabs[block.id];
            const activeTab = block.tabs.find(t => t.id === activeTabId) || block.tabs[0];
            const blockClass = getBlockClass(block.id);

            return (
              <motion.div
                id={block.id}
                className={`${styles.cascadeBlock} ${blockClass}`}
                key={block.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className={styles.image}>
                  <img src={block.image} alt={block.id} />
                </div>

                <div className={styles.content}>
                  {/* ── Sub-menu (Tabs) ── */}
                  <div className={styles.meta}>
                    <span className={styles.phase}>Phase {block.phase}</span>
                    <div className={styles.tabs}>
                      {block.tabs.map(tab => (
                        <button
                          key={tab.id}
                          className={`${styles.tabBtn} ${activeTabId === tab.id ? styles.active : ''}`}
                          onClick={() => handleTabChange(block.id, tab.id)}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTabId}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className={styles.body}
                    >
                      <h2 className={styles.title}>{activeTab.title}</h2>
                      <p className={styles.text}>{activeTab.text}</p>

                      <div className={styles.footer}>
                        <ul className={styles.features}>
                          {activeTab.features.map((f, j) => (
                            <li key={j} className={styles.feature}>
                              <span className={styles.featureIcon}><IconCheck /></span>
                              {f}
                            </li>
                          ))}
                        </ul>

                        <div className={styles.statPill}>
                          <span className={styles.statValue}>{activeTab.stat.value}</span>
                          <span className={styles.statLabel}>{activeTab.stat.label}</span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpDeepDive;
