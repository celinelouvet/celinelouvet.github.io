import { ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';

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
      </UnorderedList>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Si on résume, j’ai vraiment fait un burnout.</Text>
    <Text>
      On est 5 ans plus tard et je le sens toujours. Dès que j’abuse, il
      repointe le bout de son nez.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
