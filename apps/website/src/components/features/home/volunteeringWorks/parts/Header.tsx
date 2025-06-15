import { Flex } from '@chakra-ui/react';
import type * as React from 'react';

import { H3Heading, PeriodText } from '@/components/core';
import type { Volunteering } from '@/data';

type HeaderProps = {
  volunteering: Volunteering;
};

export const Header: React.FC<HeaderProps> = function Header({
  volunteering: volunteering,
}) {
  const period = {
    from: volunteering.from,
    to: volunteering.to,
  };

  return (
    <Flex
      gap="2"
      alignItems="baseline"
      direction={{ base: 'column', xl: 'row' }}
      flexWrap="wrap"
    >
      <H3Heading>{volunteering.name}</H3Heading>
      <PeriodText period={period} />
    </Flex>
  );
};
