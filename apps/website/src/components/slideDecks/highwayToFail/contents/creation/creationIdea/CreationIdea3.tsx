import { Stack, Text } from '@chakra-ui/react';
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
    title="L’idée"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineCreation />
      </React.Suspense>
    }
  >
    <Stack gap="brand.100">
      <Text>1 avis laissé = 1 micro-don généré</Text>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      De plus, pour chaque avis laissé par un client, un micro-don est
      enregistré pour une association.
    </Text>
    <Text>Les dons seront reversés régulièrement.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
