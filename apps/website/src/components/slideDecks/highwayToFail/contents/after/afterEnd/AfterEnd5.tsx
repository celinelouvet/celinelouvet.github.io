import { Box, Center, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineAfter = React.lazy(() =>
  import('../components/VerticalTimelineAfter').then((module) => ({
    default: module.VerticalTimelineAfter,
  })),
);

const Commits = React.lazy(() =>
  import('./components/Commits').then((module) => ({
    default: module.Commits,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le début de la fin"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineAfter />
      </React.Suspense>
    }
    topRightCorner="Janvier 2019"
  >
    <Center width="100%" height="100%">
      <Box height="100%">
        <React.Suspense fallback={<Loading />}>
          <Commits />
        </React.Suspense>
      </Box>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Je viens de passer 1 an avec un rythme de vie déplorable.</Text>
    <Text>
      Je me lève le matin pour le départ de mon fils à l’école. Je code toute la
      journée. A son retour, je m’arrête pour reprendre après son coucher et ça
      jusqu’à 2-3h du matin. Les nuits sont courtes et peu reposantes.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
