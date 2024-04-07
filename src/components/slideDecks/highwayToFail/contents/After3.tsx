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
        <ListItem>Une sensation d’échec profonde</ListItem>
      </UnorderedList>
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
