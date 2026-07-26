import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Counter } from '../../../../shared/ui/Counter';
import { useMediaQuery } from '../../../../shared/lib/hooks/useMediaQuery';
import styles from '../AbStats.module.css';

export const AbStats = () => {
  const { t } = useTranslation();
  const stats = t('aboutPage.stats', { returnObjects: true });
  
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [activeIndex, setActiveIndex] = useState(stats.length);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalItems = stats.length;
  const clonedStats = [...stats, ...stats, ...stats];

  useEffect(() => {
    if (isMobile) {
      setActiveIndex(totalItems);
    }
  }, [isMobile, totalItems]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(prev => prev - 1);
  };

  // Auto-play
  useEffect(() => {
    if (!isMobile || isAnimating) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [isMobile, isAnimating, activeIndex]);

  const handleAnimationComplete = () => {
    if (!isAnimating) return;
    setIsAnimating(false);
    
    // Seamless jump
    if (activeIndex < totalItems) {
      setActiveIndex(activeIndex + totalItems);
    } else if (activeIndex >= totalItems * 2) {
      setActiveIndex(activeIndex - totalItems);
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        {isMobile ? (
          <div className={styles.sliderWrapper}>
            <div className={styles.sliderMain}>
              <button className={`${styles.navBtn} ${styles.prev}`} onClick={handlePrev}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <div className={styles.sliderContainer}>
                <motion.div 
                  className={styles.sliderTrack}
                  animate={{ x: `-${activeIndex * 100}%` }}
                  transition={isAnimating ? { type: 'spring', stiffness: 300, damping: 30 } : { duration: 0 }}
                  onAnimationComplete={handleAnimationComplete}
                >
                  {clonedStats.map((stat, i) => (
                    <div key={i} className={styles.slide}>
                      <div className={styles.stat}>
                        <span className={styles.label}>{stat.label}</span>
                        <div className={styles.valueWrapper}>
                          <div className={styles.value}>
                            <Counter value={stat.value} />
                          </div>
                          <span className={styles.unit}>{stat.unit}</span>
                        </div>
                        <p className={styles.subLabel}>{stat.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <button className={`${styles.navBtn} ${styles.next}`} onClick={handleNext}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            <div className={styles.pagination}>
              {stats.map((_, i) => (
                <div 
                  key={i} 
                  className={`${styles.dot} ${activeIndex % totalItems === i ? styles.activeDot : ''}`}
                  onClick={() => !isAnimating && setActiveIndex(i + totalItems)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.grid}>
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                className={styles.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className={styles.label}>{stat.label}</span>
                <div className={styles.valueWrapper}>
                  <div className={styles.value}>
                    <Counter value={stat.value} />
                  </div>
                  <span className={styles.unit}>{stat.unit}</span>
                </div>
                <p className={styles.subLabel}>{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
