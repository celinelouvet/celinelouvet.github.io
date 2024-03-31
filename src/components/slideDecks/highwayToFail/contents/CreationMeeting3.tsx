import { Box, ListItem, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Qui sont-ils ?"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Box width="100%" height="100%">
      <UnorderedList paddingLeft="1em">
        <ListItem>2 hommes,</ListItem>
        <ListItem>se connaissent très bien,</ListItem>
        <ListItem>XP dans des grands groupes,</ListItem>
        <ListItem>au chômage et au RSA,</ListItem>
        <ListItem>Alumni de Paris Dauphine.</ListItem>
        <ListItem>Alumnus de l’ESSEC.</ListItem>
      </UnorderedList>
    </Box>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
