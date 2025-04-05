import { Grid, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Chaos report"
    alignContent="flex-start"
  >
    <Grid templateColumns="3fr 1fr">
      <Text>Project Success</Text>
    </Grid>
  </SlideContent>
);

const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
