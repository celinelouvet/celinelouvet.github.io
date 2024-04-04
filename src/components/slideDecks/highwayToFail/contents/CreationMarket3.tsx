import {
  ListItem,
  Stack,
  StackItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsDown,
} from '@/components/core';

import { VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le marché"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Stack width="100%" gap="2em">
      <StackItem>
        <ThumbsDown variant="slide">
          <Text>Étude du marché</Text>
          <UnorderedList paddingLeft="1em">
            <ListItem>Concurrents nombreux,</ListItem>
            <ListItem>En place depuis plusieurs années.</ListItem>
          </UnorderedList>
        </ThumbsDown>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    Comme on l’a vu, les concurrents sont nombreux et certains sont en place
    depuis une dizaine d’années.
  </SlideNote>
);

const slide = { content, note };
export default slide;
