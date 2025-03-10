import { Flex, Text } from '@chakra-ui/react';
import * as React from 'react';

import type { Certification } from '@/data';

import { CertificationHeader } from './CertificationHeader';

export const CertificationContent: React.FC<{
  certification: Certification;
}> = ({ certification }) => {
  return (
    <Flex direction="column">
      <CertificationHeader certification={certification} />
      <Text as="span">{certification.company}</Text>
    </Flex>
  );
};
