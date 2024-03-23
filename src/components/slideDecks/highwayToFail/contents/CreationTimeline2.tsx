import { Center } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Timeline2, VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La roadmap"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Center width="100%" height="100%">
      <Timeline2 />
    </Center>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
