import { List, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineAfter } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="A refaire ?"
    alignContent="flex-start"
    column1={<VerticalTimelineAfter />}
  >
    <Stack gap="1em">
      <List.Root variant="slide">
        <List.Item>Poser des questions lors de la rencontre</List.Item>
      </List.Root>
    </Stack>
  </SlideContent>
);

export const note = (
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
