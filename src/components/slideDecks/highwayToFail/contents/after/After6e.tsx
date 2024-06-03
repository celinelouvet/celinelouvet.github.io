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
        <ListItem>Comprendre le business plan</ListItem>
        <ListItem>Comprendre la procédure ou passer par un avocat</ListItem>
        <ListItem>Répartition équitable des parts</ListItem>
      </UnorderedList>
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
