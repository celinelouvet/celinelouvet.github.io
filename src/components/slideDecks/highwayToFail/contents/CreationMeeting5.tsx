import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

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
    title="Des différences humaines"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Box width="100%" height="100%">
      <ThumbsDown variant="slide">
        <Grid templateColumns="1fr 1fr" gap="1em" textAlign="center">
          <GridItem>~ 25 ans</GridItem>
          <GridItem>~ 38 ans</GridItem>

          <GridItem>célibataire ou pas d’enfant</GridItem>
          <GridItem>en couple et un enfant</GridItem>

          <GridItem>se connaissent très bien</GridItem>
          <GridItem>ne les connais pas</GridItem>

          <GridItem>formation business</GridItem>
          <GridItem>formation technique</GridItem>
        </Grid>
      </ThumbsDown>
    </Box>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Dans les moments de tension, les différences humaines comptent énormément.
    </Text>
    <Text>
      On n’en est pas au même stade de vie. Ils ont 25 ans et moi j’approche de
      la quarantaine.
    </Text>
    <Text>
      Pareil, ils sont célibataires ou sans enfant, alors que moi je suis en
      couple et j’ai un enfant.
    </Text>
    <Text>
      Ils se connaissent très bien, car ils ont fait leurs études ensemble,
      alors que je ne les connais pas du tout.
    </Text>
    <Text>
      Pareil pour la formation, ils ont une formation business, alors que moi je
      suis issue d’une formation technique.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
