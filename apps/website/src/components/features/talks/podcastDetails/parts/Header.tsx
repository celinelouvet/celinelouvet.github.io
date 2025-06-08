import { Flex } from '@chakra-ui/react';
import type * as React from 'react';

import { H3Heading } from '@/components/core';
import type { Podcast } from '@/data';
import { useHeadingSize } from '@/hooks';

import { DateLanguage } from './DateLanguage';
import { EpisodeText } from './EpisodeText';

export const Header: React.FC<{
  podcast: Podcast;
}> = function Header({ podcast }) {
  const size = useHeadingSize();

  const { name, episode, language, when } = podcast;
  return (
    <Flex
      gap="2"
      alignItems="baseline"
      direction={{ base: 'column', xl: 'row' }}
      flexWrap="wrap"
    >
      <H3Heading size={size}>{name}</H3Heading>
      <EpisodeText episode={episode} />
      <DateLanguage language={language} when={when} />
    </Flex>
  );
};
