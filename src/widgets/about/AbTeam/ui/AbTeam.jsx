import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../../../shared/lib/hooks/useMediaQuery';
import styles from '../AbTeam.module.css';
import erikImg from '../../../../assets/images/team/erik.png';
import claraImg from '../../../../assets/images/team/clara.png';
import mikaelImg from '../../../../assets/images/team/mikael.png';

const team = [
  { 
    id: '01', 
    name: 'Erik Sundberg', 
    role: 'Founder & CEO', 
    img: erikImg,
    quote: 'Engineering is the bridge between human ambition and planetary stewardship.'
  },
  { 
    id: '02', 
    name: 'Clara Lindberg', 
    role: 'Lead Architectural Engineer', 
    img: claraImg,
    quote: 'Solar systems should be as aesthetically refined as they are technically precise.'
  },
  { 
    id: '03', 
    name: 'Mikael Nilsson', 
    role: 'Technical Director', 
    img: mikaelImg,
    quote: 'We don’t just install panels; we design energy independence for generations.'
  }
];

export const AbTeam = () => {
  const isSlider = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 640px)');
  const [activeIndex, setActiveIndex] = useState(team.length);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalItems = team.length;
  const visibleItems = isMobile ? 1 : 2;
  const clonedTeam = [...team, ...team, ...team];

  useEffect(() => {
    if (isSlider) {
      setActiveIndex(totalItems);
    }
  }, [isSlider, totalItems]);

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

  const handleAnimationComplete = () => {
    if (!isAnimating) return;
    setIsAnimating(false);
    if (activeIndex < totalItems) {
      setActiveIndex(activeIndex + totalItems);
    } else if (activeIndex >= totalItems * 2) {
      setActiveIndex(activeIndex - totalItems);
    }
  };

  return (
    <section className={styles.section}>
      {isSlider ? (
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderContainer}>
            <motion.div 
              className={styles.sliderTrack}
              animate={{ x: `-${activeIndex * (100 / visibleItems)}%` }}
              transition={isAnimating ? { type: 'spring', stiffness: 300, damping: 30 } : { duration: 0 }}
              onAnimationComplete={handleAnimationComplete}
            >
              {clonedTeam.map((member, i) => (
                <div 
                  key={i} 
                  className={`${styles.slide} ${isMobile ? styles.mobileSlide : styles.tabletSlide}`}
                >
                  <div className={styles.member}>
                    <div className={styles.mediaContainer}>
                      <div className={styles.imageWrapper}>
                        <span className={styles.index}>{member.id}</span>
                        <img src={member.img} alt={member.name} />
                      </div>
                      <div className={styles.quoteBlock}>
                        <p className={styles.quoteText}>“{member.quote}”</p>
                      </div>
                    </div>
                    <div className={styles.info}>
                      <span className={styles.role}>{member.role}</span>
                      <h3 className={styles.name}>{member.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

            <div className={styles.nav}>
              <button className={styles.navBtn} onClick={handlePrev} aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button className={styles.navBtn} onClick={handleNext} aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
        </div>
      ) : (
        <div className={styles.grid}>
          {team.map((member, i) => (
            <motion.div 
              key={member.id}
              className={styles.member}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <div className={styles.mediaContainer}>
                <div className={styles.imageWrapper}>
                  <span className={styles.index}>{member.id}</span>
                  <img src={member.img} alt={member.name} />
                </div>
                <div className={styles.quoteBlock}>
                  <p className={styles.quoteText}>“{member.quote}”</p>
                </div>
              </div>
              <div className={styles.info}>
                <span className={styles.role}>{member.role}</span>
                <h3 className={styles.name}>{member.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};
