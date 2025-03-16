import { Box, Stack, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsUp,
} from '@/components/core';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="L’idée"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Stack gap="2em">
      <Box>
        <Text as="span">1 avis laissé = 1 micro-don généré</Text>
      </Box>
      <Box>
        <ThumbsUp variant="slide">J’aime le côté éthique !</ThumbsUp>
      </Box>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>J’aime ce coté éthique !</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
