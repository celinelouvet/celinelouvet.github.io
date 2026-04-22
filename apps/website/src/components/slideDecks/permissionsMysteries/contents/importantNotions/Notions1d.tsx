import { HStack, Stack, Text } from '@chakra-ui/react';

import { H3Heading } from 'src/components/core';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';
import { ProgressiveList } from 'src/components/slideDecks/components';

const items = [
  { text: 'Changement de droits', shown: true },
  { text: 'Départ d’un employé', shown: false },
  { text: 'Fuite d’un identifiant', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Révocation"
    alignContent="flex-start"
  >
    <HStack width="100%" height="100%" gap="brand.500">
      <Stack height="100%" flex="1" gap="brand.100" justifyContent="center">
        <Text>Suppression des droits d’un utilisateur</Text>
      </Stack>
      <Stack height="100%" flex="1" gap="brand.100" justifyContent="center">
        <H3Heading variant="slide">Pourquoi ?</H3Heading>
        <ProgressiveList items={items} />
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Lors des changements de droits d’un utilisateur.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
