import { Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineAfter } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le début de la fin"
    alignContent="flex-start"
    column1={<VerticalTimelineAfter />}
    topRightCorner="Octobre 2018"
  >
    <Stack gap="1em"></Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>On est en octobre 2018.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
