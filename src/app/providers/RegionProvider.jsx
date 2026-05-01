import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BelgiumConfig } from '../../shared/config/regions/belgium';
import { SpainConfig } from '../../shared/config/regions/spain';

const RegionContext = createContext(null);

export const RegionProvider = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  
  const [config, setConfig] = useState(BelgiumConfig); // Default
  
  useEffect(() => {
    const pathParts = pathname.split('/').filter(Boolean);
    
    // Fallback if no region/lang in URL
    if (pathParts.length < 2) {
      navigate('/be/nl' + pathname, { replace: true });
      return;
    }

    const region = pathParts[0];
    const lang = pathParts[1];

    // Determine config
    let currentConfig = BelgiumConfig;
    if (region === 'es') {
      currentConfig = SpainConfig;
    }

    // Validate language for the region
    if (!currentConfig.supportedLangs.includes(lang)) {
      navigate(`/${currentConfig.region}/${currentConfig.defaultLang}`, { replace: true });
      return;
    }

    setConfig(currentConfig);
    
    // Change language in i18next if different
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    
    // Update HTML lang attribute for SEO
    document.documentElement.lang = lang;

  }, [pathname, navigate, i18n]);

  return (
    <RegionContext.Provider value={{ config, region: config.region, lang: i18n.language }}>
      {children}
    </RegionContext.Provider>
  );
};

export const useRegion = () => {
  const context = useContext(RegionContext);
  if (!context) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return context;
};
