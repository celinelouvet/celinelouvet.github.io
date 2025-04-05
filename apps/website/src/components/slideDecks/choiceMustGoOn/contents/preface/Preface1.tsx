import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Chaos report"
    alignContent="flex-start"
  ></SlideContent>
);

const note = (
  <SlideNote>
    <Text>Pour la suite, je me suis appuyée sur le CHAOS report.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
