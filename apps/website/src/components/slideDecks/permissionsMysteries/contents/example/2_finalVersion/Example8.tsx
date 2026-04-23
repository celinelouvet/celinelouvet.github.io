import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.sectionTitleWithThinColumn}
    title="Version 2"
    column1={<Text>Exemple</Text>}
    alignContent="flex-start"
  ></SlideContent>
);

export const note = (
  <SlideNote minutes={2} seconds={30}>
    <Text>Puis cette application va évoluer.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
