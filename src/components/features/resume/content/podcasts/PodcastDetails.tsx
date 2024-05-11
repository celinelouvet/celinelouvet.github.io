import {
  HStack,
  Stack,
  type StyleConfig,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { type FC } from 'react';

import { DateText, H3Heading } from '@/components/core';
import { type Podcast } from '@/data';
import { useHeadingSize } from '@/hooks';

import { AuthorText, DescriptionText, EpisodeText, TitleText } from './parts';

export type PodcastDetailsProps = {
  podcast: Podcast;
};

export const PodcastDetails: FC<PodcastDetailsProps> = ({ podcast }) => {
  const size = useHeadingSize();

  const { name, author, title, language, when, episode, description } = podcast;
  return (
    <Stack spacing="2">
      <Stack sx={containerCss}>
        <H3Heading size={size}>{name}</H3Heading>
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

const DateLanguage: FC<DateLanguageProps> = ({ language, when }) => {
  const color = useColorModeValue('gray.500', 'gray.400');

  return (
    <>
      <HStack alignItems="baseline" color={color} fontSize="sm">
        <DateText when={when} dateFormat="MMM YYYY" as="span" />
        <Text as="span">–</Text>
        <Text as="span">{language.toUpperCase()}</Text>
      </HStack>
    </>
  );
};

const containerCss = {
  alignItems: 'baseline',
  flexDirection: { base: 'row', md: 'row' },
  flexWrap: 'wrap',
  gap: '2',
} satisfies StyleConfig['baseStyle'];
