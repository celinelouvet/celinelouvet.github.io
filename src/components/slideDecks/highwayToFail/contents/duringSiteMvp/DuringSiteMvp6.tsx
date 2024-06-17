import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Si je devais le refaire ?"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    topRightCorner="Mars 2018"
  ></SlideContent>
);

const note = (
  <SlideNote>
    <Text>Si je devais le refaire aujourd’hui ?</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
