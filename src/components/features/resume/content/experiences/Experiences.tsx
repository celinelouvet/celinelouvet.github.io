import { Stack } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { type Experience } from '@/data';
import { useHeadingSize } from '@/hooks';

import { ExperienceDetails } from './ExperienceDetails';

export type ExperiencesProps = {
  experiences: Experience[];
};

export const Experiences: FC<ExperiencesProps> = ({ experiences }) => {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', { keyPrefix: 'experiences' });
  return (
    <Stack spacing="8">
      <H2Heading size={size}>{t('title')}</H2Heading>

      {experiences.map((job) => (
        <ExperienceDetails key={`${job.company}-${job.from}`} job={job} />
      ))}
    </Stack>
  );
};
