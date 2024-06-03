import { ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineAfter } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="A refaire ?"
    alignContent="flex-start"
    column1={<VerticalTimelineAfter />}
  >
    <Stack spacing="1em">
      <UnorderedList>
        <ListItem>Poser des questions lors de la rencontre</ListItem>
      </UnorderedList>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Au delà de la blague,</Text>
    <Text>
      Je poserai nettement plus de questions lors de la rencontre de façon à les
      challenger sur l’idée et ses limites.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
