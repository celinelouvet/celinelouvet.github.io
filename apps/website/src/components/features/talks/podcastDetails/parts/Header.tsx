import { Flex } from '@chakra-ui/react';
import type * as React from 'react';

import { H3Heading } from 'src/components/core';
import type { Podcast } from 'src/data';

import { DateLanguage } from './DateLanguage';
import { EpisodeText } from './EpisodeText';

export const Header: React.FC<{
  podcast: Podcast;
}> = function Header({ podcast }) {
  const { name, episode, language, when } = podcast;
  return (
    <Flex
      gap="2"
      alignItems="baseline"
      direction={{ base: 'column', xl: 'row' }}
      flexWrap="wrap"
    >
      <H3Heading>{name}</H3Heading>
      <EpisodeText episode={episode} />
      <DateLanguage language={language} when={when} />
    </Flex>
  );
};
