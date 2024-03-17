import { Box } from '@chakra-ui/react';

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
    title="Des points d’alerte ?"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Box width="100%" height="100%">
      <ThumbsDown variant="slide">
        Manque de volonté de les challenger sur leur vision
      </ThumbsDown>
    </Box>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
