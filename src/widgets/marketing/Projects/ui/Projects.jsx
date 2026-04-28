import React from 'react';
import { motion } from 'framer-motion';
import agriImg from '../../../../assets/project_agri_field.png';
import floatingImg from '../../../../assets/project_floating_real.png';
import { Button } from '../../../../shared/ui/Button';
import styles from '../Projects.module.css';

const Projects = () => {
  /*
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
  */

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.fullWidthGrid}>
        <motion.div 
          className={styles.projectCard}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={agriImg} alt="Agrivoltaics" className={styles.bgImage} />
          <div className={styles.overlay}>
            <div className={styles.content}>
              <span className={styles.tag}>Agricultural Innovation</span>
              <h3 className={styles.title}>Agrivoltaics: The Dual-Use Future</h3>
              <p className={styles.desc}>
                Agrivoltaics combine agriculture and solar energy in a symbiotic system. 
                By elevating panels above farmland, this technology optimizes land use, improves soil 
                moisture through shading, and creates a resilient microclimate for sustainable food production.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.projectCard}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={floatingImg} alt="Floating Solar" className={styles.bgImage} />
          <div className={styles.overlay}>
            <div className={styles.content}>
              <span className={styles.tag}>Aquatic Infrastructure</span>
              <h3 className={styles.title}>Floating Solar: Untapped Potential</h3>
              <p className={styles.desc}>
                Floating solar, or floatovoltaics, installs photovoltaic modules on bodies of water. 
                These systems reduce evaporation, mitigate algae growth, and benefit from natural 
                water cooling that enhances energy efficiency compared to land-based arrays.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
