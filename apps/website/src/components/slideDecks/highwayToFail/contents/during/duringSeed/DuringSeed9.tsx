import { Box, Center, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineDuring = React.lazy(() =>
  import('../components/VerticalTimelineDuring').then((module) => ({
    default: module.VerticalTimelineDuring,
  })),
);
const ThatsAllFolks = React.lazy(() =>
  import('./components/ThatsAllFolks').then((module) => ({
    default: module.ThatsAllFolks,
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
          <ThatsAllFolks />
        </React.Suspense>
      </Box>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Ça marquera la fin de l’aventure.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
