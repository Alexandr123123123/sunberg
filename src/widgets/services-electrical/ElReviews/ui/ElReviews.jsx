import React from 'react';
import { useTranslation } from 'react-i18next';
import Testimonials from '../../../marketing/Testimonials/ui/Testimonials';
import styles from '../ElReviews.module.css';
import { useBookingModal } from '../../../../app/providers/BookingModalProvider';

const ElReviews = () => {
  const { t } = useTranslation();
  const { openModal } = useBookingModal();

  const electricalReviews = [
    {
      id: 'r1',
      name: t('electricalPage.reviewsSection.reviews.r1.name'),
      role: `${t('electricalPage.reviewsSection.reviews.r1.role')} • Antwerp`,
      text: t('electricalPage.reviewsSection.reviews.r1.text')
    },
    {
      id: 'r2',
      name: t('electricalPage.reviewsSection.reviews.r2.name'),
      role: `${t('electricalPage.reviewsSection.reviews.r2.role')} • Ghent`,
      text: t('electricalPage.reviewsSection.reviews.r2.text')
    },
    {
      id: 'r3',
      name: t('electricalPage.reviewsSection.reviews.r3.name'),
      role: `${t('electricalPage.reviewsSection.reviews.r3.role')} • Brussels`,
      text: t('electricalPage.reviewsSection.reviews.r3.text')
    }
  ];

  return (
    <section className={styles.section} id="reviews">
      <div className="container">
        
        {/* Header with Stats */}
        <div className={styles.headerBlock}>
          <div className={styles.headerLeft}>
            <span className="section-label">{t('electricalPage.reviewsSection.label')}</span>
            <h2 className="section-title">{t('electricalPage.reviewsSection.title')}</h2>
            <p className="section-subtitle">{t('electricalPage.reviewsSection.desc')}</p>
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

        {/* Testimonials Slider (Same structure as About page) */}
        <Testimonials 
          items={electricalReviews} 
          hideHeader={true} 
          asSection={false} 
          className={styles.embeddedSlider} 
        />

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
            if (openModal) {
              openModal();
            } else {
              const contactBtn = document.querySelector('[class*="BookConsultationButton"]');
              if (contactBtn) contactBtn.click();
            }
          }}>
            {t('hero.btn_start')} &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};

export default ElReviews;
