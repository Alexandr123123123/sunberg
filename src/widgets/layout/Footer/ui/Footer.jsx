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
          <div className={styles.links}>
            <div>
              <div className={styles.colTitle}>{t('footer.colCompany')}</div>
              <ul className={styles.colList}>
                <li><Link to={`${basePath}/about`}>{t('footer.links.about')}</Link></li>
                <li><Link to={`${basePath}/services`}>{t('footer.links.services')}</Link></li>
                <li><Link to={`${basePath}/projects`}>{t('footer.links.projects')}</Link></li>
                <li><Link to={`${basePath}/contact`}>{t('footer.links.contact')}</Link></li>
              </ul>
            </div>
            <div>
              <div className={styles.colTitle}>{t('footer.colServices')}</div>
              <ul className={styles.colList}>
                <li><Link to={`${basePath}/services`}>{t('footer.links.design')}</Link></li>
                <li><Link to={`${basePath}/services`}>{t('footer.links.installation')}</Link></li>
                <li><Link to={`${basePath}/services`}>{t('footer.links.monitoring')}</Link></li>
                <li><Link to={`${basePath}/services`}>{t('footer.links.maintenance')}</Link></li>
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
