import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '../../../../shared/lib/hooks/useMediaQuery';
import styles from '../Testimonials.module.css';

const Testimonials = ({ items, showAvatar = true }) => {
  const { t } = useTranslation();
  
  // Use passed items or fallback to translation
  const testimonials = items || t('testimonials.items', { returnObjects: true });
  
  const isDesktop = useMediaQuery('(min-width: 1200px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1199px)');
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  
  const totalItems = testimonials.length;
  const visibleItems = isTablet ? 2 : (isMobile ? 1 : 3);
  
  // Infinite slider logic
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const startIndex = totalItems;
  const [activeIndex, setActiveIndex] = useState(startIndex);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [isDesktop]);

  // Reset index when breakpoint changes to middle set
  useEffect(() => {
    setActiveIndex(startIndex);
  }, [isTablet, isMobile, isDesktop]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleDotClick = (index) => {
    if (isAnimating) return;
    setActiveIndex(startIndex + index);
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

  const handleAnimationComplete = () => {
    setIsAnimating(false);
    
    // Seamless jump
    if (activeIndex >= startIndex + totalItems) {
      setActiveIndex(activeIndex - totalItems);
    } else if (activeIndex < startIndex) {
      setActiveIndex(activeIndex + totalItems);
    }
  };

  const slideWidth = containerWidth / visibleItems;

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">{t('testimonials.header_label')}</span>
          <h2 className="section-title">{t('testimonials.header_title')}</h2>
        </div>

        {isDesktop ? (
          <motion.div 
            className={styles.grid}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {testimonials.map((t, i) => (
              <motion.div className={styles.card} key={i} variants={item}>
                <div className={styles.quoteIcon}>“</div>
                <blockquote className={styles.text}>{t.text}</blockquote>
                <div className={styles.author}>
                  {showAvatar && (
                    <div className={styles.avatar}>
                      {t.avatar ? (
                        <img src={t.avatar} alt={t.name} />
                      ) : (
                        t.name.split(' ').map(n => n[0]).join('')
                      )}
                    </div>
                  )}
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>{t.name}</span>
                    <span className={styles.role}>{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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

              <div className={styles.sliderContainer} ref={containerRef}>
                <motion.div 
                  className={styles.sliderTrack}
                  style={{ gap: 0 }}
                  animate={{ x: -activeIndex * slideWidth }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 30,
                    duration: isAnimating ? undefined : 0
                  }}
                  onAnimationComplete={handleAnimationComplete}
                >
                  {extendedTestimonials.map((t, i) => (
                    <div 
                      className={`${styles.slide} ${isTablet ? styles.tabletSlide : styles.mobileSlide}`} 
                      key={i}
                    >
                      <div className={styles.card}>
                        <div className={styles.quoteIcon}>“</div>
                        <blockquote className={styles.text}>{t.text}</blockquote>
                        <div className={styles.author}>
                          {showAvatar && (
                            <div className={styles.avatar}>
                              {t.avatar ? (
                                <img src={t.avatar} alt={t.name} />
                              ) : (
                                t.name.split(' ').map(n => n[0]).join('')
                              )}
                            </div>
                          )}
                          <div className={styles.authorInfo}>
                            <span className={styles.authorName}>{t.name}</span>
                            <span className={styles.role}>{t.role}</span>
                          </div>
                        </div>
                      </div>
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
              {testimonials.map((_, i) => (
                <button 
                  key={i}
                  className={`${styles.dot} ${activeIndex % totalItems === i ? styles.dotActive : ''}`}
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


export default Testimonials;
