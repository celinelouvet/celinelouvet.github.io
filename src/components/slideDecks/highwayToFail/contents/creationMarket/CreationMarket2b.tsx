import {
  Grid,
  GridItem,
  HStack,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

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
      <Stack flex="1" height="100%" spacing="1em">
        <UnorderedList>
          <ListItem>Nombreux concurrents,</ListItem>
          <ListItem>En place depuis plusieurs années.</ListItem>
        </UnorderedList>
      </Stack>

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
          <Text as="span" {...dateStyle}>
            2007
          </Text>
        </GridItem>
        <GridItem>
          <Trustpilot />
        </GridItem>

        <GridItem>
          <Text as="span" {...dateStyle}>
            2011
          </Text>
        </GridItem>
        <GridItem>
          <Yotpo />
        </GridItem>

        <GridItem>
          <Text as="span" {...dateStyle}>
            2012
          </Text>
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
