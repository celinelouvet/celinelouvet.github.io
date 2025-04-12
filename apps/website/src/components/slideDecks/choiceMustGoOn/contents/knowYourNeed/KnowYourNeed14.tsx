import { Center, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { LuPenTool } from 'react-icons/lu';

import { H3Heading } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Identifier l’inconnu"
    alignContent="flex-start"
  >
    <HStack
      height="100%"
      width="100%"
      alignItems="center"
      justifyContent="flex-start"
      gap="3em"
    >
      <Center width="20%">
        <Icon as={LuPenTool} boxSize="4em" color="brand.500" />
      </Center>
      <Stack flex="1" fontSize="1.25em" gap="1em">
        <H3Heading variant="slide">Zone inconnue</H3Heading>
        <Text>Indiquez ce qui manque de clarté</Text>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = <SlideNote>Ca sent l'inconnu ça</SlideNote>;

const slide = { content, note };
export default slide;
