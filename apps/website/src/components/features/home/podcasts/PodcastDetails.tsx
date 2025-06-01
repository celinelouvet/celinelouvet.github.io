import {
  Card,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  chakra,
} from '@chakra-ui/react';
import * as React from 'react';

import { DateText, H3Heading } from '@/components/core';
import { type Podcast } from '@/data';
import { useHeadingSize } from '@/hooks';

import {
  AuthorText,
  DescriptionText,
  EpisodeText,
  PodcastLink,
  PodcastPicture,
  TitleText,
} from './parts';

export type PodcastDetailsProps = {
  podcast: Podcast;
};

export const PodcastDetails: React.FC<PodcastDetailsProps> = ({ podcast }) => {
  const { name, author, title, language, when, episode, description, links } =
    podcast;

  const size = useHeadingSize();

  const Header = () => (
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

  return (
    <>
      <Card.Root size="sm" variant="subtle">
        <Card.Header>
          <Header />
        </Card.Header>

        <Card.Body>
          <Flex
            width="100%"
            direction={{ base: 'column', lg: 'row' }}
            gap="4"
            marginLeft={{ base: '0', lg: '6' }}
            paddingX={{ base: '4', lg: '6' }}
            paddingY="2"
            borderLeft="3px solid"
            borderColor={{ base: 'brand.700', _dark: 'brand.600' }}
            borderLeftRadius="md"
          >
            <Stack gap="1">
              <TitleText title={title} />
              <AuthorText author={author} />
              <Text>
                <DescriptionText description={description} />
              </Text>

              <HStack gap="8">
                <PodcastLink type="video" links={links} />
                <PodcastLink type="audio" links={links} />
              </HStack>
            </Stack>
            <Spacer />
            <PodcastPicture podcast={podcast} />
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
