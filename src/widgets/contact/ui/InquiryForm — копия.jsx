import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IMaskInput } from 'react-imask';
import { supabase } from '../../../shared/api/supabase';
import styles from './InquiryForm.module.css';

export const InquiryForm = () => {
  const { t } = useTranslation();
  const rawBenefits = t('contactPage.form.benefits', { returnObjects: true });
  const benefits = Array.isArray(rawBenefits) ? rawBenefits : [];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasEmail = formData.email && formData.email.trim() !== '';
    const rawPhone = formData.phone ? formData.phone.replace(/[^0-9]/g, '') : '';
    const hasPhone = rawPhone.length > 2; // +32 is length 2, anything typed after is > 2

    if (!hasEmail && !hasPhone) {
      alert('Please provide either an email address or a phone number so we can contact you.');
      return;
    }

    setIsSubmitting(true);

    let sessionId = localStorage.getItem('sunberg_chat_session');
    if (!sessionId) {
      sessionId = 'session_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('sunberg_chat_session', sessionId);
    }

    const textToSend = [
      `📝 Новая заявка (Inquiry Form)`,
      `Имя: ${formData.name}`,
      `Email: ${formData.email}`,
      `Телефон: ${formData.phone || 'Не указан'}`,
      `Тема: ${formData.subject}`,
      `Детали проекта: ${formData.details}`
    ].join('\n');

    try {
      const currentThreadTs = localStorage.getItem(`sunberg_chat_thread_${sessionId}`);
      const { data, error } = await supabase.functions.invoke('slack-webhook', {
        body: {
          source: 'website',
          sessionId: sessionId,
          text: textToSend,
          threadTs: currentThreadTs,
          messageType: 'contact_form'
        }
      });
      
      if (data && data.ts && (!currentThreadTs || data.threadReset)) {
        localStorage.setItem(`sunberg_chat_thread_${sessionId}`, data.ts);
      }
      if (data && data.ok === false) {
        localStorage.removeItem(`sunberg_chat_thread_${sessionId}`);
      }

      if (error) {
        console.error('Edge Function Error:', error);
        alert('Network error. Please try again.');
      } else if (data && data.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: '', details: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Failed to submit form', err);
      alert('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            {isSuccess ? (
              <div style={{ textAlign: 'center', padding: '40px' }}>
                <div style={{ fontSize: '3rem', color: 'var(--color-primary-light)', marginBottom: '16px' }}>✓</div>
                <h3 style={{ marginBottom: '8px' }}>Message Sent Successfully</h3>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>{t('contactPage.form.fields.name')}</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder={t('contactPage.form.fields.namePlaceholder')} className={styles.input} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>{t('contactPage.form.fields.email')}</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder={t('contactPage.form.fields.emailPlaceholder')} className={styles.input} />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>{t('contactPage.form.fields.phone')}</label>
                  <div className={styles.inputGroup}>
                    {(isPhoneFocused || formData.phone) && (
                      <div className={styles.inputOverlay}>
                        <span>
                          {"+32 (000) 000-00-00".split('').map((char, index) => {
                            const isTyped = index < (formData.phone || '').length;
                            const isDigitPlaceholder = char === '0';
                            return (
                              <span 
                                key={index} 
                                className={isTyped ? styles.hiddenText : ''}
                                style={!isTyped ? { color: isDigitPlaceholder ? '#999' : 'var(--color-text)' } : {}}
                              >
                                {char}
                              </span>
                            );
                          })}
                        </span>
                      </div>
                    )}
                    <IMaskInput 
                      mask="+32 (000) 000-00-00"
                      lazy={true}
                      name="phone"
                      value={formData.phone}
                      onAccept={(value) => setFormData(prev => ({ ...prev, phone: value }))}
                      onFocus={() => {
                        setIsPhoneFocused(true);
                        if ((formData.phone || '').length < 5) {
                          setFormData(prev => ({ ...prev, phone: '+32 (' }));
                        }
                      }}
                      onBlur={() => {
                        setIsPhoneFocused(false);
                        if (formData.phone === '+32 (' || formData.phone === '+32' || formData.phone === '+') {
                          setFormData(prev => ({ ...prev, phone: '' }));
                        }
                      }}
                      placeholder="+32 (000) 000-00-00"
                      className={styles.phoneInput}
                      type="tel"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>{t('contactPage.form.fields.subject')}</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder={t('contactPage.form.fields.subjectPlaceholder')} className={styles.input} />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>{t('contactPage.form.fields.details')}</label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    required
                    placeholder={t('contactPage.form.fields.detailsPlaceholder')}
                    className={styles.textarea}
                  ></textarea>
                </div>

                <button type="submit" className={styles.submit} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : t('contactPage.form.fields.submit')}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
