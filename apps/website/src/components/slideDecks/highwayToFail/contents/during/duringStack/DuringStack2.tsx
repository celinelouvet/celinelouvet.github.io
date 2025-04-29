import { Box, Center, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineDuring = React.lazy(() =>
  import('../components/VerticalTimelineDuring').then((module) => ({
    default: module.VerticalTimelineDuring,
  })),
);
const Stack1 = React.lazy(() =>
  import('./components/Stack1').then((module) => ({
    default: module.Stack1,
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
          <Stack1 />
        </React.Suspense>
      </Box>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Pour avancer au plus court, je suis partie sur un monolithe, servant les
      fichiers des front-ends.
    </Text>
    <Text>
      Mon idée est de me concentrer sur les fonctionnalités sans me préoccuper
      de la scalabilité au début.
    </Text>
    <Text>
      En effet, le besoin de scalabilité n’intervient que lorsqu’on on a réussi
      à avoir beaucoup d’utilisateurs.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
