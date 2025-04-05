import { List, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineAfter } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Alors ?"
    alignContent="flex-start"
    column1={<VerticalTimelineAfter />}
  >
    <Stack gap="1em">
      <List.Root variant="slide">
        <List.Item>
          Des nouvelles connaissances dans des métiers inconnus
        </List.Item>
        <List.Item>
          Une nouvelle manière de penser mon code, « types first »
        </List.Item>
        <List.Item>Une sensation d’échec profonde</List.Item>
        <List.Item>Un épuisement profond</List.Item>
      </List.Root>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Et par-dessus ça, je ressens un épuisement profond.</Text>
    <Text>
      Je viens de passer 1 an, 1 an 1/2 à me donner à 200%. Mon fils était ma
      bouée pour m’obliger à m’arrêter.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
