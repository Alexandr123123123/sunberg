import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { projects as baseProjects } from '../../../../shared/config/projects/projectsData';
import { useProjectFilter } from '../../../../features/project-filter';
import styles from '../PrGrid.module.css';

const ProjectCard = ({ project }) => {
  const [activeAspect, setActiveAspect] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const currentAspect = project.aspects[activeAspect] || project.aspects[0];

  return (
    <motion.div
      layout
      className={`${styles.card} ${styles[project.size]}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveAspect(0); // Reset on leave
      }}
    >
      <div className={styles.imageWrapper}>
        <img src={project.image} alt={project.title} />
      </div>
      
      <div className={styles.overlay}>
        <motion.div layout className={styles.infoWrapper}>
          {/* Main Info */}
          <motion.div layout className={styles.mainInfo}>
            <motion.span layout className={styles.category}>{project.category}</motion.span>
            <motion.h3 layout className={styles.title}>{project.title}</motion.h3>
            <motion.p layout className={styles.location}>{project.location}</motion.p>
          </motion.div>

          {/* Detailed Aspects Menu and Content */}
          <div className={styles.detailsContainer}>
            <AnimatePresence mode="popLayout" initial={false}>
              {isHovered ? (
                <motion.div 
                  key="details"
                  layout
                  className={styles.details}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className={styles.aspectMenu}>
                    {project.aspects.map((aspect, idx) => (
                      <button
                        key={idx}
                        className={`${styles.aspectBtn} ${activeAspect === idx ? styles.activeAspect : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveAspect(idx);
                        }}
                      >
                        {aspect.label}
                      </button>
                    ))}
                  </div>
                  <motion.p 
                    key={activeAspect}
                    className={styles.aspectContent}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {currentAspect.content}
                  </motion.p>
                </motion.div>
              ) : (
                <motion.div
                  key="specs"
                  layout
                  className={styles.specsWrapper}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className={styles.specs}>{project.specs}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const PrGrid = () => {
  const { t } = useTranslation();
  
  const rawCategories = t('projectsPage.categories', { returnObjects: true });
  const rawProjects = t('projectsPage.projects', { returnObjects: true });

  const translatedProjects = useMemo(() => {
    return baseProjects.map((bp, i) => {
      const tp = rawProjects[i] || {};
      return {
        ...bp,
        categoryName: tp.category || bp.category,
        title: tp.title || bp.title,
        location: tp.location || bp.location,
        specs: tp.specs || bp.specs,
        aspects: tp.aspects || bp.aspects
      };
    });
  }, [rawProjects]);

  const { activeCategory, setActiveCategory, filteredItems } = useProjectFilter(translatedProjects);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);
  const scrollRef = React.useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (e) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.target;
    setShowLeftFade(scrollLeft > 10);
    setShowRightFade(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Filter Controls */}
        <div 
          ref={scrollRef}
          className={`${styles.filterScroll} ${showLeftFade ? styles.fadeLeft : ''} ${showRightFade ? styles.fadeRight : ''} ${isDragging ? styles.dragging : ''}`}
          onScroll={handleScroll}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          <div className={styles.filter}>
            {rawCategories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.activeBtn : ''}`}
                onClick={() => {
                  if (!isDragging) setActiveCategory(cat.id);
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-like Grid */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredItems.map((project) => (
              <ProjectCard key={project.id} project={{...project, category: project.categoryName}} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PrGrid;
