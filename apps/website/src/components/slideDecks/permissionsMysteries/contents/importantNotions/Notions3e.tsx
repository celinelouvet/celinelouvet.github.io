import { HStack, Stack, Text } from '@chakra-ui/react';

import { H3Heading } from 'src/components/core';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';
import { ProgressiveList } from 'src/components/slideDecks/components';

const examples = [
  { text: 'Identité : su, sudo', shown: true },
  { text: 'Droits : appel d’un service', shown: true },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Délégation"
    alignContent="flex-start"
  >
    <HStack width="100%" height="100%" gap="brand.500">
      <Stack height="100%" flex="1" gap="brand.100" justifyContent="center">
        <Text>Transmission des caractéristiques de l’utilisateur</Text>
      </Stack>
      <Stack height="100%" flex="1" gap="brand.100" justifyContent="center">
        <H3Heading variant="slide">Exemples</H3Heading>
        <ProgressiveList items={examples} />
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Ou une délégation de droits, quand un service appelle un autre service à
      la place de l’utilisateur. L’utilisateur va, alors, déléguer ses droits.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
