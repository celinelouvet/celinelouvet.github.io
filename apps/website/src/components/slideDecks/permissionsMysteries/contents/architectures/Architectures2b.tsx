import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';
import { Tiles } from 'src/components/slideDecks/components';

const items = [
  { text: 'Centralisée', shown: false },
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
    <Text>
      Il existe deux types d’architectures possibles pour des systèmes
      distribués :
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
