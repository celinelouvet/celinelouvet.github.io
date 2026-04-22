import { Box, Center, Stack, Text } from '@chakra-ui/react';
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
const Pareto1 = React.lazy(() =>
  import('./components/Pareto1').then((module) => ({
    default: module.Pareto1,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le principe de Pareto (80 — 20)"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
  >
    <Stack height="100%" gap="brand.100">
      <Text>
        Les premiers 80% sont les plus faciles à atteindre, car ils ne demandent
        que 20% d’effort.
      </Text>
      <Center width="100%" flex="1">
        <Box height="100%">
          <React.Suspense fallback={<Loading />}>
            <Pareto1 />
          </React.Suspense>
        </Box>
      </Center>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Quand on applique ce principe au développement, il dit que 80% des
      fonctionnalités vont demander 20% des efforts, car ils sont faciles à
      atteindre.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
