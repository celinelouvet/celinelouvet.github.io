import {
  Box,
  Card,
  Flex,
  HStack,
  Spacer,
  Stack,
  chakra,
} from '@chakra-ui/react';
import * as React from 'react';

import { DateText, H3Heading } from '@/components/core';
import { type Podcast } from '@/data';
import { useHeadingSize } from '@/hooks';

import { AuthorText, DescriptionText, EpisodeText, TitleText } from './parts';
import { AllLinks } from '../allLinks';

export type PodcastDetailsProps = {
  podcast: Podcast;
};

export const PodcastDetails: React.FC<PodcastDetailsProps> = ({ podcast }) => {
  const size = useHeadingSize();

  const { name, author, title, language, when, episode, description } = podcast;

  return (
    <>
      <Card.Root size="sm" variant="subtle">
        <Card.Header>
          <Stack
            alignItems="baseline"
            flexDirection={{ base: 'row', md: 'row' }}
            flexWrap="wrap"
            gap="2"
          >
            <H3Heading size={size}>{name}</H3Heading>
            <EpisodeText episode={episode} />
            <DateLanguage language={language} when={when} />
          </Stack>
        </Card.Header>

        <Card.Body>
          <Flex gap="4" direction={{ base: 'column', lg: 'row' }}>
            <Stack gap="2">
              <TitleText title={title} />
              <AuthorText author={author} />
              <DescriptionText description={description} />
            </Stack>
            <Spacer />
            <Box>
              <AllLinks links={podcast.links} />
            </Box>
          </Flex>
        </Card.Body>
      </Card.Root>
    </>
  );
};

type DateLanguageProps = Pick<Podcast, 'language' | 'when'>;

const DateLanguage: React.FC<DateLanguageProps> = ({ language, when }) => (
  <>
    <HStack
      alignItems="baseline"
      color={{ base: 'brand.300', _dark: 'brand.700' }}
      fontSize="sm"
    >
      <DateText when={when} dateFormat="MMM YYYY" />
      <chakra.span>–</chakra.span>
      <chakra.span>{language.toUpperCase()}</chakra.span>
    </HStack>
  </>
);
