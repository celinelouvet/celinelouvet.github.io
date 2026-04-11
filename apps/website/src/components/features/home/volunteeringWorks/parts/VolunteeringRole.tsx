import { Flex, Stack, Text } from '@chakra-ui/react';
import type * as React from 'react';

import { DateFormatter, H4Heading } from '@/components/core';
import type { SubVolunteering, Volunteering } from '@/data';

export const VolunteeringRole: React.FC<{
  volunteering: Volunteering | SubVolunteering;
}> = function VolunteeringRole({ volunteering }) {
  const tasks = (volunteering.tasks ?? []).map(({ name }) => name).join(', ');

  return (
    <Stack width="100%" gap="4">
      <Flex
        gap="2"
        alignItems="baseline"
        direction={{ base: 'column', xl: 'row' }}
        flexWrap="wrap"
      >
        <H4Heading>{volunteering.role}</H4Heading>
        <DateFormatter
          type="period"
          period={{ from: volunteering.from, to: volunteering.to }}
        />
      </Flex>
      {tasks.length > 0 ? <Text>{tasks}</Text> : null}
    </Stack>
  );
};
