import { ListItem, Stack, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineAfter } from '../components';

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
        <ListItem>Me faire entendre</ListItem>
      </UnorderedList>
    </Stack>
  </SlideContent>
);

const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
