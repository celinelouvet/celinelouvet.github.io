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
    </Stack>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
