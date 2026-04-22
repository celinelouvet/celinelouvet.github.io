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

const Stack4 = React.lazy(() =>
  import('./components/Stack4').then((module) => ({
    default: module.Stack4,
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
          <Stack4 />
        </React.Suspense>
      </Box>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Coté base de données, je pars du PostgreSQL, qui permet de faire beaucoup
      de choses.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
