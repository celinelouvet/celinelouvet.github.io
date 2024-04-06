import { Box, Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Stack5, VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Si je devais le refaire ?"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Center height="100%">
      <Box height="100%">
        <Stack5 />
      </Box>
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Je m’appuierai sur une techno que je maitrise pour aller vite, Node dans
      mon cas.
    </Text>
    <Text>Car au-delà du choix du langage, le reste était bon.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
