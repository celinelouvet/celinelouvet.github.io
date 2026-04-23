import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';
import { Tiles } from 'src/components/slideDecks/components';

const data = [
  { title: 'Qui ?', text: 'Marc', shown: false },
  { title: 'Quoi ?', text: 'Publier', shown: false },
  { title: 'Où ?', text: 'Un brouillon', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Marc veut publier un brouillon"
    topRightCorner="Exemples"
    alignContent="flex-start"
  >
    <Tiles data={data} />
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Prenons un exemple: Disons que Marc veut publier un brouillon.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
