import { Grid, GridItem, Text } from '@chakra-ui/react';
import * as React from 'react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { Loading } from '../../../components/loading';

const BlaBlaCar = React.lazy(() =>
  import('./components/BlaBlaCar').then((module) => ({
    default: module.BlaBlaCar,
  })),
);
const Doctolib = React.lazy(() =>
  import('./components/Doctolib').then((module) => ({
    default: module.Doctolib,
  })),
);
const Alan = React.lazy(() =>
  import('./components/Alan').then((module) => ({
    default: module.Alan,
  })),
);
const Payfit = React.lazy(() =>
  import('./components/Payfit').then((module) => ({
    default: module.Payfit,
  })),
);
const Aircall = React.lazy(() =>
  import('./components/Aircall').then((module) => ({
    default: module.Aircall,
  })),
);
const Qonto = React.lazy(() =>
  import('./components/Qonto').then((module) => ({
    default: module.Qonto,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Success stories"
  >
    <Grid
      width="80%"
      templateColumns="repeat(3, 1fr)"
      templateRows="repeat(2, 1fr)"
      gap="brand.500"
    >
      <GridItem>
        <React.Suspense fallback={<Loading />}>
          <BlaBlaCar />
        </React.Suspense>
      </GridItem>
      <GridItem>
        <React.Suspense fallback={<Loading />}>
          <Doctolib />
        </React.Suspense>
      </GridItem>
      <GridItem>
        <React.Suspense fallback={<Loading />}>
          <Alan />
        </React.Suspense>
      </GridItem>
      <GridItem>
        <React.Suspense fallback={<Loading />}>
          <Qonto />
        </React.Suspense>
      </GridItem>
      <GridItem>
        <React.Suspense fallback={<Loading />}>
          <Aircall />
        </React.Suspense>
      </GridItem>
      <GridItem>
        <React.Suspense fallback={<Loading />}>
          <Payfit />
        </React.Suspense>
      </GridItem>
    </Grid>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      On en compte actuellement 22 licornes en France. J’en ai listé 6.
    </Text>
    <Text>
      Payfit, Qonto et Aircall ne sont plus considérées comme des licornes.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
