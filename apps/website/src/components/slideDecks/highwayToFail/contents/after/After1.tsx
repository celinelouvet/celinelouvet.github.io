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
      </List.Root>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Mais, j’y ai gagné des nouvelles connaissances dans des métiers inconnus,
      le marketing, la finance, les levées.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
