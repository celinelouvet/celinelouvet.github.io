import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { DateText, H2Heading, H3Heading } from '@/components/core';
import { type Training } from '@/data';
import { useHeadingSize } from '@/hooks';

export type TrainingsProps = {
  trainings: Training[];
};

export const Trainings: FC<TrainingsProps> = ({ trainings }) => {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', { keyPrefix: 'trainings' });

  return (
    <Stack>
      <H2Heading size={size}>{t('title')}</H2Heading>

      {trainings.map((training) => (
        <Box key={training.topic}>
          <TrainingContent training={training} />
        </Box>
      ))}
    </Stack>
  );
};

const TrainingHeader: FC<{ training: Training }> = ({ training }) => {
  const size = useHeadingSize();

  return (
    <Flex alignItems="baseline" gap="2">
      <H3Heading size={size}>{training.topic}</H3Heading>
      <DateText when={training.when} dateFormat="YYYY" />
    </Flex>
  );
};

const TrainingContent: FC<{ training: Training }> = ({ training }) => {
  return (
    <Flex direction="column">
      <TrainingHeader training={training} />
      <Text>{training.company}</Text>
    </Flex>
  );
};
