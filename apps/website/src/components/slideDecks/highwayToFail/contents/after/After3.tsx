import { List, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineAfter } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Alors ?"
    alignContent="flex-start"
    column1={<VerticalTimelineAfter />}
  >
    <Stack gap="1em">
      <List.Root variant="slide">
        <List.Item>
          Des nouvelles connaissances dans des métiers inconnus
        </List.Item>
        <List.Item>
          Une nouvelle manière de penser mon code, « types first »
        </List.Item>
        <List.Item>Une sensation d’échec profonde</List.Item>
      </List.Root>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Malheureusement, il n’y a pas que du positif. J’ai aussi gagné une
      sensation d’échec profonde.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
