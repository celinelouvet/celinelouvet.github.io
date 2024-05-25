import { Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineAfter } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le début de la fin"
    alignContent="flex-start"
    column1={<VerticalTimelineAfter />}
  >
    <Stack spacing="1em">
      <Text>Octobre - novembre 2018 :</Text>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>On est en octobre / novembre 2018.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
