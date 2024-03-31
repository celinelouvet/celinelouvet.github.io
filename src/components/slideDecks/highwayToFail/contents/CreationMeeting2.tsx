import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsUp,
} from '@/components/core';

import { VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThin2Columns}
    title="La rencontre"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    column2={
      <Box width="100%" height="100%">
        <Text>Ils ont:</Text>
        <UnorderedList paddingLeft="1em">
          <ListItem>l’idée,</ListItem>
          <ListItem>le moyen de se démarquer,</ListItem>
          <ListItem>fait une étude de marché,</ListItem>
          <ListItem>un business model,</ListItem>
          <ListItem>un business plan.</ListItem>
        </UnorderedList>
      </Box>
    }
  >
    <Box width="100%" height="100%">
      <ThumbsUp variant="slide">
        Ça tombe bien, car je n’ai absolument aucune de ces connaissances.
      </ThumbsUp>
    </Box>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
