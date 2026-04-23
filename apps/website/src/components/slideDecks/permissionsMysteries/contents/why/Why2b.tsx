import { Stack, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';
import { ProgressiveList } from 'src/components/slideDecks/components';

const items = [
  { text: 'Tout le monde peut visualiser un article publié', shown: true },
  { text: 'Seul un administrateur peut supprimer un brouillon', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Exemples de règle"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" justifyContent="center">
      <ProgressiveList items={items} gap="brand.100" />
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      On va considérer un système de blog privé. On va donc pouvoir écrire des
      articles et les publier.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
