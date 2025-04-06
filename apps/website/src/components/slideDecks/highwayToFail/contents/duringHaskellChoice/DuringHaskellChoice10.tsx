import { Stack, Text } from '@chakra-ui/react';

import { ThumbsDown } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Pourquoi Haskell ?"
    alignContent="flex-start"
    topRightCorner="Mars 2018"
    column1={<VerticalTimelineDuring />}
  >
    <Stack height="100%">
      <ThumbsDown variant="slide">Hype Driven Development</ThumbsDown>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>J’ai fait ce qu’on appelle de la Hype Driven Development.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
