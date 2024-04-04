import { Center, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';

import {
  H1Heading,
  InternalLink,
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from '@/components/core';
import { ColorMode } from '@/components/core/slide/slideContent/types';

import { QrToSurvey } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.content2Columns}
    colormode={ColorMode.light}
    column1={
      <Center width="100%" height="100%">
        <QrToSurvey />
      </Center>
    }
  >
    <Stack
      width="100%"
      height="100%"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <H1Heading textAlign="center" variant="slide" size="lg" color="brand.400">
        Sondage
      </H1Heading>

      <InternalLink
        href="/survey"
        textAlign="center"
        variant="slideLight"
        target="_blank"
      >
        https://celine.louvet.me/survey
      </InternalLink>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
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
