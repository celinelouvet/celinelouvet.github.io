import { ListItem, Stack, StackItem, UnorderedList } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsUp,
} from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThin2Columns}
    title="Le site vitrine — La stack choisie"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    column2={
      <UnorderedList paddingLeft="1em">
        <ListItem>Javascript,</ListItem>
        <ListItem>VueJs,</ListItem>
        <ListItem>Firebase,</ListItem>
        <ListItem>CircleCI.</ListItem>
      </UnorderedList>
    }
  >
    <Stack gap="1em">
      <StackItem>
        <ThumbsUp variant="slide">Ça ne coûte rien.</ThumbsUp>
      </StackItem>
      <StackItem>
        <ThumbsUp variant="slide">J’avance vite.</ThumbsUp>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
