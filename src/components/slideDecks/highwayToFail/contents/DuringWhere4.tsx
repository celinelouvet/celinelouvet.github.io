import { Stack, StackItem, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsDown,
} from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Où ça se passe ?"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack width="100%" gap="1em">
      <StackItem>
        <Text>Canapé & espace de coworking</Text>
      </StackItem>
      <StackItem>
        <ThumbsDown variant="slide">Passer son temps chez quelqu’un</ThumbsDown>
      </StackItem>
      <StackItem>
        <ThumbsDown variant="slide">Les coworkings coûtent cher</ThumbsDown>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Malheureusement les espaces de coworking coûtent cher, donc ça sera
      ponctuel.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
