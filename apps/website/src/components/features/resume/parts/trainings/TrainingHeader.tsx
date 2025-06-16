import { Flex } from '@chakra-ui/react';
import * as React from 'react';

import { DateFormatter, H3Heading } from '@/components/core';
import type { Training } from '@/data';

type TrainingHeaderProps = {
  training: Training;
};

export const TrainingHeader: React.FC<TrainingHeaderProps> =
  function TrainingHeader({ training }) {
    return (
      <Flex alignItems="baseline" gap="2">
        <H3Heading>{training.topic}</H3Heading>

        <DateFormatter type="date" when={training.when} dateFormat="yyyy" />
      </Flex>
    );
  };
