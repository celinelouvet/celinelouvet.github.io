import { Stack, Text } from '@chakra-ui/react';

import { Failure } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineAfter } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Alors ?"
    alignContent="flex-start"
    column1={<VerticalTimelineAfter />}
  >
    <Stack gap="1em">
      <Failure variant="slide">J’ai fait un burnout</Failure>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Si on résume, j’ai vraiment fait un burnout.</Text>
    <Text>
      On est 5 ans plus tard et je le sens toujours. Dès que j’abuse, il
      repointe le bout de son nez.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
