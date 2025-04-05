import { Grid, GridItem, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineDuring } from '../../components';

const strikethrough =
  'linear-gradient(to left top, transparent 48%, currentColor 49.5%, currentColor 50.5%, transparent 52%)';

const commonStyle = {
  width: '4em',
  marginBottom: '0',
  paddingBottom: '0',
};
const strikedStyle = {
  ...commonStyle,
  background: strikethrough,
};

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThin2Columns}
    title="Pourquoi Haskell ?"
    alignContent="flex-start"
    topRightCorner="Mars 2018"
    column1={<VerticalTimelineDuring />}
    column2={
      <Stack height="100%" justifyContent="center">
        <Text>Envie d’un langage compilé</Text>
        <Text>Envie de fun</Text>
        <Text>Envie de découverte</Text>
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
        <Text {...strikedStyle}>NodeJs</Text>
      </GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem>
        <Text {...strikedStyle}>Ruby</Text>
      </GridItem>
      <GridItem>
        <Text {...strikedStyle}>PHP</Text>
      </GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem>
        <Text {...strikedStyle}>Scala</Text>
      </GridItem>
      <GridItem>
        <Text {...strikedStyle}>Java</Text>
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
    <Text>Or, j’avais déjà fait du scala.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
