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
      </List.Root>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Même si je n’aime toujours pas ça, je me forcerai à comprendre le business
      plan.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
