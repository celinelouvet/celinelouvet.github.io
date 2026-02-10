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
  SlideContent,
  SlideContentTypes,
  SlideNote,
  colorMode
} from '@/components/slide';
import { choiceMustGoOnTalkFr as talk } from '@/data/talks';
import { socialIcon } from '@/lib';

export const content = (
  <SlideContent colormode={colorMode.dark} type={SlideContentTypes.fullContent}>
    <Stack height="100%" alignItems="center" justifyContent="space-between">
      <HStack
        width="100%"
        gap="brand.500"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack
          alignItems="center"
          justifyContent="space-around"
          gap="brand.200"
          flex="1"
        >
          <Center width="60%">
            <QrCode
              width="100%"
              variant="light"
              value="https://github.com/celinelouvet/confs-docs/blob/main/The_choice_must_go_on.md"
            />
          </Center>
          <H2Heading variant="slide">Ressources évoquées</H2Heading>
        </Stack>

        <Stack
          alignItems="center"
          justifyContent="space-around"
          gap="brand.200"
          flex="1"
        >
          <Center width="60%">
            <QrCode
              width="100%"
              variant="light"
              value="https://openfeedback.io/nXHRu6ulNcZVnxckDHwc/2025-04-14/147qWADPLQvuU2tzuV2c"
            />
          </Center>
          <H2Heading variant="slide">Retours</H2Heading>
        </Stack>
      </HStack>

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
