import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Nécessité de se démarquer"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Dec. 2017"
  ></SlideContent>
);

const note = (
  <SlideNote>
    <Text>Pour se démarquer,</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
