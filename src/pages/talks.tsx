import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Talks } from '@/components/features/talks';
import { PageContainer } from '@/components/layout';
import { type Resume, enResume, frResume } from '@/data';
import { type Languages } from '@/lib/i18n';

const getResume = (language: Languages): Resume => {
  if (language === 'fr') {
    return frResume;
  }
  return enResume;
};

export default function Page() {
  const { i18n } = useTranslation();

  const resume = useMemo(
    () => getResume(i18n.language as Languages),
    [i18n.language]
  );

  return (
    <PageContainer>
      <Talks resume={resume} />
    </PageContainer>
  );
}