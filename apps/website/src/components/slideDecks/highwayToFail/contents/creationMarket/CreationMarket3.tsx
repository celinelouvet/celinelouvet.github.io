import { Stack, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsDown,
} from '@/components/core';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Étude de marché"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack width="100%" gap="2em">
      <ThumbsDown variant="slide">
        Nécessité de se démarquer rapidement
      </ThumbsDown>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Il va donc être vital de se démarquer rapidement</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
