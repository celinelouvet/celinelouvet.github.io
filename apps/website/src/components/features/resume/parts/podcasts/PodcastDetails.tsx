import { HStack, Stack, chakra } from '@chakra-ui/react';
import * as React from 'react';

import { DateFormatter, H3Heading } from '@/components/core';
import { type Podcast } from '@/data';

import { AuthorText, DescriptionText, EpisodeText, TitleText } from './parts';

export type PodcastDetailsProps = {
  podcast: Podcast;
};

export const PodcastDetails: React.FC<PodcastDetailsProps> =
  function PodcastDetails({ podcast }) {
    const { name, author, title, language, when, episode, description } =
      podcast;
    return (
      <Stack gap="2">
        <Stack
          alignItems="baseline"
          gap="2"
          flexWrap="wrap"
          flexDirection={{ base: 'row', md: 'row' }}
        >
          <H3Heading>{name}</H3Heading>
          <EpisodeText episode={episode} />
          <DateLanguage language={language} when={when} />
        </Stack>
        <TitleText title={title} />
        <AuthorText author={author} />
        <DescriptionText description={description} />
      </Stack>
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
