import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';
import { type Tile, Tiles } from 'src/components/slideDecks/components';

const data = [
  { text: 'Besoin fonctionnel', shown: true },
  { text: 'Règles', shown: true },
] satisfies Tile[];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Pourquoi ?"
    alignContent="flex-start"
  >
    <Tiles data={data} />
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Besoin qui aura été exprimé sous forme de règles.</Text>
    <Text>Qu’est ce que j’entends par règles ?</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
