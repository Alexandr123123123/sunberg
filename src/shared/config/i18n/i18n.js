import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import es from './locales/es.json';
import nl from './locales/nl.json';
import fr from './locales/fr.json';

// In a real app, you might use a backend plugin to load JSON files.
// For now, we bundle the test translations.
const resources = {
  en: { translation: en },
  es: { translation: es },
  nl: { translation: nl },
  fr: { translation: fr },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language, will be overridden by router
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
