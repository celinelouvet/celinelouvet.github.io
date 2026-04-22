import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { type Tile, Tiles } from '../../../components/tiles';

const reasons = [
  { text: 'Budget respecté', shown: false },
  { text: 'Délai respecté', shown: false },
  { text: 'Besoin satisfait', shown: false },
] satisfies Tile[];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Un projet réussi ?"
    alignContent="flex-start"
  >
    <Tiles data={reasons} />
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Si on prend le point de vue des décideurs, il y a souvent ces 3 critères.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
