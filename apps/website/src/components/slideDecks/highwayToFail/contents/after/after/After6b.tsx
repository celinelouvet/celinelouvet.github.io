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
      </List.Root>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Au delà de la blague,</Text>
    <Text>
      Je poserai nettement plus de questions lors de la rencontre de façon à les
      challenger sur l’idée et ses limites.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
