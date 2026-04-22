import { Box, Center, Text } from '@chakra-ui/react';
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
const Acquisition5 = React.lazy(() =>
  import('./components/Acquisition5').then((module) => ({
    default: module.Acquisition5,
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
          <Acquisition5 />
        </React.Suspense>
      </Box>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Je continue à enfoncer les portes ouvertes, mais du coup, il faut avoir
      une idée de l’API...
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
