import React from 'react';
import styles from '../Contact.module.css';

const Contact = () => (
  <section className={styles.contact} id="contact">
    <div className="container">
      <div className={styles.grid}>
        <div className={styles.info}>
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Get In Touch</span>
          <h2 className={styles.title}>Let's Build Your Solar Future</h2>
          <p className={styles.desc}>
            Whether you're exploring options or ready to start — reach out to our team
            for a free consultation and site assessment.
          </p>
          <div className={styles.details}>
            <div className={styles.detail}>
              <div className={styles.detailIcon}>✉</div>
              <div>
                <div className={styles.detailLabel}>Email</div>
                <div className={styles.detailText}>hello@sunberg.energy</div>
              </div>
            </div>
            <div className={styles.detail}>
              <div className={styles.detailIcon}>✆</div>
              <div>
                <div className={styles.detailLabel}>Phone</div>
                <div className={styles.detailText}>+1 (512) 000-0000</div>
              </div>
            </div>
            <div className={styles.detail}>
              <div className={styles.detailIcon}>⌖</div>
              <div>
                <div className={styles.detailLabel}>Office</div>
                <div className={styles.detailText}>201 Solar Way, Austin, TX 78701</div>
              </div>
            </div>
          </div>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formRow}>
            <input className={styles.input} type="text" placeholder="Your name" />
            <input className={styles.input} type="email" placeholder="Email address" />
          </div>
          <input className={styles.input} type="text" placeholder="Subject" />
          <textarea className={styles.textarea} placeholder="Tell us about your project..."></textarea>
          <button type="submit" className={styles.submit}>Send Message</button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
