import { Flex } from '@chakra-ui/react';
import * as React from 'react';

import { DateText, H3Heading } from '@/components/core';
import type { Training } from '@/data';
import { useHeadingSize } from '@/hooks';

type TrainingHeaderProps = {
  training: Training;
};

export const TrainingHeader: React.FC<TrainingHeaderProps> =
  function TrainingHeader({ training }) {
    const size = useHeadingSize();

    return (
      <Flex alignItems="baseline" gap="2">
        <H3Heading size={size}>{training.topic}</H3Heading>
        <DateText when={training.when} dateFormat="YYYY" />
      </Flex>
    );
  };
