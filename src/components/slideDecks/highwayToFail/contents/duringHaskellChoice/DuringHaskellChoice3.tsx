import { Grid, GridItem, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

const commonStyle = {
  width: '4em',
  marginBottom: '0',
  paddingBottom: '0',
};

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThin2Columns}
    title="Pourquoi Haskell ?"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    column2={
      <Stack height="100%" justifyContent="center">
        <Text>Envie d’un langage compilé</Text>
        <Text> </Text>
        <Text> </Text>
      </Stack>
    }
  >
    <Grid
      templateColumns="5em 5em"
      templateRows="repeat(1fr, 6)"
      alignItems="center"
      justifyItems="center"
      columnGap="1em"
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

const note = (
  <SlideNote>
    <Text>
      J’ai une préférence pour les langages compilés. Petite aparté, à l’époque,
      Typescript n’était aussi développé que maintenant.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
