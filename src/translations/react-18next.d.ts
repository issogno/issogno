import EN from './en.json';
import ES from './es.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en';
    resources: {
      es: typeof ES;
      en: typeof EN;
    };
  }
}
