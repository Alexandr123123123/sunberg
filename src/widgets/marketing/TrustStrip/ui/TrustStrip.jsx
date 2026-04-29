import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../../../shared/lib/hooks/useMediaQuery';
import styles from '../TrustStrip.module.css';

const stats = [
  {
    number: '2 TW',
    label: 'Cumulative Global Capacity',
  },
  {
    number: '55%',
    label: "China's Global Solar Share",
  },
  {
    number: '90%',
    label: 'Solar Cost Drop Since 2010',
  },
];

const TrustStrip = () => {
  const isDesktop = useMediaQuery('(min-width: 1025px)');
  const isTablet = useMediaQuery('(min-width: 601px) and (max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 600px)');
  
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = stats.length;
  const visibleItems = isTablet ? 2 : 1;
  const maxIndex = totalItems - visibleItems;

  // Reset index when breakpoint changes
  useEffect(() => {
    setActiveIndex(0);
  }, [isTablet, isMobile]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  return (
    <section className={styles.trustStrip}>
      <div className="container">
        {isDesktop ? (
          <div className={styles.grid}>
            {stats.map((item, index) => (
              <motion.div 
                key={index}
                className={styles.item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <span className={styles.number}>{item.number}</span>
                <span className={styles.label}>{item.label}</span>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className={styles.sliderWrapper}>
            <div className={styles.sliderMain}>
              <button 
                className={`${styles.navBtn} ${styles.prevBtn}`} 
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className={styles.sliderContainer}>
                <motion.div 
                  className={styles.sliderTrack}
                  animate={{ x: `-${activeIndex * (100 / visibleItems)}%` }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  {stats.map((item, index) => (
                    <div 
                      key={index} 
                      className={`${styles.item} ${isTablet ? styles.tabletItem : styles.mobileItem}`}
                    >
                      <span className={styles.number}>{item.number}</span>
                      <span className={styles.label}>{item.label}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              <button 
                className={`${styles.navBtn} ${styles.nextBtn}`} 
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className={styles.pagination}>
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${activeIndex === i ? styles.dotActive : ''}`}
                  onClick={() => handleDotClick(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrustStrip;
