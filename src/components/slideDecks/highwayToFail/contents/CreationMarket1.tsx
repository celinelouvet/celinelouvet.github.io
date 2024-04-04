import { Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Market1, VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le marché"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Center width="100%" height="100%">
      <Market1 />
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Voici la représentation des concurrents présents sur le marché.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
