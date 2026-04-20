import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';
import { Tiles } from 'src/components/slideDecks/components';

const data = [
  { title: 'Qui ?', text: 'Lucie', shown: true },
  { title: 'Quoi ?', text: 'Supprimer', shown: true },
  { title: 'Où ?', text: '', shown: true },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Lucie veut supprimer un administrateur"
    topRightCorner="Exemples"
    alignContent="flex-start"
  >
    <Tiles data={data} />
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>A quoi essaie-t-elle de le faire ?</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
