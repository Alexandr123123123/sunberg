import React, { useEffect, useState, useRef } from 'react';
import { motion, animate, useInView } from 'framer-motion';
import { impactStats } from '../../../../shared/config/projects/projectsData';
import { useMediaQuery } from '../../../../shared/lib/hooks/useMediaQuery';
import styles from '../PrImpact.module.css';

const Counter = ({ value, duration = 2 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        onUpdate: (latest) => setDisplayValue(latest),
        ease: [0.16, 1, 0.3, 1] // Custom quintic ease out
      });
      return () => controls.stop();
    }
  }, [value, duration, isInView]);

  return <span ref={nodeRef}>{displayValue.toLocaleString(undefined, { 
    minimumFractionDigits: value % 1 !== 0 ? 1 : 0,
    maximumFractionDigits: 1 
  })}</span>;
};


export const PrImpact = () => {
  const isDesktop = useMediaQuery('(min-width: 1025px)');
  const isTablet = useMediaQuery('(min-width: 601px) and (max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 600px)');
  
  const [activeIndex, setActiveIndex] = useState(impactStats.length);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalItems = impactStats.length;
  const visibleItems = isTablet ? 2 : 1;
  
  // Triple the list for a truly seamless loop
  const clonedStats = [...impactStats, ...impactStats, ...impactStats];

  // Initial setup
  useEffect(() => {
    setActiveIndex(totalItems);
  }, [isTablet, isMobile, totalItems]);

  const handleDotClick = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index + totalItems);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => prev - 1);
  };

  // Handle seamless loop reset
  useEffect(() => {
    if (!isAnimating) return;

    const timer = setTimeout(() => {
      setIsAnimating(false);
      if (activeIndex < totalItems) {
        setActiveIndex(activeIndex + totalItems);
      } else if (activeIndex >= totalItems * 2) {
        setActiveIndex(activeIndex - totalItems);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [activeIndex, isAnimating, totalItems]);

  return (
    <section className={styles.impact}>
      <div className="container">
        {isDesktop ? (
          <div className={styles.grid}>
            {impactStats.map((stat, i) => (
              <motion.div 
                key={stat.id}
                className={styles.statCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <span className={styles.label}>{stat.label}</span>
                <div className={styles.valueWrapper}>
                  <div className={styles.value}>
                    <Counter value={stat.value} />
                  </div>
                  <span className={styles.unit}>{stat.unit}</span>
                </div>
                <p className={styles.desc}>{stat.desc}</p>
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
                  transition={isAnimating ? { type: 'spring', stiffness: 300, damping: 30 } : { duration: 0 }}
                >
                  {clonedStats.map((stat, index) => (
                    <div 
                      key={`${stat.id}-${index}`} 
                      className={`${styles.statCard} ${isTablet ? styles.tabletItem : styles.mobileItem}`}
                    >
                      <span className={styles.label}>{stat.label}</span>
                      <div className={styles.valueWrapper}>
                        <div className={styles.value}>
                          <Counter value={stat.value} />
                        </div>
                        <span className={styles.unit}>{stat.unit}</span>
                      </div>
                      <p className={styles.desc}>{stat.desc}</p>
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
              {impactStats.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${
                    (activeIndex % totalItems === i) 
                    ? styles.dotActive : ''
                  }`}
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

