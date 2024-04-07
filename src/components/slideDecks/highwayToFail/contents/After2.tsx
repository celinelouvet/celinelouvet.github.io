import { ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineAfter } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Alors ?"
    alignContent="flex-start"
    column1={<VerticalTimelineAfter />}
  >
    <Stack spacing="1em">
      <UnorderedList>
        <ListItem>
          Des nouvelles connaissances dans des métiers inconnus
        </ListItem>
        <ListItem>
          Une nouvelle manière de penser mon code, « types first »
        </ListItem>
      </UnorderedList>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      J’ai aussi découvert une nouvelle manière de penser mon code. Je commence
      par les types et le reste suit.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
