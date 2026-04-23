import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';
import { Tiles } from 'src/components/slideDecks/components';

const data = [
  { title: 'Qui ?', text: 'Marc', shown: true },
  { title: 'Quoi ?', text: 'Lister', shown: false },
  { title: 'Où ?', text: 'Les brouillons', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Marc veut lister les brouillons"
    topRightCorner="Exemple"
    alignContent="flex-start"
  >
    <Tiles data={data} />
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Qui ? Marc</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
