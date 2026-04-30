import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../../../shared/lib/hooks/useMediaQuery';
import styles from '../Testimonials.module.css';

const defaultTestimonials = [
  {
    text: "Sunberg made going solar effortless. From the first call to flipping the switch, everything was handled professionally. Our energy bills dropped by 78% in the first quarter.",
    name: 'Sarah Mitchell',
    role: 'Homeowner, Austin TX',
    rating: 5,
  },
  {
    text: "We needed a reliable partner for our office park installation. Sunberg delivered a 340 kW system on schedule and under budget. Their monitoring platform is outstanding.",
    name: 'Erik Johansson',
    role: 'Facilities Director, Lumina Estate Group',
    rating: 5,
  },
  {
    text: "What impressed me most was the transparency. No hidden costs, no surprises. The system has been running flawlessly for two years now, and their support team is always responsive.",
    name: 'Maria García',
    role: 'Homeowner, Barcelona',
    rating: 5,
  },
];

const Testimonials = ({ items = defaultTestimonials, showAvatar = true }) => {
  const testimonials = items;
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
          <span className="section-label">Client Stories</span>
          <h2 className="section-title">What Our Clients Say</h2>
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
