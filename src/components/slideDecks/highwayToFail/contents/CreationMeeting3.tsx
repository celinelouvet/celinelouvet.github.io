import { Box } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Qui sont-ils ?"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Box width="100%" height="100%"></Box>
  </SlideContent>
);

const note = <SlideNote>Qui sont-ils ?</SlideNote>;

const slide = { content, note };
export default slide;
