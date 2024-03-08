import { Stack } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';

import { FeedbackSummary, March8Summary, Retro2023Summary } from './articles';

export const BlogLayout: FC = () => {
  const { t } = useTranslation('blog');

  return (
    <>
      <H2Heading>{t('title')}</H2Heading>

      <Stack gap="8">
        <March8Summary link="/blog/3-Non-mais-la-situation" />
        <FeedbackSummary link="/blog/2-feedbacks" />
        <Retro2023Summary link="/blog/1-retro-2023" />
      </Stack>
    </>
  );
};
