import { Box, Stack } from '@chakra-ui/react';
import * as React from 'react';

import { H2Heading } from 'src/components/core';
import { type ConventionWithTalks } from 'src/data';

import { ConventionDetails } from './conventionDetails';

type ConventionListProps = {
  title: string;
  conventions: ConventionWithTalks[];
};

export const ConventionList = React.forwardRef<
  HTMLDivElement,
  ConventionListProps
>(function ConventionList({ conventions, title }, ref) {
  if (conventions.length === 0) {
    return null;
  }

  return (
    <Box ref={ref}>
      <H2Heading>{title}</H2Heading>

      <Stack gap="6">
        {conventions.map((talk) => (
          <ConventionDetails key={key(talk)} convention={talk} />
        ))}
      </Stack>
    </Box>
  );
});

function key({ name, start }: ConventionWithTalks) {
  return `${name}-${start}`;
}
