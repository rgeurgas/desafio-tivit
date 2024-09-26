import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationBr from './locales/br/translation';

i18n.use(initReactI18next).init({
  resources: {
    br: translationBr,
  },
  lng: 'br',
  fallbackLng: 'br',
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
});

export default i18n;
