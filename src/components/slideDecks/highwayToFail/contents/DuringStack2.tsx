import { Box, Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Stack1, VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="En détails"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Center height="100%">
      <Box height="100%">
        <Stack1 />
      </Box>
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Pour avancer au plus court, je suis partie sur un monolithe, servant les
      fichiers des front-ends.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
