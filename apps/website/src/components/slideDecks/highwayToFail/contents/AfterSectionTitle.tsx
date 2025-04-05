import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

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
    <Text>Ca marquera la fin de l’aventure.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
