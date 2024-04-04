import { Stack, StackItem, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsUp,
} from '@/components/core';

import { VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La mise en contact"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Stack width="100%" gap="1em">
      <StackItem>
        <Text>Discussion lors d’un meetup avec une connaissance.</Text>
      </StackItem>

      <StackItem marginTop="0.5em">
        <ThumbsUp variant="slide">Et si c’était l’occasion ?</ThumbsUp>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Je me dis « pourquoi pas. Qu’est ce que je risque ? ».</Text>
    <Text>Je vais donc les rencontrer.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
