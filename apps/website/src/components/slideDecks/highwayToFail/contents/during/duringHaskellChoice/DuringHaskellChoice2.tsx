import { Grid, GridItem, Stack, Text } from '@chakra-ui/react';
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

const commonStyle = {
  width: 'brand.400',
  marginBottom: '0',
  paddingBottom: '0',
};

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThin2Columns}
    title="Pourquoi Haskell ?"
    alignContent="flex-start"
    topRightCorner="Mars 2018"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
    column2={<Stack height="100%" justifyContent="center"></Stack>}
  >
    <Grid
      templateColumns="brand.500 brand.500"
      templateRows="repeat(1fr, 6)"
      alignItems="center"
      justifyItems="center"
      columnGap="brand.100"
      textAlign="center"
    >
      <GridItem>
        <Text {...commonStyle}>NodeJs</Text>
      </GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem>
        <Text {...commonStyle}>Ruby</Text>
      </GridItem>
      <GridItem>
        <Text {...commonStyle}>PHP</Text>
      </GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem>
        <Text {...commonStyle}>Scala</Text>
      </GridItem>
      <GridItem>
        <Text {...commonStyle}>Java</Text>
      </GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem>
        <Text {...commonStyle}>Haskell</Text>
      </GridItem>
    </Grid>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Je suis partie d’une liste de technos usuelles, Node, Ruby, PHP, Java,
      Scala et Haskell
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
