import { Grid, GridItem, HStack, List, Text, chakra } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineCreation = React.lazy(() =>
  import('../components/VerticalTimelineCreation').then((module) => ({
    default: module.VerticalTimelineCreation,
  })),
);

const AvisVerifies = React.lazy(() =>
  import('./components/AvisVerifies').then((module) => ({
    default: module.AvisVerifies,
  })),
);
const Trustpilot = React.lazy(() =>
  import('./components/Trustpilot').then((module) => ({
    default: module.Trustpilot,
  })),
);
const Yotpo = React.lazy(() =>
  import('./components/Yotpo').then((module) => ({
    default: module.Yotpo,
  })),
);

const dateStyle = {
  fontFamily: 'PT Sans Narrow',
  fontSize: 'brand.130',
  fontWeight: 600,
};

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Étude de marché"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineCreation />
      </React.Suspense>
    }
    topRightCorner="Mi-Décembre 2017"
  >
    <HStack gap="brand.100" width="100%" height="100%">
      <List.Root variant="slide" flex="1" alignSelf="start">
        <List.Item>Nombreux concurrents,</List.Item>
      </List.Root>

      <Grid
        width="30%"
        height="100%"
        templateColumns="30% 60%"
        templateRows="1fr 1fr 1fr"
        columnGap="10%"
        alignItems="center"
        justifyContent="center"
      >
        <GridItem>
          <chakra.span {...dateStyle}></chakra.span>
        </GridItem>
        <GridItem>
          <React.Suspense fallback={<Loading />}>
            <Trustpilot />
          </React.Suspense>
        </GridItem>

        <GridItem>
          <chakra.span {...dateStyle}></chakra.span>
        </GridItem>
        <GridItem>
          <React.Suspense fallback={<Loading />}>
            <Yotpo />
          </React.Suspense>
        </GridItem>

        <GridItem>
          <chakra.span {...dateStyle}></chakra.span>
        </GridItem>
        <GridItem>
          <React.Suspense fallback={<Loading />}>
            <AvisVerifies />
          </React.Suspense>
        </GridItem>
      </Grid>
    </HStack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Il en est ressorti qu’il y avait déjà de nombreux concurrents, dont parmi
      les plus connus actuellement, Avis vérifiés, Trustpilot et Yotpo.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
