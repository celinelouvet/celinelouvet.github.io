import { Stack } from '@chakra-ui/react';

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
    title="La roadmap"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Stack spacing="2em" width="100%" height="100%">
      <ThumbsDown variant="slide">Manque d’expérience en startup</ThumbsDown>
    </Stack>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
