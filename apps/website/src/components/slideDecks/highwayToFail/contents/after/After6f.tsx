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
        <List.Item>Comprendre le business plan</List.Item>
        <List.Item>Comprendre la procédure ou passer par un avocat</List.Item>
        <List.Item>Répartition équitable des parts</List.Item>
        <List.Item>Me faire entendre</List.Item>
      </List.Root>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Et surtout, surtout, je me ferai entendre dès le début.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
