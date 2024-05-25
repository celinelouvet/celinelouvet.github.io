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
    topRightCorner="Mi-Dec. 2017"
  >
    <Stack width="100%" gap="2em">
      <ThumbsDown variant="slide">
        Nécessité de se démarquer rapidement
      </ThumbsDown>
      <ThumbsDown variant="slide">Contenu du MVP</ThumbsDown>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Et de réfléchir au contenu du MVP</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
