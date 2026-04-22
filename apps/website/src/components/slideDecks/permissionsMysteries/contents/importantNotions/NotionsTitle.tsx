import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.sectionTitle}
    title="Notions importantes"
    alignContent="flex-start"
  ></SlideContent>
);

export const note = (
  <SlideNote minutes={10}>
    <Text>
      Avant de poursuivre, nous devons voir quelques notions importantes, qui
      seront utiles pour la suite.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
