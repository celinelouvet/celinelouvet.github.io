import { Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineDuring = React.lazy(() =>
  import('../components/VerticalTimelineDuring').then((module) => ({
    default: module.VerticalTimelineDuring,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Type-Driven Development"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
  >
    <Stack gap={4}></Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Par contre, ça a été l’occasion de découvrir un truc qui m’est toujours
      utile aujourd’hui, le Type Driven Development.
    </Text>
    <Text>En quoi ça consiste ?</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
