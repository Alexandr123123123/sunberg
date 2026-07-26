import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from '../OurApplications.module.css';

export const OurApplications = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.ourApplicationsSection}>
      <div className={styles.container}>
        
        {/* MASONRY MOSAIC GRID */}
        <div className={styles.masonryGrid}>
          
          {/* LEFT COLUMN */}
          <div className={styles.leftColumn}>
            
            {/* Section Header Block (inside the column flow, not a card) */}
            <div className={styles.headerBlock}>
              <h2 className={styles.sectionTitle}>Только этого раздела</h2>
              <p className={styles.sectionSubtitle}>
                наши решения для вашего бизнеса и жизни,<br />
                которые помогают нам быть лучше.
              </p>
            </div>

            {/* Photo 1: Solar panels on roof */}
            <div className={styles.photoCard}>
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop" 
                alt="Solar panels on roof sloped view" 
                className={styles.photoImg}
              />
              
              {/* Overlay Badge Card (white, overlapping bottom edge) */}
              <div className={styles.overlayBadge}>
                <div className={styles.badgeIconCircle}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 8 8 12 12 16" />
                    <line x1="16" y1="12" x2="8" y2="12" />
                  </svg>
                </div>
                <div className={styles.badgeText}>
                  <h4 className={styles.badgeTitle}>Долгове idea</h4>
                  <p className={styles.badgeDesc}>The one liat rigiital technology case.</p>
                </div>
              </div>
            </div>

            {/* Photo 2: Interior with dark appliances and wood panels */}
            <div className={styles.photoCard}>
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" 
                alt="Premium dark interior design with wood panels" 
                className={styles.photoImg}
              />
              
              {/* Overlay Badge Card */}
              <div className={styles.overlayBadge}>
                <div className={styles.badgeIconCircle}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <div className={styles.badgeText}>
                  <h4 className={styles.badgeTitle}>VC local Images</h4>
                  <p className={styles.badgeDesc}>Paners with related contereer contact.</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (Starts lower than left) */}
          <div className={styles.rightColumn}>
            
            {/* Photo 3: Shingle exterior roof with overlay Panels Card */}
            <div className={styles.photoCard}>
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop" 
                alt="Modern shingle wall architecture" 
                className={styles.photoImg}
              />
              
              {/* Overlay Card: Panels (white, overlapping bottom edge) */}
              <div className={styles.overlayBadgePanels}>
                <div className={styles.badgeIconCircle}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="3" y1="15" x2="21" y2="15" />
                    <line x1="9" y1="3" x2="9" y2="21" />
                    <line x1="15" y1="3" x2="15" y2="21" />
                  </svg>
                </div>
                <h4 className={styles.badgeTitlePanels}>Panels</h4>
                <p className={styles.badgeDescPanels}>
                  The under below sagrament your panennial new roofing.
                </p>
                <a href="#panels" className={styles.badgeBtnPanels}>
                  Узнать больше <span className={styles.arrow}>&gt;</span>
                </a>
              </div>
            </div>

            {/* Photo 4: Close-up black glossy texture */}
            <div className={styles.photoCard}>
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop" 
                alt="Black glossy panel cell texture" 
                className={styles.photoImg}
              />
              
              {/* Overlay Badge Card */}
              <div className={styles.overlayBadge}>
                <div className={styles.badgeIconCircle}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="9" y1="3" x2="9" y2="21" />
                  </svg>
                </div>
                <div className={styles.badgeText}>
                  <h4 className={styles.badgeTitle}>Black food's panels</h4>
                  <p className={styles.badgeDesc}>The idea like panels over clear balance.</p>
                </div>
              </div>
            </div>

            {/* Photo 5: Sloped roof with panels far away */}
            <div className={styles.photoCardWithLeaf}>
              <img 
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop" 
                alt="Sloped roof solar array architecture" 
                className={styles.photoImg}
              />
              
              {/* Floating Eucalyptus Branch Leaf Overlay Layer */}
              <div className={styles.eucalyptusLeafWrapper}>
                <svg className={styles.eucalyptusLeaf} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 95C50 95 48 70 52 50C54 38 58 20 62 5" stroke="#4C5835" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M51 75C41 73 35 63 38 55C41 47 48 53 51 65" fill="#667A3E" opacity="0.85" />
                  <path d="M51 55C38 50 32 40 36 32C40 24 47 31 51 45" fill="#758B4F" opacity="0.9" />
                  <path d="M52 35C42 28 38 18 42 12C46 6 51 15 53 25" fill="#849C5D" opacity="0.95" />
                  <path d="M51 68C61 70 67 62 64 54C61 46 54 50 51 62" fill="#5F723A" opacity="0.85" />
                  <path d="M51 48C63 46 69 38 66 30C63 22 56 27 51 40" fill="#6F8546" opacity="0.9" />
                  <path d="M52 28C62 23 66 14 63 8C60 2 55 9 52 20" fill="#7E9652" opacity="0.95" />
                </svg>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
