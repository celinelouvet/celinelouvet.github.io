import { Stack, Text, chakra } from '@chakra-ui/react';
import * as React from 'react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineCreation = React.lazy(() =>
  import('../components/VerticalTimelineCreation').then((module) => ({
    default: module.VerticalTimelineCreation,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Contenu du MVP"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineCreation />
      </React.Suspense>
    }
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack width="100%" gap="brand.100">
      <Text>
        <Text as="b">MVP : </Text>
        <chakra.span>Minimum Viable Product</chakra.span>
      </Text>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Déjà, qu’est-ce que le MVP ? C’est le minimum viable product, c’est-à-dire
      la version du produit qui demande le minimum de fonctionnalités pour
      obtenir le maximim de feedbacks des clients.
    </Text>
    <Text></Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
