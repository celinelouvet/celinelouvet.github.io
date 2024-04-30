import { HStack, Icon, Spacer, Stack, StackItem, Text } from '@chakra-ui/react';
import { type FC } from 'react';

import {
  ColorMode,
  H1Heading,
  H2Heading,
  H3Heading,
  QrCode,
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from '@/components/core';
import { socialIcon } from '@/components/features/icons';
import { highwayToFailTalkFr as talk } from '@/data/talks';

const Title: FC<{ title: string }> = ({ title }) =>
  title.split('\n').map((line, i) => (
    <H1Heading key={i} variant="slide" size="sm" textAlign="center">
      {line}
    </H1Heading>
  ));

export const content = (
  <SlideContent colormode={ColorMode.dark} type={SlideContentTypes.fullContent}>
    <HStack
      width="100%"
      height="100%"
      gap="2em"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack
        height="100%"
        alignItems="center"
        justifyContent="center"
        spacing="3em"
      >
        <StackItem>
          <Title title={talk.title} />
        </StackItem>
        <StackItem>
          <H2Heading>{talk.author}</H2Heading>
        </StackItem>
        <Spacer />
        <StackItem alignSelf="start">
          <HStack gap="2em">
            {talk.socials.map(({ name, handle, onMain }, index) => {
              if (!onMain) return null;
              return (
                <StackItem key={index}>
                  <Text as="span" fontSize="0.8em">
                    <Icon
                      as={socialIcon(name)}
                      marginTop="-1"
                      marginRight="2"
                      verticalAlign="middle"
                    />
                    {handle}
                  </Text>
                </StackItem>
              );
            })}
          </HStack>
        </StackItem>
      </Stack>
      <Stack width="20%" alignItems="center" justifyContent="center" gap="2em">
        <QrCode value="https://celine.louvet.me/yeeso" />

        <StackItem textAlign="center">
          <H3Heading variant="slide">Sondage</H3Heading>
          <Text>celine.louvet.me/yeeso</Text>
        </StackItem>
      </Stack>
    </HStack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Bonjour à tous et à toutes,</Text>
    <Text>
      Avant toutes choses, je voulais vous remercier d’être venus m’écouter.
    </Text>
    <Text>
      C’est la première fois que je vais présenter ce talk. J’espère qu’il
      pourra vous apprendre des choses.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
