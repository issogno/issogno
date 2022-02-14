import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';

import EN from './en.json';
import ES from './es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: EN
    },
    es: {
      translation: ES
    },
  },
  lng: getLocales()[0].languageCode, // Get the first device language
  fallbackLng: 'en',
  compatibilityJSON: 'v3', // By default React Native projects does not support Intl
});

export default i18n;
