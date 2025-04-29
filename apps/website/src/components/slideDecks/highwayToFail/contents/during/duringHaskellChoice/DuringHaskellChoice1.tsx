import { Box, Center, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineDuring = React.lazy(() =>
  import('../components/VerticalTimelineDuring').then((module) => ({
    default: module.VerticalTimelineDuring,
  })),
);

const StackChoice = React.lazy(() =>
  import('./components/StackChoice').then((module) => ({
    default: module.StackChoice,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Pourquoi Haskell ?"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
    topRightCorner="Mars 2018"
  >
    <Box position="relative" width="100%" height="100%">
      <Box position="absolute">
        <React.Suspense fallback={<Loading />}>
          <StackChoice />
        </React.Suspense>
      </Box>
      <Center width="100%" height="100%" backgroundColor="#666666">
        <Text fontSize="1.5em" color="white" fontWeight="600">
          Choix de la techno
        </Text>
      </Center>
    </Box>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Vous allez me dire, mais pourquoi Haskell ?</Text>
    <Text>Lors de mon talk sur Haskell, j’avais expliqué le choix ainsi.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
