import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { AVAILABLE_LANGUAGES } from '@/lib/i18n';

type UseLanguage = {
  onChange: (newValue: string, oldValue: string) => void;
};

export const useLanguage = ({ onChange }: UseLanguage) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = React.useState<string>(i18n.language);

  const changeLanguage = React.useCallback(
    (newValue?: string) => {
      const isLanguageAvailable = AVAILABLE_LANGUAGES.some(
        ({ key }) => key === newValue,
      );

      if (newValue && newValue !== language && isLanguageAvailable) {
        i18n.changeLanguage(newValue);
        onChange(newValue, language);
        setLanguage(newValue);
      }
    },
    [i18n, language, onChange],
  );
  return { language, changeLanguage };
};
