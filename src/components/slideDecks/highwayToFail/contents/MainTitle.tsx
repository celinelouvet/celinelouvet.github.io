import {
  HStack,
  Icon,
  ListItem,
  Spacer,
  Stack,
  StackItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
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
          <H2Heading variant="slide">{talk.author}</H2Heading>
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
        <QrCode value="https://celine.louvet.me/technwine" />

        <StackItem textAlign="center">
          <H3Heading variant="slide">
            <Text as="b">Sondage</Text>
          </H3Heading>
          <Text>celine.louvet.me/technwine</Text>
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
      C’est un sujet qui me tient à coeur. J’espère qu’il pourra vous apprendre
      des choses.
    </Text>

    <Text>
      Par curiosité, j’aimerais faire un petit sondage. Est-ce que vous arrivez
      à accéder à internet ?
    </Text>
    <Text>
      Si oui: Parfait, pouvez-vous scanner ce QR code ? Il vous amènera sur un
      sondage. On regardera les résultats un peu plus loin.
    </Text>
    <Text>Si non: Bon, tant pis, on va le faire à mains levées.</Text>

    <UnorderedList>
      <ListItem>
        Qui a eu envie un jour de se lancer dans la création de startup ?
      </ListItem>
      <ListItem>Parmi les personnes qui ont dit oui, qui l’a fait ?</ListItem>
      <ListItem>
        Pour les personnes qui l’ont fait, considérez vous avoir réussi votre
        pari ?
      </ListItem>
      <ListItem>
        Pour les personnes qui en ont créé une, considérez vous avoir réussi
        votre pari ?
      </ListItem>
      <ListItem>
        Pour les personnes qui en avait envie, mais qui n’en ont pas créé,
        est-ce que c’est parce que vous avez peur de l’échec ou de l’inconnu ?
      </ListItem>
    </UnorderedList>
  </SlideNote>
);

const slide = { content, note };
export default slide;
