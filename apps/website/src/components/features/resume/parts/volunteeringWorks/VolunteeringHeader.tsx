import { Flex } from '@chakra-ui/react';
import * as React from 'react';

import { DateFormatter, H3Heading } from 'src/components/core';
import type { Volunteering } from 'src/data';

export const VolunteeringHeader: React.FC<{
  volunteering: Volunteering;
}> = function VolunteeringHeader({ volunteering }) {
  return (
    <Flex alignItems="baseline" gap="2">
      <H3Heading>{volunteering.name}</H3Heading>
      <DateFormatter
        type="period"
        period={{ from: volunteering.from, to: volunteering.to }}
        dateFormat="MMM yyyy"
      />
    </Flex>
  );
};
