import { Box, Flex, HStack, Stack, chakra } from '@chakra-ui/react';
import * as React from 'react';

import { DateFormatter, H3Heading } from '@/components/core';
import { type Podcast } from '@/data';

import { AuthorText, DescriptionText, TitleText } from './parts';

export type PodcastDetailsProps = {
  podcast: Podcast;
};

export const PodcastDetails: React.FC<PodcastDetailsProps> =
  function PodcastDetails({ podcast }) {
    const { name, author, title, language, when, episode, description } =
      podcast;
    return (
      <>
        <Box display={{ base: 'block', md: 'none', _print: 'block' }}>
          <Stack gap="2">
            <Stack gap="0">
              <Flex alignItems="baseline" gap="2" flexWrap="wrap">
                <H3Heading>{name}</H3Heading>
                <DateLanguage language={language} when={when} />
              </Flex>
              <TitleText title={title} episode={episode} />
            </Stack>
            <AuthorText author={author} />
            <DescriptionText description={description} />
          </Stack>
        </Box>

        <Box display={{ base: 'none', md: 'block', _print: 'none' }}>
          <Stack gap="2">
            <Stack gap="0">
              <Flex alignItems="baseline" gap="2" flexWrap="wrap">
                <H3Heading>{name}</H3Heading>
                <DateLanguage language={language} when={when} />
              </Flex>
              <TitleText title={title} episode={episode} />
            </Stack>
            <AuthorText author={author} />
            <DescriptionText description={description} />
          </Stack>
        </Box>
      </>
    );
  };

type DateLanguageProps = Pick<Podcast, 'language' | 'when'>;

const DateLanguage: React.FC<DateLanguageProps> = ({ language, when }) => {
  return (
    <>
      <HStack
        alignItems="baseline"
        color={{ base: 'brand.300', _dark: 'brand.700' }}
        fontSize="sm"
      >
        <DateFormatter type="date" when={when} dateFormat="MMM yyyy" />
        <chakra.span>–</chakra.span>
        <chakra.span>{language.toUpperCase()}</chakra.span>
      </HStack>
    </>
  );
};
