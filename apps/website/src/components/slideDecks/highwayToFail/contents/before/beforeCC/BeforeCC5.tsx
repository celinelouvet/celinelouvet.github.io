import { Box, Stack, Text } from '@chakra-ui/react';

import { ThumbsDown, ThumbsUp } from 'src/components/core';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { VerticalTimelineBefore } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="L’occasion"
    alignContent="flex-start"
    column1={<VerticalTimelineBefore />}
    topRightCorner="Novembre 2017"
  >
    <Stack width="100%" gap="brand.100">
      <Box>
        <Text>Rupture de la période d’essai.</Text>
      </Box>

      <Box marginTop="brand.50">
        <ThumbsUp variant="slide">Allocations chômage pendant 2 ans.</ThumbsUp>
      </Box>

      <Box marginTop="brand.50">
        <ThumbsDown variant="slide">Plein de doûtes.</ThumbsDown>
      </Box>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Par contre, ça m’a amené des doutes. Et si je n’étais pas faite pour ce
      monde ?
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
