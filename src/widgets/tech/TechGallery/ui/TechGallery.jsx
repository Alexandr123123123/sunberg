import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../TechGallery.module.css';

import imgBattery from '../../../../assets/comp_battery.png';
import imgSafety from '../../../../assets/comp_safety.png';
import imgMounting from '../../../../assets/comp_mounting.png';
import imgInverter from '../../../../assets/comp_inverter.png';

export const TechGallery = () => {
  useEffect(() => {
    const adjustHeights = () => {
      const headerRows = document.querySelectorAll(`.${styles.leftBlock} .${styles.cardHeaderRow}`);
      const subtitles = document.querySelectorAll(`.${styles.leftBlock} .${styles.leftmostCardSubtitle}`);
      
      // Reset heights first to get natural wrapper size
      headerRows.forEach(el => el.style.height = 'auto');
      subtitles.forEach(el => el.style.height = 'auto');

      // Only align on desktop (width > 768px)
      if (window.innerWidth > 768) {
        let maxHeaderHeight = 0;
        headerRows.forEach(el => {
          const h = el.offsetHeight;
          if (h > maxHeaderHeight) maxHeaderHeight = h;
        });

        let maxSubtitleHeight = 0;
        subtitles.forEach(el => {
          const h = el.offsetHeight;
          if (h > maxSubtitleHeight) maxSubtitleHeight = h;
        });

        headerRows.forEach(el => el.style.height = `${maxHeaderHeight}px`);
        subtitles.forEach(el => el.style.height = `${maxSubtitleHeight}px`);
      }
    };

    // Run on mount and window resize
    adjustHeights();
    window.addEventListener('resize', adjustHeights);
    window.addEventListener('load', adjustHeights);
    if (document.fonts) {
      document.fonts.ready.then(adjustHeights);
    }
    
    // Fallback timer for fully settled layouts
    const timer = setTimeout(adjustHeights, 200);

    return () => {
      window.removeEventListener('resize', adjustHeights);
      window.removeEventListener('load', adjustHeights);
      clearTimeout(timer);
    };
  }, []);

  const galleryPhotos = [
    {
      id: 1,
      image: imgBattery,
      title: "Battery Storage",
      width: 1
    },
    {
      id: 2,
      image: imgSafety,
      title: "Safety & Fuses",
      width: 1
    },
    {
      id: 3,
      image: imgMounting,
      title: "Mounting System",
      width: 1
    },
    {
      id: 4,
      image: imgInverter,
      title: "Inverter",
      width: 2.45
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=800&auto=format&fit=crop",
      title: "Solar Panels",
      width: 2.45
    }
  ];

  return (
    <section className={styles.techGallerySection}>
      <div className="container">
        <div className={styles.galleryGrid}>

          {/* Left Container */}
          <div className={styles.leftBlock}>
            <div className={styles.headerArea}>
              <span className={styles.sectionLabel}>Core Engineering</span>
              <h2 className={styles.sectionTitle}>System Architecture</h2>
            </div>

            <div className={styles.photoRow}>
              {galleryPhotos.slice(0, 3).map((photo, idx) => {
                const isLeftmost = idx === 0;

                return (
                  <motion.div
                    key={photo.id}
                    className={isLeftmost ? styles.leftmostContainer : styles.standardContainer}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.galleryItemLeftmost}>
                      <img src={photo.image} alt={photo.title} className={styles.galleryImg} />
                    </div>

                    {/* Inner White Card */}
                    <div className={styles.leftmostInnerCard}>
                      <div className={styles.cardHeaderRow}>
                        <div className={`${styles.leftmostIcon} ${styles.largeIcon}`}>
                          {idx === 0 && (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="2" y="2" width="20" height="20" rx="4" />
                              <line x1="9" y1="22" x2="9" y2="2" />
                              <line x1="15" y1="22" x2="15" y2="2" />
                              <line x1="2" y1="9" x2="22" y2="9" />
                              <line x1="2" y1="15" x2="22" y2="15" />
                            </svg>
                          )}
                          {idx === 1 && (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="3" y="3" width="18" height="18" rx="2" />
                              <path d="M21 12H3" />
                            </svg>
                          )}
                          {idx === 2 && (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 2v20" />
                              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                          )}
                        </div>
                        <h4 className={styles.leftmostCardTitle}>{photo.title}</h4>
                      </div>
                      <p className={styles.leftmostCardSubtitle}>
                        {idx === 0 && "Lithium battery backup"}
                        {idx === 1 && "Rapid shutdown & protection"}
                        {idx === 2 && "Pitched & flat roof mounts"}
                      </p>
                      <a href={`#${photo.id === 1 ? 'storage' : photo.id === 2 ? 'safety' : 'mounting'}`} className={`${styles.learnMoreBtn} ${styles.compactBtn}`}>
                        Learn More <span className={styles.arrow}>&gt;</span>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Container */}
          <div className={styles.rightBlock}>
            <div className={styles.rightBlockInner}>
              {galleryPhotos.slice(3).map((photo, idx) => {
                const isTopRight = idx === 0;
                if (isTopRight) {
                  return (
                    <motion.div
                      key={photo.id}
                      className={styles.topRightItem}
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={styles.topRightImgWrapper}>
                        <img src={photo.image} alt={photo.title} className={styles.galleryImg} />
                      </div>

                      {/* Floating Bridge White Card */}
                      <div className={styles.topRightInnerCard}>
                        <div className={styles.cardHeaderRow}>
                          <div className={`${styles.leftmostIcon} ${styles.largeIcon}`}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polygon points="12 2 2 7 12 12 22 7 12 2" />
                              <polyline points="2 17 12 22 22 17" />
                              <polyline points="2 12 17 22 12" />
                            </svg>
                          </div>
                          <h4 className={styles.leftmostCardTitle}>Inverter</h4>
                        </div>
                        <p className={styles.leftmostCardSubtitle}>The brain of the system. Converts DC power to AC and manages smart grid synchronization.</p>
                        <a href="#inverters" className={styles.learnMoreBtn}>
                          Learn More <span className={styles.arrow}>&gt;</span>
                        </a>
                      </div>
                    </motion.div>
                  );
                }

                // Bottom right item: equal height photo container
                return (
                  <motion.div
                    key={photo.id}
                    className={`${styles.galleryItem} ${styles.bottomRightItem}`}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={photo.image} alt={photo.title} className={styles.galleryImg} />

                    {/* Glassmorphic Inner Card */}
                    <div className={styles.glassInnerCard}>
                      <div className={styles.cardHeaderRow}>
                        <div className={`${styles.glassIcon} ${styles.largeIcon}`}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                          </svg>
                        </div>
                        <h4 className={styles.glassCardTitle}>Solar Panels</h4>
                      </div>
                      <p className={styles.glassCardSubtitle}>High-efficiency TOPCon cells</p>
                      <a href="#panels" className={`${styles.learnMoreBtn} ${styles.compactBtn}`}>
                        Learn More <span className={styles.arrow}>&gt;</span>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
