import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../ConnectionSchemes.module.css';

// Generic Inline SVGs for the nodes
const IconSun = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>
  </svg>
);

const IconPanel = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path>
  </svg>
);

const IconInverter = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="20" x="4" y="2" rx="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 10h.01"></path><path d="M12 10h.01"></path><path d="M16 10h.01"></path>
  </svg>
);

const IconHome = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const IconGrid = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20"></path><path d="M17 12H7"></path><path d="M22 22H2"></path><path d="m6 22 6-20"></path><path d="m18 22-6-20"></path>
  </svg>
);

const IconBattery = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="10" x="4" y="7" rx="2"></rect><path d="M22 11v2"></path><path d="M8 12h2"></path><path d="M14 12h.01"></path>
  </svg>
);

export const ConnectionSchemes = () => {
  const { t } = useTranslation();
  const [activeMode, setActiveMode] = useState('grid-tied');
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  
  let rawSchemes = t('techPage.connectionSchemes.schemes', { returnObjects: true });
  const schemes = Array.isArray(rawSchemes) ? rawSchemes : [];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Debug fallback
  if (schemes.length === 0) {
    return (
      <div style={{ padding: '100px', background: 'red', color: 'white' }}>
        DEBUG: ConnectionSchemes not found in translations.
        Raw value: {JSON.stringify(rawSchemes)}
      </div>
    );
  }

  const activeData = schemes.find(s => s.id === activeMode) || schemes[0];

  // Which nodes are active in the current mode
  const isBatteryActive = activeMode === 'off-grid' || activeMode === 'hybrid';
  const isGridActive = activeMode === 'grid-tied' || activeMode === 'hybrid';

  // For connecting paths, we use percentages so it scales with container
  // Paths:
  // Sun -> Panel
  // Panel -> Inverter
  // Inverter -> Home
  // Inverter -> Grid (if active)
  // Inverter -> Battery (if active)
  // Battery -> Home (if offgrid/hybrid)
  
  // We define dynamic SVG paths based on desktop/mobile
  const getPath = (start, end) => {
    if (isMobile) {
      const coords = {
        sun: {x: '50%', y: '10%'},
        panel: {x: '50%', y: '25%'},
        inverter: {x: '50%', y: '45%'},
        home: {x: '50%', y: '65%'},
        battery: {x: '30%', y: '85%'},
        grid: {x: '70%', y: '85%'},
      };
      return `M ${coords[start].x} ${coords[start].y} L ${coords[end].x} ${coords[end].y}`;
    } else {
      const coords = {
        sun: {x: '15%', y: '20%'},
        panel: {x: '15%', y: '50%'},
        inverter: {x: '38%', y: '50%'},
        home: {x: '62%', y: '50%'},
        grid: {x: '85%', y: '20%'},
        battery: {x: '62%', y: '80%'},
      };
      
      // For grid and battery we draw nice L-shaped paths instead of direct diagonal lines
      if (start === 'inverter' && end === 'grid') {
         return `M ${coords.inverter.x} ${coords.inverter.y} L ${coords.grid.x} ${coords.inverter.y} L ${coords.grid.x} ${coords.grid.y}`;
      }
      if (start === 'inverter' && end === 'battery') {
         return `M ${coords.inverter.x} ${coords.inverter.y} L ${coords.inverter.x} ${coords.battery.y} L ${coords.battery.x} ${coords.battery.y}`;
      }
      if (start === 'battery' && end === 'home') {
         return `M ${coords.battery.x} ${coords.battery.y} L ${coords.home.x} ${coords.home.y}`;
      }
      
      return `M ${coords[start].x} ${coords[start].y} L ${coords[end].x} ${coords[end].y}`;
    }
  };

  const renderPath = (start, end, active) => {
    return (
      <svg className={styles.svgLayer} width="100%" height="100%">
        <path 
          d={getPath(start, end)} 
          className={`${styles.pathLine} ${active ? styles.pathLineActive : ''}`} 
        />
        {active && (
          <motion.circle
            r="4"
            fill="var(--color-accent, #B09270)"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ offsetPath: `path('${getPath(start, end)}')` }}
          />
        )}
      </svg>
    );
  };

  return (
    <section className={styles.connectionSchemes} id="architecture">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">{t('techPage.connectionSchemes.label', 'System Architecture')}</span>
          <h2 className="section-title">{t('techPage.connectionSchemes.title', 'How the Energy Flows')}</h2>
          <p className="section-subtitle">{t('techPage.connectionSchemes.desc', 'Understand how different configurations distribute and manage power.')}</p>
        </div>

        <div className={styles.tabsContainer}>
          {schemes.map((scheme) => (
            <button
              key={scheme.id}
              className={`${styles.tabButton} ${activeMode === scheme.id ? styles.activeTab : ''}`}
              onClick={() => setActiveMode(scheme.id)}
            >
              {scheme.name}
            </button>
          ))}
        </div>

        <div className={styles.diagramContainer} ref={containerRef}>
          
          {/* Paths */}
          {renderPath('sun', 'panel', true)}
          {renderPath('panel', 'inverter', true)}
          {renderPath('inverter', 'home', true)}
          {renderPath('inverter', 'grid', isGridActive)}
          {renderPath('inverter', 'battery', isBatteryActive)}
          {renderPath('battery', 'home', isBatteryActive)}

          {/* Nodes */}
          <div className={styles.nodesArea}>
            <div className={`${styles.node} ${styles.nodeSun}`}>
              <IconSun />
              <span className={styles.nodeLabel}>Sun</span>
            </div>
            
            <div className={`${styles.node} ${styles.nodePanel}`}>
              <IconPanel />
              <span className={styles.nodeLabel}>Panels</span>
            </div>
            
            <div className={`${styles.node} ${styles.nodeInverter}`}>
              <IconInverter />
              <span className={styles.nodeLabel}>Inverter</span>
            </div>
            
            <div className={`${styles.node} ${styles.nodeHome}`}>
              <IconHome />
              <span className={styles.nodeLabel}>Home</span>
            </div>
            
            <div className={`${styles.node} ${styles.nodeGrid} ${!isGridActive ? styles.nodeInactive : ''}`}>
              <IconGrid />
              <span className={styles.nodeLabel}>Utility Grid</span>
            </div>
            
            <div className={`${styles.node} ${styles.nodeBattery} ${!isBatteryActive ? styles.nodeInactive : ''}`}>
              <IconBattery />
              <span className={styles.nodeLabel}>Battery</span>
            </div>
          </div>

          <div className={styles.descArea}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className={styles.descTitle}>{activeData?.name}</h3>
                <p className={styles.descText}>{activeData?.desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
