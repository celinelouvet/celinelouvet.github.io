import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';
import { Tiles } from 'src/components/slideDecks/components';

const data = [
  { title: 'Qui ?', text: '', shown: true },
  { title: 'Quoi ?', text: 'Une action', shown: false },
  { title: 'Où ?', text: 'Une ressource', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Une règle à vérifier = un tuple"
    alignContent="flex-start"
  >
    <Tiles data={data} />
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Qui</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
