import { Flex, Text } from '@chakra-ui/react';
import * as React from 'react';

import type { Training } from '@/data';

import { TrainingHeader } from './TrainingHeader';

export const TrainingContent: React.FC<{ training: Training }> = ({
  training,
}) => {
  return (
    <Flex direction="column">
      <TrainingHeader training={training} />
      <Text as="span">{training.company}</Text>
    </Flex>
  );
};
