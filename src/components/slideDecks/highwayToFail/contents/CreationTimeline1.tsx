import { Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Timeline1, VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La roadmap"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Center height="100%">
      <Timeline1 />
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Une roadmap a été prévue.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
