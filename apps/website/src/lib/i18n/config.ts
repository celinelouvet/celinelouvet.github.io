import { setDefaultOptions } from 'date-fns';
import { enUS, fr } from 'date-fns/locale';
import i18next, { use as i18nextUse } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { DEFAULT_LANGUAGE_KEY, DEFAULT_NAMESPACE } from 'src/lib/i18n';
import { isBrowser } from 'src/lib/ssr';
import locales from 'src/locales';

setDefaultOptions({ locale: DEFAULT_LANGUAGE_KEY === 'en' ? enUS : fr });

i18nextUse(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    defaultNS: DEFAULT_NAMESPACE,
    ns: Object.keys(locales[DEFAULT_LANGUAGE_KEY]),
    resources: locales,
    lng: DEFAULT_LANGUAGE_KEY,
    fallbackLng: DEFAULT_LANGUAGE_KEY,

    returnNull: false,

    interpolation: { escapeValue: false },
  });

i18next.on('languageChanged', (langKey) => {
  setDefaultOptions({ locale: langKey === 'en' ? enUS : fr });
  if (isBrowser) {
    document.documentElement.lang = langKey;
  }
});

export default i18next;
