import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from '../ElReviews.module.css';

// Avatars from Unsplash
const reviewsData = [
  {
    id: 'r1',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    location: 'Antwerp',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    )
  },
  {
    id: 'r2',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    location: 'Ghent',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    id: 'r3',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
    location: 'Brussels',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 21H2V3l7 4 5-4 8 4v18z" />
      </svg>
    )
  }
];

const ElReviews = () => {
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <section className={styles.section} id="reviews">
      <div className="container">
        
        {/* Header with Stats */}
        <div className={styles.headerBlock}>
          <div className={styles.headerLeft}>
            <span className={styles.tag}>{t('electricalPage.reviewsSection.label')}</span>
            <h2 className={styles.title}>{t('electricalPage.reviewsSection.title')}</h2>
            <p className={styles.desc}>{t('electricalPage.reviewsSection.desc')}</p>
          </div>

          {/* Ratings Summary Card */}
          <div className={styles.ratingCard}>
            <div className={styles.ratingLeft}>
              <div className={styles.scoreContainer}>
                <span className={styles.ratingScore}>4.9</span>
                <span className={styles.ratingScale}>/ 5</span>
              </div>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor" className={styles.starIcon}>
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className={styles.ratingCount}>{t('electricalPage.reviewsSection.stats.rating')}</span>
            </div>
            
            <div className={styles.ratingDivider} />

            <div className={styles.ratingBars}>
              <div className={styles.barItem}>
                <span className={styles.barLabel}>
                  5
                  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.smallStarIcon}>
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </span>
                <div className={styles.barTrack}>
                  <div className={styles.barFill} style={{ width: '87.5%' }} />
                </div>
                <span className={styles.barValue}>42</span>
              </div>
              <div className={styles.barItem}>
                <span className={styles.barLabel}>
                  4
                  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.smallStarIcon}>
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </span>
                <div className={styles.barTrack}>
                  <div className={styles.barFill} style={{ width: '10.4%' }} />
                </div>
                <span className={styles.barValue}>5</span>
              </div>
              <div className={styles.barItem}>
                <span className={styles.barLabel}>
                  3
                  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.smallStarIcon}>
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </span>
                <div className={styles.barTrack}>
                  <div className={styles.barFill} style={{ width: '2.1%' }} />
                </div>
                <span className={styles.barValue}>1</span>
              </div>
              <div className={styles.barItem}>
                <span className={styles.barLabel}>
                  2
                  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.smallStarIcon}>
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </span>
                <div className={styles.barTrack}>
                  <div className={styles.barFill} style={{ width: '0%' }} />
                </div>
                <span className={styles.barValue}>0</span>
              </div>
              <div className={styles.barItem}>
                <span className={styles.barLabel}>
                  1
                  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.smallStarIcon}>
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </span>
                <div className={styles.barTrack}>
                  <div className={styles.barFill} style={{ width: '0%' }} />
                </div>
                <span className={styles.barValue}>0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className={styles.carouselContainer}>
          <div className={styles.sliderTrack} style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {reviewsData.map((rev) => {
              const name = t(`electricalPage.reviewsSection.reviews.${rev.id}.name`);
              const role = t(`electricalPage.reviewsSection.reviews.${rev.id}.role`);
              const text = t(`electricalPage.reviewsSection.reviews.${rev.id}.text`);
              
              return (
                <div key={rev.id} className={styles.slide}>
                  <div className={styles.reviewCard}>
                    <div className={styles.quoteMark}>&ldquo;</div>
                    <p className={styles.reviewText}>{text}</p>
                    <div className={styles.userProfile}>
                      <img src={rev.avatar} alt={name} className={styles.avatar} />
                      <div className={styles.userInfo}>
                        <h4 className={styles.userName}>{name}</h4>
                        <span className={styles.userRole}>{role}</span>
                        <div className={styles.userLocation}>
                          {rev.icon}
                          <span>{rev.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className={styles.carouselControls}>
          <button className={styles.arrowBtn} onClick={handlePrev} aria-label="Previous review">
            &larr;
          </button>
          
          {/* Pagination Dots */}
          <div className={styles.paginationDots}>
            {reviewsData.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${activeSlide === idx ? styles.activeDot : ''}`}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button className={styles.arrowBtn} onClick={handleNext} aria-label="Next review">
            &rarr;
          </button>
        </div>

        {/* Partners Logos Bar */}
        <div className={styles.partnersBar}>
          <h4 className={styles.partnersTitle}>TRUSTED BY BUSINESSES AND HOMEOWNERS</h4>
          <div className={styles.logosGrid}>
            <div className={styles.logoItem}>
              <svg viewBox="0 0 120 30" fill="currentColor">
                <text x="0" y="22" fontFamily="var(--font-heading)" fontSize="20" fontWeight="bold" letterSpacing="0.05em">TechSpace</text>
              </svg>
            </div>
            <div className={styles.logoItem}>
              <svg viewBox="0 0 130 30" fill="currentColor">
                <text x="0" y="22" fontFamily="var(--font-heading)" fontSize="20" fontWeight="bold" letterSpacing="0.05em">GreenLeaf</text>
              </svg>
            </div>
            <div className={styles.logoItem}>
              <svg viewBox="0 0 120 30" fill="currentColor">
                <text x="0" y="22" fontFamily="var(--font-heading)" fontSize="20" fontWeight="bold" letterSpacing="0.05em">DriveHub</text>
              </svg>
            </div>
            <div className={styles.logoItem}>
              <svg viewBox="0 0 120 30" fill="currentColor">
                <text x="0" y="22" fontFamily="var(--font-heading)" fontSize="20" fontWeight="bold" letterSpacing="0.05em">BuildCo</text>
              </svg>
            </div>
            <div className={styles.logoItem}>
              <svg viewBox="0 0 130 30" fill="currentColor">
                <text x="0" y="22" fontFamily="var(--font-heading)" fontSize="20" fontWeight="bold" letterSpacing="0.05em">SolarFuture</text>
              </svg>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaLeft}>
            <div className={styles.chatCircleIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3 className={styles.ctaTitle}>Ready to start your project?</h3>
              <p className={styles.ctaDesc}>Let's build something safe, efficient, and future-ready together.</p>
            </div>
          </div>
          <button className={styles.ctaButton} onClick={() => {
            const contactBtn = document.querySelector('[class*="BookConsultationButton"]');
            if (contactBtn) contactBtn.click();
          }}>
            Get in touch &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};

export default ElReviews;
