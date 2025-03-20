import { Box, Stack, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsDown,
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
      <Box>
        <ThumbsDown variant="slide">La répartition est inégale.</ThumbsDown>
      </Box>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>En fait, ce n’est pas du tout OK.</Text>
    <Text>
      Car en faisant ça, la répartition est inégale et ils sont majoritaires.
    </Text>
    <Text>Je n’avais du poids que si les 2 autres l’acceptaient.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
