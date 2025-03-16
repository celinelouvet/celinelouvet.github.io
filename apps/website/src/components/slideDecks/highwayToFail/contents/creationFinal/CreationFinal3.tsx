import { Box, Stack, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsUp,
} from '@/components/core';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La répartition des parts"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack width="100%" gap="1em">
      <Box>
        <ThumbsUp variant="slide">
          Ils apportent l’idée, ça me paraît OK.
        </ThumbsUp>
      </Box>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Ça me parait OK, car ils apportent l’idée.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
