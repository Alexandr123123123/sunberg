import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '../../../../shared/config/projects/projectsData';
import { useProjectFilter } from '../../../../features/project-filter';
import styles from '../PrGrid.module.css';

const ProjectCard = ({ project }) => {
  const [activeAspect, setActiveAspect] = useState(project.aspects[0].id);
  const [isHovered, setIsHovered] = useState(false);

  const currentAspect = project.aspects.find(a => a.id === activeAspect) || project.aspects[0];

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
        setActiveAspect(project.aspects[0].id); // Reset on leave
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
                    {project.aspects.map(aspect => (
                      <button
                        key={aspect.id}
                        className={`${styles.aspectBtn} ${activeAspect === aspect.id ? styles.activeAspect : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveAspect(aspect.id);
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
  const { activeCategory, setActiveCategory, filteredItems } = useProjectFilter(projects);

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Filter Controls */}
        <div className={styles.filter}>
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.activeBtn : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredItems.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PrGrid;
