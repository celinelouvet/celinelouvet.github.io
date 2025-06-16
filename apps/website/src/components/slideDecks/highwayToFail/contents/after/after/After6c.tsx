import { List, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineAfter = React.lazy(() =>
  import('../components/VerticalTimelineAfter').then((module) => ({
    default: module.VerticalTimelineAfter,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="A refaire ?"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineAfter />
      </React.Suspense>
    }
  >
    <Stack gap="brand.100">
      <List.Root variant="slide">
        <List.Item>Poser des questions lors de la rencontre</List.Item>
        <List.Item>Comprendre le business plan</List.Item>
      </List.Root>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Même si je n’aime toujours pas ça, je me forcerai à comprendre le business
      plan.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
