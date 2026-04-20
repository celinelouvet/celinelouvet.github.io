import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';
import { Tiles } from 'src/components/slideDecks/components';

const data = [
  { title: 'Qui ?', text: 'Lucie', shown: true },
  { title: 'Quoi ?', text: '', shown: true },
  { title: 'Où ?', text: 'Un administrateur', shown: false },
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
    <Text>Qu’est-ce qu’elle essaie de faire ?</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
