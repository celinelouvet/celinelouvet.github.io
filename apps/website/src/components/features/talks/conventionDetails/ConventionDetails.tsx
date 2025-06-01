import {
  Button,
  Card,
  Center,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  chakra,
} from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { DateText, H3Heading, Link } from '@/components/core';
import { type ConventionWithTalks, type TalkWithSubject } from '@/data';
import { useHeadingSize } from '@/hooks';

import { TalkLink, TalkPicture, TopicText } from './parts';

export type ConventionDetailsProps = {
  convention: ConventionWithTalks;
};

export const ConventionDetails: React.FC<ConventionDetailsProps> = ({
  convention,
}) => {
  const { t } = useTranslation('talks', { keyPrefix: 'talk' });
  const size = useHeadingSize();

  const Header = () => (
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

  const TalkDetails = (talk: TalkWithSubject) => {
    const link = `/talks/${talk.subjectId}`;

    return (
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
          <TopicText {...talk} />
          <Text>{talk.summary}</Text>

          <HStack alignItems="baseline" gap="8">
            {talk.descriptions && talk.descriptions.length > 0 ? (
              <Link.Internal to={link}>{t('seeAbstract')}</Link.Internal>
            ) : null}

            <TalkLink type="video" links={talk.links} />
            <TalkLink type="audio" links={talk.links} />
            <TalkLink type="slides" links={talk.links} />
          </HStack>
        </Stack>
        <Spacer />
        <TalkPicture {...talk} />
      </Flex>
    );
  };

  return (
    <>
      <Card.Root size="sm" variant="subtle">
        <Card.Header>
          <Header />
        </Card.Header>

        <Card.Body>
          <Flex gap="4" direction={{ base: 'column', lg: 'row' }}>
            <Stack gap="6" width="100%">
              {convention.talks.map((talk) => (
                <TalkDetails key={talk.subjectId} {...talk} />
              ))}
            </Stack>
            <Spacer />
            {convention.coming && convention.program ? (
              <Center>
                <Button asChild variant="solid-link">
                  <Link.External href={convention.program}>
                    {t('program')}
                  </Link.External>
                </Button>
              </Center>
            ) : null}
          </Flex>
        </Card.Body>
      </Card.Root>
    </>
  );
};

type DateLanguageProps = Pick<
  ConventionWithTalks,
  'language' | 'start' | 'end'
>;

const DateLanguage: React.FC<DateLanguageProps> = ({
  language,
  start,
  end,
}) => {
  const { t } = useTranslation('talks', { keyPrefix: 'talk' });

  if (!end) {
    return (
      <HStack
        alignItems="baseline"
        color={{ base: 'brand.300', _dark: 'brand.700' }}
        fontSize="sm"
      >
        <DateText when={start} dateFormat={t('date')} />
        <chakra.span>–</chakra.span>
        <chakra.span>{language.toUpperCase()}</chakra.span>
      </HStack>
    );
  }

  return (
    <>
      <HStack
        alignItems="baseline"
        color={{ base: 'brand.300', _dark: 'brand.700' }}
        fontSize="sm"
      >
        <HStack gap="0">
          <DateText when={start} dateFormat="DD" />
          <chakra.span>-</chakra.span>
          <DateText when={end} dateFormat={t('date')} />
        </HStack>
        <chakra.span>–</chakra.span>
        <chakra.span>{language.toUpperCase()}</chakra.span>
      </HStack>
    </>
  );
};
