import React from 'react';
import { motion } from 'framer-motion';
import styles from '../TechGalleryMobileXS.module.css';

import imgBattery from '../../../../assets/comp_battery.png';
import imgSafety from '../../../../assets/comp_safety.png';
import imgMounting from '../../../../assets/comp_mounting.png';
import imgInverter from '../../../../assets/comp_inverter.png';

export const TechGalleryMobileXS = () => {
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

  const inverterPhoto = galleryPhotos.find(p => p.id === 4);
  const otherPhotos = galleryPhotos.filter(p => p.id !== 4);

  return (
    <section className={styles.techGalleryMobileXSSection}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        {/* Split Two-Column Container for Inverter & Header */}
        <div className={styles.splitInverterContainer}>
          {/* Background Decorative Blob with clear outlines */}
          <div className={styles.bgBlobContainer}>
            <svg viewBox="0 0 200 150" className={styles.bgBlobSvg} xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30,85 C15,65 25,45 50,45 C70,45 80,35 100,20 C130,5 170,15 180,45 C190,70 180,95 150,110 C120,125 90,120 70,120 C50,120 45,105 30,85 Z"
                fill="rgba(188, 168, 143, 0.25)"
              />
            </svg>
          </div>

          {/* Left Column: Header and White Card */}
          <div className={styles.leftPart}>
            <div className={styles.headerArea}>
              <span className={styles.sectionLabel}>Core Engineering</span>
              <h2 className={styles.sectionTitle}>System Architecture</h2>
              <p className={styles.sectionSubtitle}>A modern solar power system is an integrated network of precision components. Explore the anatomy of our high-performance energy solutions.</p>
            </div>

            <div className={styles.inverterWhiteCardXS}>
              <h4 className={styles.cardTitle}>{inverterPhoto.title}</h4>
              <p className={styles.cardSubtitle}>{inverterPhoto.subtitle}</p>
              <a href={`#${inverterPhoto.anchor}`} className={styles.learnMoreBtn}>
                Learn More <span className={styles.arrow}>&gt;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Inverter Image */}
          <div className={styles.rightPart}>
            <div className={styles.imageWrapper}>
              <img src={inverterPhoto.image} alt={inverterPhoto.title} className={styles.cardImage} />
            </div>
          </div>
        </div>

        {/* Vertical Stack of other Cards */}
        <div className={styles.cardsStack}>
          {otherPhotos.map((photo) => {
            const isSpecialCardRight = photo.id === 2;
            const isSpecialCardLeft = photo.id === 1;
            const isSpecialCardMounting = photo.id === 3;
            if (isSpecialCardRight) {
              return (
                <motion.div
                  key={photo.id}
                  className={styles.specialWideCard}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.specialWideCardImageWrapper}>
                    <img src={photo.image} alt={photo.title} className={styles.cardImage} />
                  </div>
                  <div className={styles.flushRightCard}>
                    <h4 className={styles.cardTitle}>{photo.title}</h4>
                    <p className={styles.cardSubtitle}>{photo.subtitle}</p>
                    <a href={`#${photo.anchor}`} className={styles.learnMoreBtn}>
                      Learn More <span className={styles.arrow}>&gt;</span>
                    </a>
                  </div>
                </motion.div>
              );
            }
            if (isSpecialCardLeft) {
              return (
                <motion.div
                  key={photo.id}
                  className={styles.specialWideCard}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.imageWrapperFull}>
                    <img src={photo.image} alt={photo.title} className={styles.cardImage} />
                  </div>
                  <div className={styles.marginLeftCard}>
                    <h4 className={styles.cardTitle}>{photo.title}</h4>
                    <p className={styles.cardSubtitle}>{photo.subtitle}</p>
                    <a href={`#${photo.anchor}`} className={styles.learnMoreBtn}>
                      Learn More <span className={styles.arrow}>&gt;</span>
                    </a>
                  </div>
                </motion.div>
              );
            }
            if (isSpecialCardMounting) {
              return (
                <motion.div
                  key={photo.id}
                  className={styles.specialWideCardPadded}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.specialWideCardImageWrapperRounded}>
                    <img src={photo.image} alt={photo.title} className={styles.cardImage} />
                  </div>
                  <div className={styles.flushRightCardRounded}>
                    <h4 className={styles.cardTitle}>{photo.title}</h4>
                    <p className={styles.cardSubtitle}>{photo.subtitle}</p>
                    <a href={`#${photo.anchor}`} className={styles.learnMoreBtn}>
                      Learn More <span className={styles.arrow}>&gt;</span>
                    </a>
                  </div>
                </motion.div>
              );
            }
            return (
              <motion.div
                key={photo.id}
                className={styles.stackCard}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.imageWrapper}>
                  <img src={photo.image} alt={photo.title} className={styles.cardImage} />
                </div>
                <div className={styles.infoCard}>
                  <h4 className={styles.cardTitle}>{photo.title}</h4>
                  <p className={styles.cardSubtitle}>{photo.subtitle}</p>
                  <a href={`#${photo.anchor}`} className={styles.learnMoreBtn}>
                    Learn More <span className={styles.arrow}>&gt;</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
