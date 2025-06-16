import { Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineCreation = React.lazy(() =>
  import('../components/VerticalTimelineCreation').then((module) => ({
    default: module.VerticalTimelineCreation,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Nécessité de se démarquer"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineCreation />
      </React.Suspense>
    }
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack gap="brand.100">
      <Text>Clients de type TPE et PME</Text>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Fairvioo va viser les TPE et les PME</Text>
    <Text>
      Les concurrents fonctionnent par abonnement mensuel qui sont hors de prix
      pour les petits commerçants.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
