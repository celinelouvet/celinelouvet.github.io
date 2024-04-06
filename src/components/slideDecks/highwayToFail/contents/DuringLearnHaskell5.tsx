import { Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Type Driven Development"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack spacing={4}></Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Par contre, ça a été l’occasion de découvrir un truc qui m’est toujours
      utile aujourd’hui, le Type Driven Development.
    </Text>
    <Text>En quoi ça consiste ?</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
