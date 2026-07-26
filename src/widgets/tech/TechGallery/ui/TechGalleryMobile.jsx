import React from 'react';
import { motion } from 'framer-motion';
import styles from '../TechGalleryMobile.module.css';

import imgBattery from '../../../../assets/comp_battery.png';
import imgSafety from '../../../../assets/comp_safety.png';
import imgMounting from '../../../../assets/comp_mounting.png';
import imgInverter from '../../../../assets/comp_inverter.png';

export const TechGalleryMobile = () => {
  const galleryPhotos = [
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=800&auto=format&fit=crop",
      title: "Solar Panels",
      subtitle: "High-efficiency TOPCon cells",
      anchor: "panels"
    },
    {
      id: 2,
      image: imgSafety,
      title: "Safety & Fuses",
      subtitle: "Rapid shutdown & protection",
      anchor: "safety"
    },
    {
      id: 4,
      image: imgInverter,
      title: "Inverter",
      subtitle: "Smart power conversion",
      anchor: "inverters"
    },
    {
      id: 1,
      image: imgBattery,
      title: "Battery Storage",
      subtitle: "Lithium battery backup",
      anchor: "storage"
    },
    {
      id: 3,
      image: imgMounting,
      title: "Mounting System",
      subtitle: "Pitched & flat roof mounts",
      anchor: "mounting"
    }
  ];

  return (
    <section className={styles.techGalleryMobileSection}>
      <div className="container">
        <div className={styles.mobileGrid}>

          {/* Left Column Container */}
          <div className={styles.leftCol}>

            {/* Part 1: Header Text */}
            <div className={styles.headerArea}>
              <span className={styles.sectionLabel}>Core Engineering</span>
              <h2 className={styles.sectionTitle}>System Architecture</h2>
              <p className={styles.sectionSubtitle}>A modern solar power system is an integrated network of precision components. Explore the anatomy of our high-performance energy solutions.</p>
            </div>

            {/* Part 2: Battery Storage with Background Plate */}
            <motion.div
              className={styles.cardWithPlate}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.imageWrapper}>
                <img src={galleryPhotos[0].image} alt={galleryPhotos[0].title} className={styles.cardImage} />
              </div>

              {/* Floating White Card */}
              <div className={styles.floatingWhiteCard}>
                <h4 className={styles.cardTitleDark}>{galleryPhotos[0].title}</h4>
                <p className={styles.cardSubtitleDark}>{galleryPhotos[0].subtitle}</p>
                <a href={`#${galleryPhotos[0].anchor}`} className={styles.learnMoreBtn}>
                  Learn More <span className={styles.arrow}>&gt;</span>
                </a>
              </div>
            </motion.div>

            {/* Part 3: Safety & Fuses plain photo/card */}
            <motion.div
              className={styles.plainCard}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.imageWrapperFull}>
                <img src={galleryPhotos[1].image} alt={galleryPhotos[1].title} className={styles.cardImage} />
              </div>

              {/* Floating White Card on the Left */}
              <div className={`${styles.floatingWhiteCard} ${styles.alignLeftCard}`}>
                <h4 className={styles.cardTitleDark}>{galleryPhotos[1].title}</h4>
                <p className={styles.cardSubtitleDark}>{galleryPhotos[1].subtitle}</p>
                <a href={`#${galleryPhotos[1].anchor}`} className={styles.learnMoreBtn}>
                  Learn More <span className={styles.arrow}>&gt;</span>
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column Container */}
          <div className={styles.rightCol}>
            {galleryPhotos.slice(2).map((photo, idx) => {
              const isFirstRight = idx === 0;
              if (isFirstRight) {
                return (
                  <motion.div 
                    key={photo.id}
                    className={styles.firstRightCard}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Left Column (30%): Brown Insert with horizontal wave */}
                    <div className={styles.leftColumn}>
                      <div className={styles.brownInsert} />
                    </div>
                    {/* Right Column (70%): Clean Photo */}
                    <div className={styles.rightColumn}>
                      <img src={photo.image} alt={photo.title} className={styles.cardImage} />
                    </div>

                    {/* Floating White Card spanning full width at the bottom */}
                    <div className={styles.floatingWhiteCard}>
                      <h4 className={styles.cardTitleDark}>{photo.title}</h4>
                      <p className={styles.cardSubtitleDark}>{photo.subtitle}</p>
                      <a href={`#${photo.anchor}`} className={styles.learnMoreBtn}>
                        Learn More <span className={styles.arrow}>&gt;</span>
                      </a>
                    </div>
                  </motion.div>
                );
              }
              const isMiddleRight = idx === 1;
              const isBottomRight = idx === 2;
              return (
                <motion.div 
                  key={photo.id}
                  className={`${styles.rightColumnCard} ${isBottomRight ? styles.solarPanelsCardContainer : ''}`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.rightImageWrapper}>
                    <img src={photo.image} alt={photo.title} className={styles.cardImage} />
                  </div>
                  {isMiddleRight && (
                    <div className={`${styles.floatingWhiteCard} ${styles.inverterWhiteCard}`}>
                      <h4 className={styles.cardTitleDark}>{photo.title}</h4>
                      <p className={`${styles.cardSubtitleDark} ${styles.inverterSubtitle}`}>{photo.subtitle}</p>
                      <a href={`#${photo.anchor}`} className={styles.learnMoreBtn}>
                        Learn More <span className={styles.arrow}>&gt;</span>
                      </a>
                    </div>
                  )}
                  {isBottomRight && (
                    <div className={`${styles.floatingWhiteCard} ${styles.panelsWhiteCard}`}>
                      <h4 className={styles.cardTitleDark}>{photo.title}</h4>
                      <p className={styles.cardSubtitleDark}>{photo.subtitle}</p>
                      <a href={`#${photo.anchor}`} className={styles.learnMoreBtn}>
                        Learn More <span className={styles.arrow}>&gt;</span>
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Hidden SVG for wave clip-path */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          <clipPath id="waveClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,1 L 1,1 L 1,0.3 C 0.7,0.3 0,0.35 0,0.4 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>
    </section>
  );
};
