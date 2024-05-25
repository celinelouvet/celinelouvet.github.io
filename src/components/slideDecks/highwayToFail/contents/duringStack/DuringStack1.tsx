import { Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Platform5, VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="En détails"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Center width="100%" height="100%">
      <Platform5 />
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>On va se concentrer sur cette partie-là.</Text>
    <Text>En effet, le plugin n’a rien de particulier.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
