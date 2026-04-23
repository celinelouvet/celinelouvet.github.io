import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.sectionTitle}
    title="Architecture"
    alignContent="flex-start"
  ></SlideContent>
);

export const note = (
  <SlideNote minutes={15}>
    <Text>On va maintenant regarder comment architecturer tout ça.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
