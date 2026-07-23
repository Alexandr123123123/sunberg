import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from '../ElPortfolio.module.css';

// Import local assets for collage
import wiringImg from '../../../../assets/electrical/wiring.png';
import switchboardsImg from '../../../../assets/electrical/switchboards.png';

// Projects data definition matching tempelor names, photos count and mockup categories
const projectsList = [
  {
    id: 'boudewijn',
    category: 'residential',
    photosCount: 12,
    year: '2024',
    location: 'Boudewijn',
    tags: ['Installation', 'Smart Home'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 'edegem',
    category: 'commercial',
    photosCount: 7,
    year: '2023',
    location: 'Edegem',
    tags: ['Modernization', 'Lighting'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 3v18M15 3v18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 9h6M9 15h6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 'heideland',
    category: 'residential',
    photosCount: 5,
    year: '2023',
    location: 'Heideland',
    tags: ['Rewiring', 'Safety'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 'laureysstraat',
    category: 'commercial',
    photosCount: 4,
    year: '2024',
    location: 'Laureysstraat',
    tags: ['Panel Upgrade', 'Exterior'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18.8 4H5.2c-1 0-1.8.8-1.8 1.8v12.4c0 1 .8 1.8 1.8 1.8h13.6c1 0 1.8-.8 1.8-1.8V5.8c0-1-.8-1.8-1.8-1.8z" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 'leksklyuze',
    category: 'residential',
    photosCount: 7,
    year: '2023',
    location: 'Leksklyuze',
    tags: ['Network', 'Automation'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 'oogststraat',
    category: 'solar',
    photosCount: 6,
    year: '2024',
    location: 'Oogststraat',
    tags: ['Solar', 'Energy'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M2 17l1.4-1.4M17 5.6l-1.4 1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 'potter',
    category: 'industrial',
    photosCount: 11,
    year: '2023',
    location: 'Potter',
    tags: ['Industrial', 'Routing'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 21H2V3l7 4 5-4 8 4v18z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 10h2M15 10h2M7 14h2M15 14h2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 'spoorweglaan',
    category: 'residential',
    photosCount: 5,
    year: '2024',
    location: 'Spoorweglaan',
    tags: ['Security', 'Luxury Estate'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

const ElPortfolio = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const categories = [
    { id: 'all', label: t('electricalPage.portfolioSection.categories.all') },
    { id: 'residential', label: t('electricalPage.portfolioSection.categories.residential') },
    { id: 'commercial', label: t('electricalPage.portfolioSection.categories.commercial') },
    { id: 'industrial', label: t('electricalPage.portfolioSection.categories.industrial') },
    { id: 'solar', label: t('electricalPage.portfolioSection.categories.solar') }
  ];

  const filteredProjects = projectsList.filter(proj => 
    activeCategory === 'all' || proj.category === activeCategory
  );

  const openLightbox = (proj) => {
    setSelectedProject(proj);
    setActivePhotoIdx(0);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const handleNextPhoto = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setActivePhotoIdx(prev => (prev + 1) % selectedProject.photosCount);
  };

  const handlePrevPhoto = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setActivePhotoIdx(prev => (prev - 1 + selectedProject.photosCount) % selectedProject.photosCount);
  };

  return (
    <section className={styles.section} id="portfolio">
      {/* SVG ClipPath Definition for Rounded Cutout */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          <clipPath id="rounded-cutout" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.05 A 0.05,0.05 0 0,1 0.05,0 L 0.70,0 A 0.05,0.05 0 0,1 0.75,0.05 L 0.75,0.20 A 0.05,0.05 0 0,0 0.80,0.25 L 0.95,0.25 A 0.05,0.05 0 0,1 1,0.30 L 1,0.95 A 0.05,0.05 0 0,1 0.95,1 L 0.05,1 A 0.05,0.05 0 0,1 0,0.95 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="container">
        {/* Header Block with Collage */}
        <div className={styles.headerBlock}>
          <div className={styles.headerLeft}>
            <span className={styles.tag}>{t('electricalPage.portfolioSection.label')}</span>
            <h2 className={styles.title}>{t('electricalPage.portfolioSection.title')}</h2>
            <p className={styles.desc}>{t('electricalPage.portfolioSection.desc')}</p>
          </div>
          
          <div className={styles.collageRight}>
            <div className={styles.gridDotted} />
            <div className={styles.backImageWrapper}>
              <div className={styles.badgeCircleBg} />
              <div className={styles.backImage}>
                <img src={wiringImg} alt="Solar panel array installation backplate" />
              </div>
              <div className={styles.accentBadge}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className={styles.frontImage}>
              <img src={switchboardsImg} alt="Meticulous switchboard wiring portrait" />
            </div>

            {/* Floating stats for mobile screens (e.g. max-width: 768px / 600px) */}
            <div className={`${styles.floatingStat} ${styles.floatTopLeft}`}>
              <span className={styles.floatValue}>{t('electricalPage.portfolioSection.stats.experience.val')}</span>
              <span className={styles.floatLabel}>{t('electricalPage.portfolioSection.stats.experience.lab')}</span>
            </div>
            <div className={`${styles.floatingStat} ${styles.floatBottomRight}`}>
              <span className={styles.floatValue}>{t('electricalPage.portfolioSection.stats.satisfaction.val')}</span>
              <span className={styles.floatLabel}>{t('electricalPage.portfolioSection.stats.satisfaction.lab')}</span>
            </div>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className={styles.statsBar}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className={styles.statTexts}>
              <span className={styles.statValue}>{t('electricalPage.portfolioSection.stats.completed.val')}</span>
              <span className={styles.statLabel}>{t('electricalPage.portfolioSection.stats.completed.lab')}</span>
            </div>
          </div>
          <div className={`${styles.statCard} ${styles.hideOnMobile}`}>
            <div className={styles.statIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4m5 .5a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className={styles.statTexts}>
              <span className={styles.statValue}>{t('electricalPage.portfolioSection.stats.satisfaction.val')}</span>
              <span className={styles.statLabel}>{t('electricalPage.portfolioSection.stats.satisfaction.lab')}</span>
            </div>
          </div>
          <div className={`${styles.statCard} ${styles.hideOnMobile}`}>
            <div className={styles.statIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className={styles.statTexts}>
              <span className={styles.statValue}>{t('electricalPage.portfolioSection.stats.experience.val')}</span>
              <span className={styles.statLabel}>{t('electricalPage.portfolioSection.stats.experience.lab')}</span>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m16-10a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className={styles.statTexts}>
              <span className={styles.statValue}>{t('electricalPage.portfolioSection.stats.partners.val')}</span>
              <span className={styles.statLabel}>{t('electricalPage.portfolioSection.stats.partners.lab')}</span>
            </div>
          </div>
        </div>

        {/* Filters Controls */}
        <div className={styles.filterContainer}>
          <div className={styles.filterList}>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.activeBtn : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid List */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(proj => {
              const projectTitle = t(`electricalPage.portfolioSection.projects.${proj.id}.title`);
              const projectDesc = t(`electricalPage.portfolioSection.projects.${proj.id}.desc`);
              const projectCategoryLabel = t(`electricalPage.portfolioSection.categories.${proj.category}`);
              
              // First photo as cover image
              const coverImgUrl = `${import.meta.env.BASE_URL || '/'}project/${proj.location}/1.jpg`;

              return (
                <motion.div
                  key={proj.id}
                  layout
                  className={styles.card}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openLightbox(proj)}
                >
                  <div className={styles.cardImageWrapper}>
                    <img src={coverImgUrl} alt={projectTitle} className={styles.cardImage} />
                    <span className={styles.categoryBadge}>{projectCategoryLabel.toUpperCase()}</span>
                    <div className={styles.iconCircle}>
                      {proj.icon}
                    </div>
                  </div>
                  <div className={styles.cardInfo}>
                    <h3 className={styles.cardTitle}>{projectTitle}</h3>
                    <p className={styles.cardDesc}>{projectDesc}</p>
                    <button className={styles.cardLink} onClick={(e) => { e.stopPropagation(); openLightbox(proj); }}>
                      {t('electricalPage.portfolioSection.viewCase')} &rarr;
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>



      </div>

      {/* Lightbox / Slider Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.modalOverlay}
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button className={styles.modalClose} onClick={closeLightbox}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className={styles.modalBody}>
                {/* Left: Interactive Photo Gallery */}
                <div className={styles.modalGallery}>
                  <div className={styles.mainPhotoContainer}>
                    <img
                      src={`${import.meta.env.BASE_URL || '/'}project/${selectedProject.location}/${activePhotoIdx + 1}.jpg`}
                      alt="Project detail view"
                      className={styles.modalMainImg}
                    />

                    {/* Navigation Arrows */}
                    <button className={`${styles.navArrow} ${styles.arrowLeft}`} onClick={handlePrevPhoto}>
                      &larr;
                    </button>
                    <button className={`${styles.navArrow} ${styles.arrowRight}`} onClick={handleNextPhoto}>
                      &rarr;
                    </button>

                    {/* Photo Counter */}
                    <span className={styles.photoCountBadge}>
                      {activePhotoIdx + 1} / {selectedProject.photosCount}
                    </span>
                  </div>

                  {/* Thumbnails list */}
                  <div className={styles.thumbnails}>
                    {Array.from({ length: selectedProject.photosCount }).map((_, idx) => (
                      <button
                        key={idx}
                        className={`${styles.thumbBtn} ${activePhotoIdx === idx ? styles.activeThumb : ''}`}
                        onClick={() => setActivePhotoIdx(idx)}
                      >
                        <img
                          src={`${import.meta.env.BASE_URL || '/'}project/${selectedProject.location}/${idx + 1}.jpg`}
                          alt={`Thumbnail ${idx + 1}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right: Project Details Info */}
                <div className={styles.modalInfo}>
                  <span className={styles.modalTag}>
                    {t(`electricalPage.portfolioSection.categories.${selectedProject.category}`).toUpperCase()}
                  </span>
                  <h2 className={styles.modalTitle}>
                    {t(`electricalPage.portfolioSection.projects.${selectedProject.id}.title`)}
                  </h2>
                  
                  <div className={styles.modalMeta}>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>{t('projectsPage.projects.0.aspects.0.label') || 'Location'}</span>
                      <span className={styles.metaVal}>{selectedProject.location}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Year</span>
                      <span className={styles.metaVal}>{selectedProject.year}</span>
                    </div>
                  </div>

                  <p className={styles.modalDesc}>
                    {t(`electricalPage.portfolioSection.projects.${selectedProject.id}.desc`)}
                  </p>

                  <div className={styles.modalTags}>
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className={styles.modalTagItem}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ElPortfolio;
