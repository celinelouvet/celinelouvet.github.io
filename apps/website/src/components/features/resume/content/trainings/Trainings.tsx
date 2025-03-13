import { Box, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { type Training } from '@/data';
import { useHeadingSize } from '@/hooks';

import { TrainingContent } from './TrainingContent';

export type TrainingsProps = {
  trainings: Training[];
};

export const Trainings: React.FC<TrainingsProps> = ({ trainings }) => {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', { keyPrefix: 'trainings' });

  return (
    <Stack gap="4">
      <H2Heading size={size}>{t('title')}</H2Heading>

      <Stack gap="8">
        {trainings.map((training) => (
          <Box key={training.topic}>
            <TrainingContent training={training} />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
