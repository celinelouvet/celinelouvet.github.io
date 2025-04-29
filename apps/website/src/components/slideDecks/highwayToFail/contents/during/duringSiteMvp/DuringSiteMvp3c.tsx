import { List, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';


import { Loading } from '../../../components/loading';

const VerticalTimelineDuring = React.lazy(() =>
  import('../components/VerticalTimelineDuring').then((module) => ({
    default: module.VerticalTimelineDuring,
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
    <Text>Version simplifiée ne suffira pas</Text>

    <List.Root variant="slide">
      <List.Item>CSS plus poussé,</List.Item>
      <List.Item>Ajout progressif de fonctionnalités</List.Item>
    </List.Root>

    <Text paddingLeft="3em">
      Google Analytics, SEO, prerendering, événements Facebook, événements
      LinkedIn, événements Segment, Zapier, Prefinery, Draft, etc.
    </Text>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Et ça va nous amener à mi-mars 2018.</Text>
    <Text>Je ne vous fais pas la liste détaillée.</Text>
    <Text>
      Si on essayait de représenter le temps que j’ai passé sur ces
      fonctionnalités, ça ressemblerait à ça.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
