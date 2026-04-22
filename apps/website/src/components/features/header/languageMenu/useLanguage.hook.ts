import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { AVAILABLE_LANGUAGES } from 'src/lib/i18n';

type UseLanguageProps = {
  onChange: (newValue: string, oldValue: string) => void;
};

export function useLanguage({ onChange }: UseLanguageProps) {
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
}
