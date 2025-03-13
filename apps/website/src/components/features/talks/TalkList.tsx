import { Box, Stack } from '@chakra-ui/react';
import * as React from 'react';

import { H2Heading } from '@/components/core';
import { type ConventionTalk } from '@/data';

import { TalkDetails } from './talkDetails';

type TalkListProps = {
  talks: ConventionTalk[];
  title: string;
};

const key = ({ subjectId, conventionId }: ConventionTalk) =>
  `${subjectId}-${conventionId}`;

export const TalkList: React.FC<TalkListProps> = ({ talks, title }) => {
  if (talks.length === 0) {
    return null;
  }

  return (
    <Box>
      <H2Heading>{title}</H2Heading>

      <Stack gap="6">
        {talks.map((talk) => (
          <TalkDetails key={key(talk)} talk={talk} />
        ))}
      </Stack>
    </Box>
  );
};
