import { Center, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { LuCalendar1 } from 'react-icons/lu';

import { H3Heading } from 'src/components/core';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Révocation"
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
        <Icon as={LuCalendar1} boxSize="brand.400" color="brand.500" />
      </Center>
      <Stack flex="1" fontSize="brand.125" gap="brand.100">
        <H3Heading variant="slide">A prévoir dès le 1er jour</H3Heading>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>La révocation est à mettre en place dès le début.</Text>
    <Text>
      Plus vous attendrez et plus ça sera complexe de créer un système de
      révocation. De plus, ce n’est pas le jour où vous aurez une fuite critique
      qu’il faudra se pencher sur le sujet.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
