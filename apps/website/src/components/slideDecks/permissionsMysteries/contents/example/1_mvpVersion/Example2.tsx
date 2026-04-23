import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.sectionTitleWithThinColumn}
    title="Version 1 — Le MVP"
    column1={<Text>Exemple</Text>}
    alignContent="flex-start"
  ></SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Tout d’abord son MVP.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
