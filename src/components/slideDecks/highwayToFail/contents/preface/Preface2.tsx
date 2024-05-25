import { Grid, GridItem } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import {
  Aircall,
  Alan,
  BlaBlaCar,
  Doctolib,
  Payfit,
  Qonto,
} from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Success stories"
  >
    <Grid
      width="80%"
      templateColumns="repeat(3, 1fr)"
      templateRows="repeat(2, 1fr)"
      gap="5em"
    >
      <GridItem>
        <BlaBlaCar />
      </GridItem>
      <GridItem>
        <Doctolib />
      </GridItem>
      <GridItem>
        <Alan />
      </GridItem>
      <GridItem>
        <Qonto />
      </GridItem>
      <GridItem>
        <Aircall />
      </GridItem>
      <GridItem>
        <Payfit />
      </GridItem>
    </Grid>
  </SlideContent>
);

const note = (
  <SlideNote>
    On en compte actuellement 27 en France. J’en ai listé 6.
  </SlideNote>
);

const slide = { content, note };
export default slide;
