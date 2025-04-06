import { Stack, Text } from '@chakra-ui/react';

import { Failure } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineAfter } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le début de la fin"
    alignContent="flex-start"
    column1={<VerticalTimelineAfter />}
    topRightCorner="Janvier 2019"
  >
    <Stack gap="1em">
      <Failure variant="slide">Je suis seule.</Failure>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Je me retrouve donc seule à continuer.</Text>
    <Text>Je peux encore poursuivre, car mon conjoint a un salaire.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
