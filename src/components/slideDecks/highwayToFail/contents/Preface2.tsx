import { Grid, GridItem } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import {
  Aircall,
  Alan,
  BlaBlaCar,
  Doctolib,
  Payfit,
  Qonto,
} from '../components';

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

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
