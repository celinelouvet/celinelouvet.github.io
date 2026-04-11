import { Box, Flex, Stack } from '@chakra-ui/react';
import * as React from 'react';

import { DateFormatter, H4Heading } from '@/components/core';
import type { SubVolunteering } from '@/data';

export const SubVolunteeringHeader: React.FC<{
  volunteering: SubVolunteering;
}> = function SubVolunteeringHeader({ volunteering }) {
  return (
    <>
      <Box display={{ base: 'none', md: 'block', _print: 'none' }}>
        <Flex alignItems="baseline" gap="2">
          <H4Heading>{volunteering.role}</H4Heading>
          <DateFormatter
            type="period"
            period={{ from: volunteering.from, to: volunteering.to }}
            dateFormat="MMM yyyy"
          />
        </Flex>
      </Box>

      <Box display={{ base: 'block', md: 'none', _print: 'block' }}>
        <Stack gap="2">
          <H4Heading>{volunteering.role}</H4Heading>
          <DateFormatter
            type="period"
            period={{ from: volunteering.from, to: volunteering.to }}
            dateFormat="MMM yyyy"
          />
        </Stack>
      </Box>
    </>
  );
};
