import { Stack, StackItem } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsDown,
  ThumbsUp,
} from '@/components/core';

import { VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La répartition des parts"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Stack width="100%" gap="1em">
      <StackItem>
        <ThumbsUp variant="slide">
          Ils apportent l’idée, ça me paraît OK.
        </ThumbsUp>
      </StackItem>
      <StackItem>
        <ThumbsDown variant="slide">
          La répartition est inégale, ils sont donc majoritaires.
        </ThumbsDown>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
