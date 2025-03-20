import { Box, List, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Qui sont-ils ?"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Box width="100%" height="100%">
      <List.Root variant="slide">
        <List.Item>2 hommes (~25 ans),</List.Item>
        <List.Item>se connaissent très bien,</List.Item>
      </List.Root>
    </Box>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>qui se connaissent très bien, je ne les connais pas du tout</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
