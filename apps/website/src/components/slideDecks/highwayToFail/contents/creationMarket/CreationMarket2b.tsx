import { Grid, GridItem, HStack, List, Text, chakra } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import {
  AvisVerifies,
  Trustpilot,
  VerticalTimelineCreation,
  Yotpo,
} from '../../components';

const dateStyle = {
  fontFamily: 'PT Sans Narrow',
  fontSize: '1.3em',
  fontWeight: 600,
};

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Étude de marché"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
  >
    <HStack gap="1em" width="100%" height="100%">
      <List.Root variant="slide" flex="1" alignSelf="start">
        <List.Item>Nombreux concurrents,</List.Item>
        <List.Item>En place depuis plusieurs années.</List.Item>
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
          <chakra.span {...dateStyle}>2007</chakra.span>
        </GridItem>
        <GridItem>
          <Trustpilot />
        </GridItem>

        <GridItem>
          <chakra.span {...dateStyle}>2011</chakra.span>
        </GridItem>
        <GridItem>
          <Yotpo />
        </GridItem>

        <GridItem>
          <chakra.span {...dateStyle}>2012</chakra.span>
        </GridItem>
        <GridItem>
          <AvisVerifies />
        </GridItem>
      </Grid>
    </HStack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Et certains étaient là depuis de nombreuses années.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
