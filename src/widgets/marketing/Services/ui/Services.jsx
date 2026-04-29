import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../../../shared/lib/hooks/useMediaQuery';
import { ServiceCardClassic } from './components/ServiceCardClassic';
import { ServiceCardEditorial } from './components/ServiceCardEditorial';
import designImg from '../../../../assets/service_design.png';
import installImg from '../../../../assets/service_install.png';
import maintainImg from '../../../../assets/service_maintain.png';
import styles from '../Services.module.css';

const services = [
  {
    num: '01',
    title: 'Architecture & Engineering',
    text: 'Custom solar system design based on site mechanics, energy goals, and architectural flow. We manage structural analysis and complete permitting.',
    image: designImg,
  },
  {
    num: '02',
    title: 'Deployment & Grid Integration',
    text: 'Precision panel mounting, inverter calibration, and flawless grid integration. We prioritize operational speed and technical rigor, maintaining uncompromising safety standards across every project.',
    image: installImg,
  },
  {
    num: '03',
    title: 'Endurance & Optimization',
    text: 'Proactive system monitoring, automated diagnostics, and rapid-response maintenance, ensuring your asset performs optimally for decades.',
    image: maintainImg,
  },
];

const Services = () => {
  const isTablet = useMediaQuery('(min-width: 901px) and (max-width: 1024px)');
  const isMobile = useMediaQuery('(min-width: 601px) and (max-width: 900px)');
  const isVerySmallMobile = useMediaQuery('(max-width: 600px)');

  return (
    <section className={styles.services} id="services">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Full-Cycle Solar Solutions</h2>
          <p className="section-subtitle">
            From the first sketch to proactive lifetime optimization — we handle every
            step of your solar journey.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((s, i) => {
            // Very small mobile: All classic
            if (isVerySmallMobile) {
              return <ServiceCardClassic key={s.num} service={s} index={i} />;
            }

            // Mobile (601-900): Alternating layout
            if (isMobile) {
              if (i === 0) return <ServiceCardEditorial key={s.num} service={s} index={i} reverse={true} />;
              if (i === 1) return <ServiceCardClassic key={s.num} service={s} index={i} />;
              if (i === 2) return <ServiceCardEditorial key={s.num} service={s} index={i} />;
            }

            // Tablet: 3rd card becomes editorial and full-width
            if (isTablet && i === 2) {
              return (
                <div key={s.num} className={styles.fullWidthCard}>
                  <ServiceCardEditorial service={s} index={i} />
                </div>
              );
            }

            // Default classic card
            return <ServiceCardClassic key={s.num} service={s} index={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
