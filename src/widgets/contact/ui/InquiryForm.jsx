import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './InquiryForm.module.css';

export const InquiryForm = () => {
  const { t } = useTranslation();
  const rawBenefits = t('contactPage.form.benefits', { returnObjects: true });
  const benefits = Array.isArray(rawBenefits) ? rawBenefits : [];

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
            <span className="section-label">{t('contactPage.form.consultation')}</span>
            <h2 className={styles.title}>{t('contactPage.form.title')}</h2>
            <p className={styles.desc}>
              {t('contactPage.form.desc')}
            </p>

            <ul className={styles.benefits}>
              {benefits.map((b, i) => (
                <li key={i}>
                  <strong>{b.title}</strong>
                  <span>{b.desc}</span>
                </li>
              ))}
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
                  <label className={styles.label}>{t('contactPage.form.fields.name')}</label>
                  <input type="text" placeholder={t('contactPage.form.fields.namePlaceholder')} className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>{t('contactPage.form.fields.email')}</label>
                  <input type="email" placeholder={t('contactPage.form.fields.emailPlaceholder')} className={styles.input} />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>{t('contactPage.form.fields.phone')}</label>
                <input type="tel" placeholder={t('contactPage.form.fields.phonePlaceholder')} className={styles.input} />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>{t('contactPage.form.fields.subject')}</label>
                <input type="text" placeholder={t('contactPage.form.fields.subjectPlaceholder')} className={styles.input} />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>{t('contactPage.form.fields.details')}</label>
                <textarea
                  placeholder={t('contactPage.form.fields.detailsPlaceholder')}
                  className={styles.textarea}
                ></textarea>
              </div>

              <button type="submit" className={styles.submit}>
                {t('contactPage.form.fields.submit')}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
