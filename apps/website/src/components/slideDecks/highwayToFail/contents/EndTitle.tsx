import {
  Box,
  Center,
  HStack,
  Icon,
  Stack,
  Text,
  chakra,
} from '@chakra-ui/react';

import { H2Heading, QrCode } from '@/components/core';
import {
  ColorMode,
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from '@/components/slide';
import { highwayToFailTalkFr as talk } from '@/data/talks';
import { socialIcon } from '@/lib';

import { Title } from './Title.component';

export const content = (
  <SlideContent colormode={ColorMode.dark} type={SlideContentTypes.fullContent}>
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
        <Center>
          <Title title="Merci pour votre attention" />
        </Center>

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
      </Stack>
      <Stack
        width="25%"
        alignItems="center"
        justifyContent="space-around"
        gap="brand.200"
      >
        <QrCode
          width="100%"
          variant="light"
          value="https://mixitconf.org/2025/highway-to-fail-ou-l-39-histoire-d-39-un-echec-previsible#feedback"
        />
        <H2Heading variant="slide">Retours</H2Heading>
      </Stack>
    </HStack>
  </SlideContent>
);

// export const content = <SlideContent type={SlideContentTypes.endTitle} />;

export const note = (
  <SlideNote>
    <Text>Voilà, merci pour votre attention.</Text>
    <Text>
      Je vous ai mis le QR code pour les feedbacks, si vous avez envie d’en
      laisser un.
    </Text>
    <Text>
      Je reste dans le coin pour quelques temps, donc n’hésitez pas à venir
      discuter.
    </Text>
    <Text>
      Je suis très mauvaise à reconnaître les gens, donc n’hésitez pas à
      m’aborder :)
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
