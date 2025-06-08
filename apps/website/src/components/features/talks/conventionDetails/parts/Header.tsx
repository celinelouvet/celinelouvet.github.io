import { Flex } from '@chakra-ui/react';
import type * as React from 'react';

import { H3Heading } from '@/components/core';
import type { ConventionWithTalks } from '@/data';
import { useHeadingSize } from '@/hooks';

import { DateLanguage } from './DateLanguage';

export type HeaderProps = {
  convention: ConventionWithTalks;
};

export const Header: React.FC<HeaderProps> = function Header({ convention }) {
  const size = useHeadingSize();

  return (
    <Flex
      gap="2"
      alignItems="baseline"
      direction={{ base: 'column', xl: 'row' }}
      flexWrap="wrap"
    >
      <H3Heading size={size}>{convention.name}</H3Heading>
      <DateLanguage {...convention} />
    </Flex>
  );
};
