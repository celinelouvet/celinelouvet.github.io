import { Flex } from '@chakra-ui/react';
import * as React from 'react';

import { DateText, H3Heading } from '@/components/core';
import type { Certification } from '@/data';
import { useHeadingSize } from '@/hooks';

export const CertificationHeader: React.FC<{
  certification: Certification;
}> = function CertificationHeader({ certification }) {
  const size = useHeadingSize();

  return (
    <Flex alignItems="baseline" gap="2">
      <H3Heading size={size}>{certification.topic}</H3Heading>
      <DateText when={certification.when} dateFormat="MMM YYYY" />
    </Flex>
  );
};
