import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.sectionTitle}
    title="Un projet réussi ?"
    alignContent="flex-start"
  ></SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Qu’est ce qui défini la réussite d’un projet ?</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
