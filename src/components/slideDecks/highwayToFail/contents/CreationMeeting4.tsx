import { Box, Grid, GridItem } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsDown,
} from '@/components/core';

import { VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Des points d’alerte ?"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Box width="100%" height="100%">
      <ThumbsDown title="Des différences humaines" variant="slide">
        <Grid templateColumns="1fr 1fr" gap="1em" textAlign="center">
          <GridItem>2 hommes</GridItem>
          <GridItem>1 femme</GridItem>

          <GridItem>~ 25 ans</GridItem>
          <GridItem>~ 38 ans</GridItem>

          <GridItem>se connaissent très bien</GridItem>
          <GridItem>ne les connais pas</GridItem>

          <GridItem>formation business</GridItem>
          <GridItem>formation technique</GridItem>

          <GridItem>célibataire ou pas d’enfant</GridItem>
          <GridItem>en couple et un enfant</GridItem>
        </Grid>
      </ThumbsDown>
    </Box>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
