import { List, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineAfter = React.lazy(() =>
  import('../components/VerticalTimelineAfter').then((module) => ({
    default: module.VerticalTimelineAfter,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Alors ?"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineAfter />
      </React.Suspense>
    }
  >
    <Stack gap="brand.100">
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
