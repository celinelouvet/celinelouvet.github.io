import dayjs from 'dayjs';
import i18next, { use } from 'i18next';
import { initReactI18next } from 'react-i18next';

import { DEFAULT_LANGUAGE_KEY, DEFAULT_NAMESPACE } from '@/lib/i18n';
import { isBrowser } from '@/lib/ssr';
import locales from '@/locales';

dayjs.locale(DEFAULT_LANGUAGE_KEY);

use(initReactI18next).init({
  defaultNS: DEFAULT_NAMESPACE,
  ns: Object.keys(locales[DEFAULT_LANGUAGE_KEY]),
  resources: locales,
  lng: DEFAULT_LANGUAGE_KEY,
  fallbackLng: DEFAULT_LANGUAGE_KEY,

  // Fix issue with i18next types
  // https://www.i18next.com/overview/typescript#argument-of-type-defaulttfuncreturn-is-not-assignable-to-parameter-of-type-xyz
  returnNull: false,

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

i18next.on('languageChanged', (langKey) => {
  dayjs.locale(langKey);
  if (isBrowser) {
    document.documentElement.lang = langKey;
  }
});

export default i18next;
