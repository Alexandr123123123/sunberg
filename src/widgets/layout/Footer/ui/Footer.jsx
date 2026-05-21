import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useRegion } from '../../../../app/providers/RegionProvider';
import styles from '../Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();
  const { region, lang } = useRegion();
  const basePath = `/${region}/${lang}`;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <div className={styles.logo}>Sun<span>berg</span></div>
            <p className={styles.tagline}>
              {t('footer.tagline')}
            </p>
          </div>
          <div className={styles.middleText}>
            <span>{t('footer.middleText1')}</span>
            <span>{t('footer.middleText2')}</span>
          </div>
          <div className={styles.links}>
            <div>
              <div className={styles.colTitle}>Contact Us</div>
              <ul className={styles.colList}>
                <li><a href="tel:+32473366881">+32 473 36 68 81</a></li>
                <li><a href="mailto:hello@sunberg.energy">hello@sunberg.energy</a></li>
                <li style={{ marginTop: '12px' }}>
                  <a href="https://linkedin.com/company/sunberg" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>{t('footer.rights')}</span>
          <span>{t('footer.builtWith')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
