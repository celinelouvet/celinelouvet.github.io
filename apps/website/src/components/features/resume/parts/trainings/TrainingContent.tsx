import { Flex, chakra } from '@chakra-ui/react';
import * as React from 'react';

import type { Training } from 'src/data';

import { TrainingHeader } from './TrainingHeader';

type TrainingContentProps = {
  training: Training;
};

export const TrainingContent: React.FC<TrainingContentProps> =
  function TrainingContent({ training }) {
    return (
      <Flex direction="column">
        <TrainingHeader training={training} />
        <chakra.span>{training.company}</chakra.span>
      </Flex>
    );
  };
