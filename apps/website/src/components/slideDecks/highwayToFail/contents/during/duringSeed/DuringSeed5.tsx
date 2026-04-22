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
const Acquisition3 = React.lazy(() =>
  import('./components/Acquisition3').then((module) => ({
    default: module.Acquisition3,
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
          <Acquisition3 />
        </React.Suspense>
      </Box>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Comme on vise des TPE et PME, on ne peut acquérir de commerçants que via
      les plateformes d’e-commerce.
    </Text>
    <Text>
      D’ailleurs le principe de Pareto s’applique aussi là. C’est les 20% de
      clients restants et donc les plus difficiles.
    </Text>
    <Text>Donc il faut avoir publié le plugin dessus.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
