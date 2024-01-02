import { Stack } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/typography';
import { type Experience } from '@/data';
import { useHeadingSize } from '@/hooks';

import { ExperienceComponent } from './Experience';

export type ExperiencesProps = {
  experiences: Experience[];
  full?: boolean;
};

export const Experiences: FC<ExperiencesProps> = ({
  experiences,
  full = false,
}) => {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', { keyPrefix: 'experiences' });
  return (
    <Stack spacing={'8'}>
      <H2Heading size={size}>{t('title')}</H2Heading>

      {experiences.map((job) => (
        <ExperienceComponent
          key={`${job.company}-${job.from}`}
          job={job}
          full={full}
        />
      ))}
    </Stack>
  );
};
