import { ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Alors ?"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack spacing="1em">
      <UnorderedList>
        <ListItem>
          Des nouvelles connaissances dans des métiers inconnus
        </ListItem>
      </UnorderedList>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Mais, j’y ai gagné des nouvelles connaissances dans des métiers inconnus,
      le marketing, la finance, les levées.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
