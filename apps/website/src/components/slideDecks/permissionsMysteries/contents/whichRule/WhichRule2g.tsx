import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';
import { Tiles } from 'src/components/slideDecks/components';

const data = [
  { title: 'Qui ?', text: 'Un acteur', shown: true },
  { title: 'Quoi ?', text: 'Une action', shown: true },
  { title: 'Où ?', text: 'Une ressource', shown: true },
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
    <Text>La ressource</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
