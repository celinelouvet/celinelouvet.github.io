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
import { choiceMustGoOnTalkFr as talk } from '@/data/talks';
import { socialIcon } from '@/lib';

import { Title } from '../Title.component';

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
        gap="3em"
      >
        <Center>
          <Title title="Merci pour votre attention" />
        </Center>

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
      </Stack>
      <Stack
        width="25%"
        alignItems="center"
        justifyContent="space-around"
        gap="2em"
      >
        <QrCode
          width="100%"
          variant="light"
          value="https://openfeedback.io/bdxio2024/2024-11-08/639"
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
