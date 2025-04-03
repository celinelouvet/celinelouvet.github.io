import { Box, HStack, Icon, List, Stack, Text, chakra } from '@chakra-ui/react';

import {
  ColorMode,
  H2Heading,
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from '@/components/core';
import { choiceMustGoOnTalkFr as talk } from '@/data/talks';
import { socialIcon } from '@/lib';

import { Subtitle } from './Subtitle.component';
import { Title } from '../Title.component';

export const content = (
  <SlideContent colormode={ColorMode.dark} type={SlideContentTypes.fullContent}>
    <Stack
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
      gap="3em"
    >
      <Stack gap="0" alignItems="center" justifyContent="center">
        <Title title={talk.title} />
        <Box width="70%">
          <Subtitle />
        </Box>
      </Stack>
      <Box marginBottom={'auto'}>
        <H2Heading variant="slide">{talk.author}</H2Heading>
      </Box>

      <Box alignSelf="start">
        <HStack gap="2em">
          {talk.socials.map(({ name, handle, onMain }, index) => {
            if (!onMain) return null;
            return (
              <Box key={index}>
                <chakra.span fontSize="0.8em">
                  <Icon
                    as={socialIcon(name)}
                    marginTop="-1"
                    marginRight="2"
                    verticalAlign="middle"
                  />
                  {handle}
                </chakra.span>
              </Box>
            );
          })}
        </HStack>
      </Box>
    </Stack>
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

    <List.Root>
      <List.Item>
        Qui a eu envie un jour de se lancer dans la création de startup ?
      </List.Item>
      <List.Item>Parmi les personnes qui ont dit oui, qui l’a fait ?</List.Item>
      <List.Item>
        Pour les personnes qui l’ont fait, considérez vous avoir réussi votre
        pari ?
      </List.Item>
      <List.Item>
        Pour les personnes qui en ont créé une, considérez vous avoir réussi
        votre pari ?
      </List.Item>
      <List.Item>
        Pour les personnes qui en avait envie, mais qui n’en ont pas créé,
        est-ce que c’est parce que vous avez peur de l’échec ou de l’inconnu ?
      </List.Item>
    </List.Root>
  </SlideNote>
);

const slide = { content, note };
export default slide;
