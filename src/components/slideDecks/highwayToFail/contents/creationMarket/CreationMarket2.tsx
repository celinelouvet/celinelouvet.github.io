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
    topRightCorner="Mi-Dec. 2017"
  >
    <HStack gap="1em" width="100%" height="100%">
      <Stack flex="1" height="100%" spacing="1em">
        <UnorderedList>
          <ListItem>Nombreux concurrents,</ListItem>
        </UnorderedList>
      </Stack>

      <Grid
        width="30%"
        height="100%"
        templateColumns="1fr 2fr"
        templateRows="1fr 1fr 1fr"
        columnGap="12"
        alignItems="center"
        justifyContent="center"
      >
        <GridItem>
          <Text as="span" {...dateStyle}></Text>
        </GridItem>
        <GridItem>
          <Trustpilot />
        </GridItem>

        <GridItem>
          <Text as="span" {...dateStyle}></Text>
        </GridItem>
        <GridItem>
          <Yotpo />
        </GridItem>

        <GridItem>
          <Text as="span" {...dateStyle}></Text>
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
    <Text>
      Il en est ressorti qu’il y avait déjà de nombreux concurrents, dont parmi
      les plus connus actuellement, Avis vérifiés, Trustpilot et Yotpo.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
