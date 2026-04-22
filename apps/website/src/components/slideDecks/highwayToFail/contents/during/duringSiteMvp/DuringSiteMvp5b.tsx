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
const Pareto2 = React.lazy(() =>
  import('./components/Pareto2').then((module) => ({
    default: module.Pareto2,
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
        Les 20% restants vont être les plus difficiles, et demanderont 80%
        d’effort.
      </Text>
      <Center width="100%" flex="1">
        <Box height="100%">
          <React.Suspense fallback={<Loading />}>
            <Pareto2 />
          </React.Suspense>
        </Box>
      </Center>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Par contre, les 20% restantes demanderont, elles, 80% des efforts.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
