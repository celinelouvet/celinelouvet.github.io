import { Flex } from '@chakra-ui/react';
import type * as React from 'react';

import { H3Heading } from 'src/components/core';
import type { ConventionWithTalks } from 'src/data';

import { DateLanguage } from './DateLanguage';

type HeaderProps = {
  convention: ConventionWithTalks;
};

export const Header: React.FC<HeaderProps> = function Header({ convention }) {
  return (
    <Flex
      gap="2"
      alignItems="baseline"
      direction={{ base: 'column', xl: 'row' }}
      flexWrap="wrap"
    >
      <H3Heading>{convention.name}</H3Heading>
      <DateLanguage {...convention} />
    </Flex>
  );
};
