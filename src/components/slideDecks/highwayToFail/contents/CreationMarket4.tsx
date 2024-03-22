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
      <StackItem>
        <Text>→ Nécessité de se démarquer rapidement</Text>
        <Text>→ Contenu du MVP</Text>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
