import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { type Resume, enResume, frResume } from '@/data';
import { type Languages } from '@/lib/i18n';

const getResume = (language: Languages): Resume => {
  if (language === 'fr') {
    return frResume;
  }
  return enResume;
};

export const useResume = () => {
  const { i18n } = useTranslation();
  return useMemo(() => getResume(i18n.language as Languages), [i18n.language]);
};
