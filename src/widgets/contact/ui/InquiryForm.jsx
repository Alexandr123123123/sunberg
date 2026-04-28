import React from 'react';
import { motion } from 'framer-motion';
import styles from './InquiryForm.module.css';

export const InquiryForm = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div 
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Consultation</span>
            <h2 className={styles.title}>Start Your Engineering Audit</h2>
            <p className={styles.desc}>
              Every Sunberg project begins with a deep technical understanding of your energy needs. 
              Share your vision, and we'll provide the foundation to make it a reality.
            </p>
            
            <ul className={styles.benefits}>
              <li>
                <strong>Preliminary Audit</strong>
                <span>Precision analysis of your site’s solar potential based on localized irradiation modeling.</span>
              </li>
              <li>
                <strong>Technical Design</strong>
                <span>A bespoke system architecture project designed to integrate seamlessly with your property.</span>
              </li>
              <li>
                <strong>Financial Model</strong>
                <span>Data-driven ROI and savings projections calculated using current local energy tariffs.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.formWrapper}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Full Name</label>
                  <input type="text" placeholder="Erik Sundberg" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Email</label>
                  <input type="email" placeholder="erik@example.com" className={styles.input} />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Phone Number</label>
                <input type="tel" placeholder="+46 00 000 00 00" className={styles.input} />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Subject</label>
                <input type="text" placeholder="Residential Solar Project" className={styles.input} />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Project Details</label>
                <textarea 
                  placeholder="Tell us about your project or location..." 
                  className={styles.textarea}
                ></textarea>
              </div>

              <button type="submit" className={styles.submit}>
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
