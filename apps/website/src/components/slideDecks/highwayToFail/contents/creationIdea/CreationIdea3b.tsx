import { Stack, Text } from '@chakra-ui/react';

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
    <Stack gap="1em">
      <Text>1 avis laissé = 1 micro-don généré</Text>

      <ThumbsUp variant="slide">J’aime le côté éthique !</ThumbsUp>
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
