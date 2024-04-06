import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineAfter } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.sectionTitleWithThinColumn}
    title="Après"
    column1={<VerticalTimelineAfter />}
  />
);

const note = (
  <SlideNote>
    <Text>Bonjour</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
