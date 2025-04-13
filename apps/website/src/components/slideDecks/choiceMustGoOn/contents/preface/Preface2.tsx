import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="CHAOS report"
    alignContent="flex-start"
    topRightCorner=""
  ></SlideContent>
);

export const note = (
  <SlideNote>
    <Text>C’est là que je suis tombée sur le CHAOS report.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
