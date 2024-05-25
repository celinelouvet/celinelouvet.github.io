import { Stack, StackItem, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsUp,
} from '@/components/core';

import { VerticalTimelineBefore } from '../components';

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
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Me voici donc chômeuse.</Text>
    <Text>
      J’ai 2 ans devant moi au maximum. Bon, les conditions étaient meilleures
      que celles de nos jours.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
