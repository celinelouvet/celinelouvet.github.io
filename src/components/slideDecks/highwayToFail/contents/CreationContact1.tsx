import { Stack, StackItem, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La mise en contact"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Stack width="100%" gap="1em">
      <StackItem>
        <Text>Discussion lors d’un meetup avec une connaissance.</Text>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
