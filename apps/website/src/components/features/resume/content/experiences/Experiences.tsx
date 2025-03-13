import { Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { type Experience } from '@/data';
import { useHeadingSize } from '@/hooks';

import { ExperienceDetails } from './ExperienceDetails';

export type ExperiencesProps = {
  experiences: Experience[];
};

export const Experiences: React.FC<ExperiencesProps> = ({ experiences }) => {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', { keyPrefix: 'experiences' });
  return (
    <Stack gap="4">
      <H2Heading size={size}>{t('title')}</H2Heading>

      <Stack gap="8">
        {experiences.map((job) => (
          <ExperienceDetails key={`${job.company}-${job.from}`} job={job} />
        ))}
      </Stack>
    </Stack>
  );
};
