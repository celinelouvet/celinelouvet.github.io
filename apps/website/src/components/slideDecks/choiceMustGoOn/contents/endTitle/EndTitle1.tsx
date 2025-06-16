import {
  Box,
  Center,
  HStack,
  Icon,
  Stack,
  Text,
  chakra,
} from '@chakra-ui/react';

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
    <Stack
      height="100%"
      alignItems="center"
      justifyContent="center"
      gap="brand.300"
    >
      <Center flex="1">
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
