import {
  Box,
  HStack,
  Icon,
  List,
  Spacer,
  Stack,
  Text,
  chakra,
} from '@chakra-ui/react';

import { H2Heading, H3Heading, QrCode } from 'src/components/core';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  colorMode,
} from 'src/components/slide';
import { highwayToFailTalkFr as talk } from 'src/data/talks';
import { socialIcon } from 'src/lib';

import { Title } from './Title.component';

export const content = (
  <SlideContent colormode={colorMode.dark} type={SlideContentTypes.fullContent}>
    <HStack
      width="100%"
      height="100%"
      gap="brand.200"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack
        height="100%"
        alignItems="center"
        justifyContent="center"
        gap="brand.300"
      >
        <Box>
          <Title title={talk.title} />
        </Box>
        <Box>
          <H2Heading variant="slide">{talk.author}</H2Heading>
        </Box>
        <Spacer />
        <Box alignSelf="start">
          <HStack gap="brand.200">
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
      <Stack
        width="20%"
        alignItems="center"
        justifyContent="center"
        gap="brand.200"
      >
        <QrCode
          width="100%"
          variant="light"
          value="https://celine.louvet.me/voxxedlux"
        />

        <Box textAlign="center">
          <H3Heading variant="slide">
            <Text as="b">Sondage</Text>
          </H3Heading>
          <Text>celine.louvet.me/voxxedlux</Text>
        </Box>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = (
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
