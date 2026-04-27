import React from 'react';
import { motion } from 'framer-motion';
import p1 from '../../../../assets/rev1_gen.png';
import p2 from '../../../../assets/rev2_gen.png';
import p3 from '../../../../assets/rev3_gen.png';
import p4 from '../../../../assets/rev4_gen.png';
import p5 from '../../../../assets/rev5_gen.png';
import { Button } from '../../../../shared/ui/Button';
import styles from '../Projects.module.css';

const projects = [
  {
    title: 'Greenhill Residence',
    location: 'Austin, TX',
    capacity: '12.4 kW',
    image: p1,
    featured: true,
  },
  {
    title: 'Alpine Office Park',
    location: 'Munich, Germany',
    capacity: '340 kW',
    image: p2,
  },
  {
    title: 'Coastal Villa Complex',
    location: 'Barcelona, Spain',
    capacity: '86 kW',
    image: p3,
  },
  {
    title: 'Summit Industrial Campus',
    location: 'Munich, Germany',
    capacity: '1.2 MW',
    image: p4,
  },
  {
    title: 'Berlin Logistics Hub',
    location: 'Berlin, Germany',
    capacity: '850 kW',
    image: p5,
  },
];

const Projects = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="section-label">Our Work</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              A selection of residential, commercial, and industrial installations
              we've delivered across Europe and the US.
            </p>
          </div>
          <Button href="#contact" variant="outlineDark">Request a Consultation</Button>
        </div>

        {projects.filter(p => p.featured).map((p, i) => (
          <motion.div 
            className={`${styles.grid} ${styles.gridFeatured}`} 
            key={`f-${i}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className={`${styles.card} ${styles.cardFeatured}`}>
              <div className={styles.cardImage}>
                <img src={p.image} alt={p.title} />
              </div>
              <div className={styles.cardInfo}>
                <div>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <span className={styles.cardLocation}>{p.location}</span>
                </div>
                <span className={styles.cardCapacity}>{p.capacity}</span>
              </div>
            </div>
          </motion.div>
        ))}

        <div className={styles.grid}>
          {projects.filter(p => !p.featured).map((p, i) => (
            <motion.div 
              className={styles.card} 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
            >
              <div className={styles.cardImage}>
                <img src={p.image} alt={p.title} />
              </div>
              <div className={styles.cardInfo}>
                <div>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <span className={styles.cardLocation}>{p.location}</span>
                </div>
                <span className={styles.cardCapacity}>{p.capacity}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
