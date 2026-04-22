import { Center, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { LuMessageCircleQuestion } from 'react-icons/lu';

import { H3Heading } from 'src/components/core';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Besoins flous"
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
        <Icon
          as={LuMessageCircleQuestion}
          boxSize="brand.400"
          color="brand.500"
        />
      </Center>
      <Stack flex="1" fontSize="brand.125" gap="brand.100">
        <H3Heading variant="slide">Méthode des « 5 pourquoi »</H3Heading>
        <Text>Utilisée pour comprendre la cause profonde d’un problème.</Text>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <H3Heading variant="slide">Méthode des « 5 pourquoi »</H3Heading>
    <Text>Utilisée pour comprendre la cause profonde d’un problème.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
