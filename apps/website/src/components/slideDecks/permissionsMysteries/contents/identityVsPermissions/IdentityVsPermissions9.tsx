import { Center, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { PiSparkleFill } from 'react-icons/pi';

import { H3Heading } from 'src/components/core';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title=""
    alignContent="flex-start"
  >
    <HStack
      height="100%"
      width="100%"
      alignItems="center"
      justifyContent="flex-start"
      gap="brand.300"
    >
      <Center width="20%">
        <Icon as={PiSparkleFill} boxSize="brand.400" color="brand.500" />
      </Center>
      <Stack flex="1" fontSize="brand.125" gap="brand.100">
        <H3Heading variant="slide">Identité ≠ Permissions</H3Heading>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Si vous devez vous rappeler d’une chose aujourd’hui, c’est celle-ci.
    </Text>
    <Text>Différenciez bien les 2 dans votre manière les d’implémenter.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
