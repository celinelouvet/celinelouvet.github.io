import { Grid, GridItem, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

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
      templateColumns="1fr 1fr"
      templateRows="repeat(1fr, 6)"
      textAlign="center"
    >
      <GridItem>
        <Text as="s"> NodeJs </Text>
      </GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem>
        <Text as="s"> Ruby </Text>
      </GridItem>
      <GridItem>
        <Text as="s"> PHP </Text>
      </GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem>
        <Text as="span">Scala</Text>
      </GridItem>
      <GridItem>
        <Text as="span">Java</Text>
      </GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem>
        <Text as="span">Haskell</Text>
      </GridItem>
    </Grid>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
