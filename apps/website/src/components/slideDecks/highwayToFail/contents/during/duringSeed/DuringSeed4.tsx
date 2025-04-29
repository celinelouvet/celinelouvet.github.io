import { Box, Center, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineDuring = React.lazy(() =>
  import('../components/VerticalTimelineDuring').then((module) => ({
    default: module.VerticalTimelineDuring,
  })),
);
const Acquisition2 = React.lazy(() =>
  import('./components/Acquisition2').then((module) => ({
    default: module.Acquisition2,
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
          <Acquisition2 />
        </React.Suspense>
      </Box>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Pour générer du chiffre, il faut avoir des clients (des commerçants, chez
      nous), qui paient.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
