import { Box, Center, ListItem, Text, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

export const content = (
  <SlideContent type={SlideContentTypes.titleWithContent} title="Pourquoi ?">
    <Center width="100%" height="100%">
      <Box>
        <Text>Raisons multiples :</Text>
        <UnorderedList paddingLeft="1em">
          <ListItem>produit</ListItem>
          <ListItem>techniques</ListItem>
          <ListItem>humaines</ListItem>
          <ListItem>business</ListItem>
        </UnorderedList>
      </Box>
    </Center>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
