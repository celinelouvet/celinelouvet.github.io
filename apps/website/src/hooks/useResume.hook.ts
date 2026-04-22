import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { type Resume, enResume, frResume } from 'src/data';

const getResume = (language: string): Resume => {
  if (language === 'fr') {
    return frResume;
  }
  return enResume;
};

export const useResume = () => {
  const { i18n } = useTranslation();
  return React.useMemo(() => getResume(i18n.language), [i18n.language]);
};
