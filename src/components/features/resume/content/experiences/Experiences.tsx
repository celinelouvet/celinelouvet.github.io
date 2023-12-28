import { Stack } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/typography';
import { type Experience } from '@/data';
import { useHeadingSize } from '@/hooks';

import { FullExperience } from './FullExperience';

export type ExperiencesProps = {
  experiences: Experience[];
};

export const Experiences: FC<ExperiencesProps> = ({ experiences }) => {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', { keyPrefix: 'experiences' });
  return (
    <Stack spacing={'8'}>
      <H2Heading size={size}>{t('title')}</H2Heading>

      {experiences.map((experience) => (
        <FullExperience
          key={`${experience.company}-${experience.from}`}
          job={experience}
        />
      ))}
    </Stack>
  );
};
