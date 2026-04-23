import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';
import { Tiles } from 'src/components/slideDecks/components';

const data = [
  { title: 'Qui ?', text: 'Marc', shown: false },
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
    <Text>
      Si on applique le principe du tuple d’autorisation à la demande de Marc,
      on obtient ceci.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
