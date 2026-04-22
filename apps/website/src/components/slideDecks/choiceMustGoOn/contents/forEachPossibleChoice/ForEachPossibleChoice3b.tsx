import { HStack, Stack, chakra } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { ProgressiveList } from '../../../components/progressiveList';

const items = [
  { text: 'Doit être disponible sur GCP' },
  { text: 'Doit avoir un SDK pour NodeJs' },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Exemple"
    alignContent="flex-start"
  >
    <HStack width="100%" height="100%" gap="brand.300">
      <Stack
        flex="1"
        height="100%"
        alignItems="stretch"
        justifyContent="space-between"
      >
        <Stack
          gap="0"
          padding="brand.50"
          borderRadius="md"
          backgroundColor="brand.800"
        >
          <chakra.strong>Besoin</chakra.strong>
          <chakra.span paddingLeft="brand.100" opacity={0}>
            Sauvegarder des données
          </chakra.span>
        </Stack>

        <Stack
          gap="0"
          padding="brand.50"
          borderRadius="md"
          backgroundColor="brand.800"
          opacity={0}
        >
          <chakra.strong>Contraintes</chakra.strong>
          <ProgressiveList type="numbered" items={items} marginBottom="0" />
        </Stack>
      </Stack>

      <Stack
        flex="1"
        height="100%"
        alignItems="flex-start"
        gap="brand.100"
        opacity={0}
      >
        <chakra.strong>Plusieurs choix possibles</chakra.strong>
        <ProgressiveList
          marginBottom="0"
          items={[
            { text: 'Datastore' },
            { text: 'Firestore' },
            { text: 'Spanner' },
            { text: 'Cloud SQL' },
            { text: 'Cloud Storage' },
          ]}
        />
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
