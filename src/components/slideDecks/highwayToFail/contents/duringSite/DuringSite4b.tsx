import { ListItem, Text, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThin2Columns}
    title="Le site vitrine — La stack choisie"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    column2={
      <UnorderedList paddingLeft="1em">
        <ListItem>Javascript,</ListItem>
        <ListItem>VueJs,</ListItem>
        <ListItem>Firebase.</ListItem>
      </UnorderedList>
    }
  ></SlideContent>
);

const note = (
  <SlideNote>
    <Text>Je vais héberger tout ça sur du Firebase.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
