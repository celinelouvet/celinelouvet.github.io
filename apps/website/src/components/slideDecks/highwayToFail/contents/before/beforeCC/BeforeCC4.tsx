import { Box, Stack, Text } from '@chakra-ui/react';

import { ThumbsUp } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

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
    </Stack>
  </SlideContent>
);

export const note = (
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
