import { List, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineAfter } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="A refaire ?"
    alignContent="flex-start"
    column1={<VerticalTimelineAfter />}
  >
    <Stack gap="1em">
      <List.Root>
        <List.Item>Poser des questions lors de la rencontre</List.Item>
        <List.Item>Comprendre le business plan</List.Item>
        <List.Item>Comprendre la procédure ou passer par un avocat</List.Item>
        <List.Item>Répartition équitable des parts</List.Item>
      </List.Root>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Je ferai en sorte qu’il y ait une répartition équitable des parts dès le
      début.
    </Text>
    <Text>Qu’on soit sur un pied d’égalité.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
