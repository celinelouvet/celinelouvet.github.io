import { Stack, StackItem, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsDown,
  ThumbsUp,
} from '@/components/core';

import { VerticalTimelineBefore } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="L’occasion"
    alignContent="flex-start"
    column1={<VerticalTimelineBefore />}
    topRightCorner="Nov. 2017"
  >
    <Stack width="100%" gap="1em">
      <StackItem>
        <Text>Rupture de la période d’essai.</Text>
      </StackItem>

      <StackItem marginTop="0.5em">
        <ThumbsUp variant="slide">Allocations chômage pendant 2 ans.</ThumbsUp>
      </StackItem>

      <StackItem marginTop="0.5em">
        <ThumbsDown variant="slide">Plein de doûtes.</ThumbsDown>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Par contre, ça m’a amené des doutes. Et si je n’étais pas faite pour ce
      monde ?
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
