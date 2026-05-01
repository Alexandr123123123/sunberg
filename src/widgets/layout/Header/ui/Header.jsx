import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../shared/ui/Button';
import { useRegion } from '../../../../app/providers/RegionProvider';
import styles from '../Header.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const menuVariants = {
  closed: { x: '-100%', transition: { duration: 0.6, ease: [0.2, 0, 0.2, 1] } },
  open: { x: 0, transition: { duration: 0.6, ease: [0.2, 0, 0.2, 1] } }
};

const linkVariants = {
  closed: { opacity: 0, y: 20 },
  open: (i) => ({
    opacity: 1, 
    y: 0, 
    transition: { delay: 0.2 + (i * 0.1), duration: 0.5 }
  })
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { config, region, lang } = useRegion();
  
  const basePath = `/${region}/${lang}`;

  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { to: `${basePath}`, label: t('header.home'), hideDesktop: true },
    { to: `${basePath}/about`, label: t('header.about') },
    { to: `${basePath}/services`, label: t('header.services') },
    { to: `${basePath}/projects`, label: t('header.projects') },
    { to: `${basePath}/tech`, label: t('header.tech') }
  ];

  const handleLangChange = (newLang) => {
    const parts = location.pathname.split('/').filter(Boolean);
    if (parts.length >= 2) {
      parts[1] = newLang;
      const newPath = '/' + parts.join('/');
      navigate(newPath);
    } else {
      navigate(`/${region}/${newLang}`);
    }
  };

  const LangSwitcher = ({ currentLang, supportedLangs, isMobile = false }) => {
    if (!supportedLangs || supportedLangs.length <= 1) return null;
    return (
      <div className={isMobile ? styles.mobileLangSwitcher : styles.langSwitcher}>
        {supportedLangs.map((langCode, index) => (
          <React.Fragment key={langCode}>
            {index > 0 && <span className={styles.langDivider}>|</span>}
            <button
              onClick={() => handleLangChange(langCode)}
              className={`${isMobile ? styles.mobileLangBtn : styles.langBtn} ${currentLang === langCode ? styles.langActive : ''}`}
              aria-label={`Change language to ${langCode}`}
            >
              {langCode}
            </button>
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <header className={`${styles.header} ${isMenuOpen ? styles.headerOpen : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to={`${basePath}`} className={styles.logo}>Sun<span>berg</span></Link>
        
        <nav className={styles.nav}>
          {navLinks.filter(l => !l.hideDesktop).map(link => (
            <Link key={link.to} to={link.to} className={styles.link}>{link.label}</Link>
          ))}
          <Button to={`${basePath}/contact`} variant="primary" size="sm">{t('header.contact')}</Button>
          <LangSwitcher currentLang={lang} supportedLangs={config?.supportedLangs} />
        </nav>

        <button 
          className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className={styles.mobileMenu}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className={styles.mobileNav}>
              {navLinks.map((link, i) => (
                <motion.div key={link.to} custom={i} variants={linkVariants}>
                  <Link to={link.to} className={styles.mobileLink}>{link.label}</Link>
                </motion.div>
              ))}
              
              <motion.div custom={navLinks.length} variants={linkVariants}>
                <Button to={`${basePath}/contact`} variant="primary" size="lg" className={styles.mobileCta}>{t('header.contact')}</Button>
              </motion.div>

              <motion.div custom={navLinks.length + 1} variants={linkVariants}>
                <LangSwitcher currentLang={lang} supportedLangs={config?.supportedLangs} isMobile={true} />
              </motion.div>
            </div>

            <motion.div 
              className={styles.mobileFooter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className={styles.mobileContact}>
                <p>hello@sunberg.energy</p>
                <p>+1 (512) 000-0000</p>
              </div>
              <div className={styles.socials}>
                <span>LinkedIn</span>
                <span>Instagram</span>
                <span>Twitter</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
