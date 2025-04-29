import { Box, Center, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineDuring = React.lazy(() =>
  import('../components/VerticalTimelineDuring').then((module) => ({
    default: module.VerticalTimelineDuring,
  })),
);
const Stack3 = React.lazy(() =>
  import('./components/Stack3').then((module) => ({
    default: module.Stack3,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="En détails"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
    topRightCorner="Mars 2018"
  >
    <Center width="100%" height="100%">
      <Box height="100%">
        <React.Suspense fallback={<Loading />}>
          <Stack3 />
        </React.Suspense>
      </Box>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>L’API est réalisée en Haskell.</Text>
    <Text>
      C’est là où je me suis un peu emballée. Je vais revenir dessus après.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
