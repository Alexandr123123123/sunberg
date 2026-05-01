import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../Contact.module.css';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>{t('contact.label')}</span>
            <h2 className={styles.title}>{t('contact.title')}</h2>
            <p className={styles.desc}>
              {t('contact.desc')}
            </p>
            <div className={styles.details}>
              <div className={styles.detail}>
                <div className={styles.detailIcon}>✉</div>
                <div>
                  <div className={styles.detailLabel}>{t('contact.email_label')}</div>
                  <div className={styles.detailText}>hello@sunberg.energy</div>
                </div>
              </div>
              <div className={styles.detail}>
                <div className={styles.detailIcon}>✆</div>
                <div>
                  <div className={styles.detailLabel}>{t('contact.phone_label')}</div>
                  <div className={styles.detailText}>+1 (512) 000-0000</div>
                </div>
              </div>
              <div className={styles.detail}>
                <div className={styles.detailIcon}>⌖</div>
                <div>
                  <div className={styles.detailLabel}>{t('contact.office_label')}</div>
                  <div className={styles.detailText}>{t('contact.office_text')}</div>
                </div>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formRow}>
              <input className={styles.input} type="text" placeholder={t('contact.form_name')} />
              <input className={styles.input} type="email" placeholder={t('contact.form_email')} />
            </div>
            <input className={styles.input} type="text" placeholder={t('contact.form_subject')} />
            <textarea className={styles.textarea} placeholder={t('contact.form_message')}></textarea>
            <button type="submit" className={styles.submit}>{t('contact.btn_send')}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
