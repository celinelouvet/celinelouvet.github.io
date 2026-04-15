import { Stack, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { ProgressiveList } from '../../../components/progressiveList';

const items = [
  { text: 'Titre' },
  { text: 'Statut (Acceptée, Refusée, Annulée, Remplacée)' },
  { text: 'Petite description de la décision', shown: false },
  { text: 'Description du besoin et de ses contraintes', shown: false },
  { text: 'Description de la solution et de son argumentaire', shown: false },
  { text: 'etc.', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Tracer les raisons"
    alignContent="flex-start"
  >
    <Stack gap="brand.100" width="100%" height="100%" alignItems="flex-start">
      <Text>Decision records</Text>
      <ProgressiveList items={items} />
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
