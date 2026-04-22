import { Flex, chakra } from '@chakra-ui/react';
import * as React from 'react';

import type { Certification } from 'src/data';

import { CertificationHeader } from './CertificationHeader';

export const CertificationContent: React.FC<{
  certification: Certification;
}> = function CertificationContent({ certification }) {
  return (
    <Flex direction="column">
      <CertificationHeader certification={certification} />
      <chakra.span>{certification.company}</chakra.span>
    </Flex>
  );
};
