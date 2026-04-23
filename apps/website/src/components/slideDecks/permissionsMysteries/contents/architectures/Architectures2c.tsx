import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';
import { Tiles } from 'src/components/slideDecks/components';

const items = [
  { text: 'Centralisée', shown: true },
  { text: 'Décentralisée', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Système distribué"
    alignContent="flex-start"
  >
    <Tiles data={items} />
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Centralisée</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
