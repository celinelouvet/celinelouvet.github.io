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
      </List.Root>
    </Box>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>2 hommes de 25 ans, moi j’en ai 38, à ce moment-là</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
