import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { type Tile, Tiles } from '../../../components/tiles';

const reasons = [
  { text: 'Budget respecté' },
  { text: 'Délai respecté' },
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
    <Text>Le délai initialement prévu a été respecté.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
