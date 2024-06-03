import { Box, Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Stack3, VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="En détails"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    topRightCorner="Mars 2018"
  >
    <Center width="100%" height="100%">
      <Box height="100%">
        <Stack3 />
      </Box>
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>L’API est réalisée en Haskell.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
