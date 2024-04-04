import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Si je devais le refaire ?"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  ></SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Si je devais le refaire aujourd’hui, je ferai vraiement autrement.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
