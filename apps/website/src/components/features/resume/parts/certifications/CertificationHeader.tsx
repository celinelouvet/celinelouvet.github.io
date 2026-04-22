import { Flex } from '@chakra-ui/react';
import * as React from 'react';

import { DateFormatter, H3Heading } from 'src/components/core';
import type { Certification } from 'src/data';

export const CertificationHeader: React.FC<{
  certification: Certification;
}> = function CertificationHeader({ certification }) {
  return (
    <Flex alignItems="baseline" gap="2">
      <H3Heading>{certification.topic}</H3Heading>
      <DateFormatter
        type="date"
        when={certification.when}
        dateFormat="MMM yyyy"
      />
    </Flex>
  );
};
