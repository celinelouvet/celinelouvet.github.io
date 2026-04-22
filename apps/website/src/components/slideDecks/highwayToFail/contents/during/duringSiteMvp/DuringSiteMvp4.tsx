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
const ParetoSite = React.lazy(() =>
  import('./components/ParetoSite').then((module) => ({
    default: module.ParetoSite,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Première perte de temps"
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
          <ParetoSite />
        </React.Suspense>
      </Box>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      2-3 semaines sur une version simplifiée, puis 2 mois sur la version
      complète.
    </Text>
    <Text>
      Je ne sais pas si vous reconnaissez ce graph, mais il est assez proche de
      celui du principe de Pareto ou dit des 80-20.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
