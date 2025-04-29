import { Box, Center, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineDuring = React.lazy(() =>
  import('../components/VerticalTimelineDuring').then((module) => ({
    default: module.VerticalTimelineDuring,
  })),
);
const Acquisition1 = React.lazy(() =>
  import('./components/Acquisition1').then((module) => ({
    default: module.Acquisition1,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Les levées"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
  >
    <Center height="100%">
      <Box height="100%">
        <React.Suspense fallback={<Loading />}>
          <Acquisition1 />
        </React.Suspense>
      </Box>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Donc on va se concentrer sur le chiffre d’affaires</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
