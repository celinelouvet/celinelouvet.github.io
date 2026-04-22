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

const LearnHaskell = React.lazy(() =>
  import('./components/LearnHaskell').then((module) => ({
    default: module.LearnHaskell,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Courbe d’apprentissage"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
  >
    <Center height="100%">
      <Box height="100%">
        <LearnHaskell />
      </Box>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>En fait, ce que j’ai vécu, c’est exactement ça.</Text>
    <Text>
      Au début, tous les soirs, j’avais l’impression d’avoir tellement réfléchi
      que mon cerveau allait imploser.
    </Text>
    <Text>
      Puis j’ai compris les principes de base et j’ai pu avancer sérieusement.
    </Text>
    <Text>Puis après, bam les monades, nouveau mur à passer.</Text>
    <Text>
      Je n’ai pas rencontré le mur suivant, la liquiditation est arrivée avant
      😅.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
