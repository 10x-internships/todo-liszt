import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import vi from './vi.json';

import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: en,
      },
      vi: {
        translations: vi,
      },
    },
    defaultNS: 'translations',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
