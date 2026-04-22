import { Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from 'src/components/core';
import { type Experience } from 'src/data';

import { ExperienceDetails } from './ExperienceDetails';

export type ExperiencesProps = {
  experiences: Experience[];
};

export const Experiences: React.FC<ExperiencesProps> = function Experiences({
  experiences,
}) {
  const { t } = useTranslation('resume', { keyPrefix: 'experiences' });
  return (
    <Stack id="experiences" gap="4">
      <H2Heading>{t('title')}</H2Heading>

      <Stack gap="8">
        {experiences.map((job) => (
          <ExperienceDetails
            key={`${job.company}-${job.from}`}
            job={job}
            level={'main'}
          />
        ))}
      </Stack>
    </Stack>
  );
};
