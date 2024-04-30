import { ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineAfter } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Alors ?"
    alignContent="flex-start"
    column1={<VerticalTimelineAfter />}
  >
    <Stack spacing="1em">
      <UnorderedList>
        <ListItem>
          Des nouvelles connaissances dans des métiers inconnus
        </ListItem>
        <ListItem>
          Une nouvelle manière de penser mon code, « types first »
        </ListItem>
        <ListItem>Une sensation d’échec profonde</ListItem>
        <ListItem>Un épuisement profond</ListItem>
      </UnorderedList>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Et par-dessus ça, je ressens un épuisement profond.</Text>
    <Text>
      Je viens de passer 1 an, 1 an 1/2 à me donner à 200%. J’ai eu une hygiène
      de vie déplorable.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
