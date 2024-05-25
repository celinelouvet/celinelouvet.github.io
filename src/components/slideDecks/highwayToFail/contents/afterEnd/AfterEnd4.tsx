import { Stack, Text } from '@chakra-ui/react';

import {
  Failure,
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from '@/components/core';

import { VerticalTimelineAfter } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le début de la fin"
    alignContent="flex-start"
    column1={<VerticalTimelineAfter />}
  >
    <Stack spacing="1em">
      <Failure variant="slide">Je suis seule.</Failure>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Je me retrouve donc seule à continuer.</Text>
    <Text>Je peux encore poursuivre, car mon conjoint a un salaire.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
