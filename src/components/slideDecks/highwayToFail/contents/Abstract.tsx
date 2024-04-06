import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { talk } from '../data';

export const content = (
  <SlideContent
    type={SlideContentTypes.abstract}
    topic={talk.abstract.title}
    descriptions={talk.abstract.descriptions}
  />
);

const note = (
  <SlideNote>
    <Text></Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
