import { Text } from '@chakra-ui/react';
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
    title="L’idée"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineCreation />
      </React.Suspense>
    }
  >
    <Text>Outil de récolte d’avis de clients pour les e‑commerces.</Text>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>En quoi consiste l’idée ?</Text>
    <Text>
      Fairvioo est un outil de récolte des avis des consommateurs, comme Avis
      Vérifiés, et bien d’autres.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
