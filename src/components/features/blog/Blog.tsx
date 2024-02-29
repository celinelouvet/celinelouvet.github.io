import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';

import { Retro2023Summary } from './articles';

export const BlogLayout: FC = () => {
  const { t } = useTranslation('blog');

  return (
    <>
      <H2Heading>{t('title')}</H2Heading>

      <Retro2023Summary link={'/blog/1-retro-2023'} />
    </>
  );
};
