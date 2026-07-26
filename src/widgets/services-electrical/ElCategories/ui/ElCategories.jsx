import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from '../ElCategories.module.css';
import decorImg from '../../../../assets/images/el-expertise-decoration.png';
import { useBookingModal } from '../../../../app/providers/BookingModalProvider';

import wiringImg from '../../../../assets/electrical/wiring.png';
import switchboardsImg from '../../../../assets/electrical/switchboards.png';
import heatingImg from '../../../../assets/electrical/heating.png';
import smartHomeImg from '../../../../assets/electrical/smart-home.png';
import lightingImg from '../../../../assets/electrical/lighting.png';
import spaImg from '../../../../assets/electrical/spa.png';
import backupPowerImg from '../../../../assets/electrical/backup-power.png';
import alternativeEnergyImg from '../../../../assets/electrical/alternative-energy.png';
import evChargingImg from '../../../../assets/electrical/ev-charging.png';
import securityImg from '../../../../assets/electrical/security.png';

const categoryDefs = [
  {
    key: 'wiring',
    image: wiringImg,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="7" y="8" width="10" height="8" rx="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 8V3M14 8V3M12 16v5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    key: 'switchboards',
    image: switchboardsImg,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 3v18M15 3v18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 9h6M9 15h6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    key: 'heating',
    image: heatingImg,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    key: 'smartHome',
    image: smartHomeImg,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    key: 'lighting',
    image: lightingImg,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    key: 'spa',
    image: spaImg,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21.5c-3.5 0-6.5-3-6.5-6.5 0-4.5 6.5-12.5 6.5-12.5s6.5 8 6.5 12.5c0 3.5-3 6.5-6.5 6.5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    key: 'backupPower',
    image: backupPowerImg,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    key: 'alternativeEnergy',
    image: alternativeEnergyImg,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="1" x2="12" y2="4" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="20" x2="12" y2="23" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="1" y1="12" x2="4" y2="12" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="20" y1="12" x2="23" y2="12" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    key: 'evCharging',
    image: evChargingImg,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="4" width="8" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 9h2a3 3 0 0 1 3 3v2a3 3 0 0 0 3 3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="20" y="15" width="2" height="4" rx="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10h4M8 14h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    key: 'security',
    image: securityImg,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
];

export const ElCategories = () => {
  const { t } = useTranslation();
  const { openModal } = useBookingModal();
  const [activeIndex, setActiveIndex] = useState(0);
  const [showTopArrow, setShowTopArrow] = useState(false);
  const [showBottomArrow, setShowBottomArrow] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const itemRefs = useRef([]);
  const rightColRef = useRef(null);

  const categories = categoryDefs.map((c, i) => ({
    ...c,
    number: String(i + 1).padStart(2, '0'),
    title: t(`electricalPage.categories.${c.key}.title`),
    desc: t(`electricalPage.categories.${c.key}.desc`),
    mainDesc: t(`electricalPage.categories.${c.key}.mainDesc`),
    g1: t(`electricalPage.categories.${c.key}.g1`),
    g2: t(`electricalPage.categories.${c.key}.g2`),
    g3: t(`electricalPage.categories.${c.key}.g3`),
    g4: t(`electricalPage.categories.${c.key}.g4`),
  }));

  const setItemRef = useCallback((el, index) => {
    itemRefs.current[index] = el;
  }, []);

  const updateScrollIndicators = () => {
    if (rightColRef.current) {
      const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } = rightColRef.current;
      setShowTopArrow(scrollTop > 5);
      setShowBottomArrow(scrollHeight - scrollTop - clientHeight > 5);
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollWidth - scrollLeft - clientWidth > 5);
    }
  };

  useEffect(() => {
    updateScrollIndicators();
    const timer = setTimeout(updateScrollIndicators, 100);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } = e.target;
    setShowTopArrow(scrollTop > 5);
    setShowBottomArrow(scrollHeight - scrollTop - clientHeight > 5);
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollWidth - scrollLeft - clientWidth > 5);
  };

  const scrollUp = () => {
    if (rightColRef.current) {
      rightColRef.current.scrollBy({
        top: -120,
        behavior: 'smooth'
      });
    }
  };

  const scrollDown = () => {
    if (rightColRef.current) {
      rightColRef.current.scrollBy({
        top: 120,
        behavior: 'smooth'
      });
    }
  };

  const scrollListHorizontal = (direction) => {
    if (rightColRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      rightColRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleItemClick = (index) => {
    setActiveIndex(index);
    const el = itemRefs.current[index];
    const container = rightColRef.current;
    if (el && container) {
      if (window.innerWidth <= 900) {
        const containerWidth = container.clientWidth;
        const elOffsetLeft = el.offsetLeft;
        const elWidth = el.offsetWidth;
        const targetScrollLeft = elOffsetLeft - (containerWidth / 2) + (elWidth / 2);
        
        container.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth'
        });
      } else {
        const containerHeight = container.clientHeight;
        const elOffsetTop = el.offsetTop;
        const elHeight = el.offsetHeight;
        const targetScrollTop = elOffsetTop - (containerHeight / 2) + (elHeight / 2);
        
        container.scrollTo({
          top: targetScrollTop,
          behavior: 'smooth'
        });
      }
    }
  };

  const active = categories[activeIndex];

  return (
    <section className={styles.categories}>
      <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
        <defs>
          <linearGradient id="iconGrad0" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="#9900FF" />
          </linearGradient>
          <linearGradient id="iconGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9900FF" />
            <stop offset="100%" stopColor="#FF007F" />
          </linearGradient>
          <linearGradient id="iconGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF6A00" />
            <stop offset="100%" stopColor="#FF0000" />
          </linearGradient>
          <linearGradient id="iconGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0066FF" />
            <stop offset="100%" stopColor="#00FFFF" />
          </linearGradient>
          <linearGradient id="iconGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFE600" />
            <stop offset="100%" stopColor="#FF9900" />
          </linearGradient>
          <linearGradient id="iconGrad5" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00FFCC" />
            <stop offset="100%" stopColor="#0066FF" />
          </linearGradient>
          <linearGradient id="iconGrad6" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFCC00" />
            <stop offset="100%" stopColor="#FF3300" />
          </linearGradient>
          <linearGradient id="iconGrad7" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00FF66" />
            <stop offset="100%" stopColor="#CCFF00" />
          </linearGradient>
          <linearGradient id="iconGrad8" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ADFF2F" />
            <stop offset="100%" stopColor="#00FFCC" />
          </linearGradient>
          <linearGradient id="iconGrad9" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4B0082" />
            <stop offset="100%" stopColor="#0066FF" />
          </linearGradient>
        </defs>
      </svg>
      <div className="container" style={{ position: 'relative' }}>
        {/* Decorative image on the top right, above Expertise list */}
        <img src={decorImg} className={styles.headerDecoration} alt="Decor" />

        <div className={styles.header}>
          <span className="section-label">{t('electricalPage.categoriesSection.label')}</span>
          <h2 className="section-title">{t('electricalPage.categoriesSection.title')}</h2>
          <p className="section-subtitle">{t('electricalPage.categoriesSection.desc')}</p>
        </div>

        <div className={styles.splitContainer}>
          <div className={styles.leftCol}>
            <div className={styles.stickyHeader}>
              <div className={styles.activePreview}>
                <div className={styles.activeImageContainer}>
                  {/* Left watermark icons */}
                  <svg className={`${styles.watermarkIcon} ${styles.resistor}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 2,12 h 3 l 2,-4 l 4,8 l 4,-8 l 4,8 l 2,-4 h 3" />
                  </svg>
                  
                  <svg className={`${styles.watermarkIcon} ${styles.diode}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 4,12 h 5 M 9,6 l 7,6 l -7,6 z M 16,6 v 12 M 16,12 h 6" />
                  </svg>
                  
                  <svg className={`${styles.watermarkIcon} ${styles.bulb}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="6" />
                    <path d="M 7.8,7.8 L 16.2,16.2 M 7.8,16.2 L 16.2,7.8" strokeWidth="1.6" />
                  </svg>
                  
                  {/* Right watermark icons */}
                  <svg className={`${styles.watermarkIcon} ${styles.capacitor}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 2,12 h 7 M 9,5 v 14 M 15,5 v 14 M 15,12 h 7" />
                  </svg>
                  
                  <svg className={`${styles.watermarkIcon} ${styles.acSource}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="6" />
                    <path d="M 9,12 c 1,-2 2,-2 3,0 s 2,2 3,0" />
                  </svg>
                  
                  <svg className={`${styles.watermarkIcon} ${styles.ground}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M 12,4 v 8 M 4,12 h 16 M 7,16 h 10 M 10,20 h 4" />
                  </svg>
                  
                  <div className={styles.activeImageWrapper}>
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={active.key}
                        src={active.image}
                        alt={active.title}
                        className={styles.activeImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    </AnimatePresence>
                  </div>
                </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className={styles.activeText}
                >
                  <h3 className={styles.activeTitle}>
                    <span className={styles.activeTitleIcon}>
                      {React.cloneElement(active.icon, { stroke: `url(#iconGrad${activeIndex})` })}
                    </span>
                    {active.title}
                  </h3>
                  <p className={styles.activeDesc}>{active.mainDesc}</p>
                  
                  <div className={styles.termsGrid}>
                    <div className={styles.termItem}>
                      <span className={styles.termDot}></span>
                      <span className={styles.termLabel}>{active.g1}</span>
                    </div>
                    <div className={styles.termItem}>
                      <span className={styles.termDot}></span>
                      <span className={styles.termLabel}>{active.g2}</span>
                    </div>
                    <div className={styles.termItem}>
                      <span className={styles.termDot}></span>
                      <span className={styles.termLabel}>{active.g3}</span>
                    </div>
                    <div className={styles.termItem}>
                      <span className={styles.termDot}></span>
                      <span className={styles.termLabel}>{active.g4}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className={styles.rightColWrapper}>
          <div className={styles.listContainer}>
            <AnimatePresence>
              {showTopArrow && (
                <motion.div
                  className={`${styles.scrollIndicator} ${styles.topIndicator}`}
                  initial={{ opacity: 0, x: "-50%", y: 0 }}
                  animate={{ 
                    opacity: 1, 
                    x: "-50%", 
                    y: [0, -5, 0]
                  }}
                  exit={{ opacity: 0, x: "-50%" }}
                  transition={{
                    y: {
                      repeat: Infinity,
                      duration: 1.8,
                      ease: "easeInOut"
                    },
                    opacity: { duration: 0.25 }
                  }}
                  onClick={scrollUp}
                >
                  <svg viewBox="0 0 60 24" width="80" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 15l24-10 24 10" />
                    <path d="M6 22l24-10 24 10" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Edge fade overlays to cue scrolling */}
            <div className={`${styles.fadeOverlay} ${styles.fadeLeft} ${canScrollLeft ? styles.fadeActive : ''}`} />
            <div className={`${styles.fadeOverlay} ${styles.fadeRight} ${canScrollRight ? styles.fadeActive : ''}`} />

            {/* Left and Right navigation buttons for mobile scrolling */}
            <button 
              className={`${styles.navButton} ${styles.navLeft} ${canScrollLeft ? styles.navVisible : ''}`}
              onClick={() => scrollListHorizontal('left')}
              aria-label="Scroll left"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <button 
              className={`${styles.navButton} ${styles.navRight} ${canScrollRight ? styles.navVisible : ''}`}
              onClick={() => scrollListHorizontal('right')}
              aria-label="Scroll right"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <div className={styles.rightCol} ref={rightColRef} onScroll={handleScroll}>
              <div className={styles.list}>
                {categories.map((cat, index) => (
                  <div
                    key={cat.key}
                    ref={(el) => setItemRef(el, index)}
                    className={`${styles.listItem} ${activeIndex === index ? styles.listItemActive : ''}`}
                    onClick={() => handleItemClick(index)}
                  >
                    <div className={styles.listIcon}>
                      {React.cloneElement(cat.icon, { stroke: `url(#iconGrad${index})` })}
                    </div>
                    <div className={styles.listContent}>
                      <h3 className={styles.listTitle}>{cat.title}</h3>
                    </div>
                    <div className={styles.listChevron}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <AnimatePresence>
              {showBottomArrow && (
                <motion.div
                  className={`${styles.scrollIndicator} ${styles.bottomIndicator}`}
                  initial={{ opacity: 0, x: "-50%", y: 0 }}
                  animate={{ 
                    opacity: 1, 
                    x: "-50%", 
                    y: [0, 5, 0]
                  }}
                  exit={{ opacity: 0, x: "-50%" }}
                  transition={{
                    y: {
                      repeat: Infinity,
                      duration: 1.8,
                      ease: "easeInOut"
                    },
                    opacity: { duration: 0.25 }
                  }}
                  onClick={scrollDown}
                >
                  <svg viewBox="0 0 60 24" width="80" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l24 10 24-10" />
                    <path d="M6 2l24 10 24-10" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Team Card at the bottom right */}
          <div className={styles.teamCard}>
            <div className={styles.teamCardIconWrapper}>
              <div className={styles.teamCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
            </div>
            <div className={styles.teamCardContent}>
              <h4 className={styles.teamCardTitle}>{t('electricalPage.categoriesSection.teamCard.title')}</h4>
              <p className={styles.teamCardDesc}>{t('electricalPage.categoriesSection.teamCard.desc')}</p>
              <button className={styles.teamCardButton} onClick={() => {
                if (openModal) {
                  openModal();
                } else {
                  const contactBtn = document.querySelector('[class*="BookConsultationButton"]');
                  if (contactBtn) contactBtn.click();
                }
              }}>
                {t('electricalPage.categoriesSection.teamCard.btn')} &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};
