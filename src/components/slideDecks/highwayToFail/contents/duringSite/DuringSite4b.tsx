import { ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThin2Columns}
    title="Le site vitrine"
    alignContent="flex-start"
    topRightCorner="Mi-Décembre 2017"
    column1={<VerticalTimelineDuring />}
    column2={
      <Stack gap="1em">
        <Text>Stack choisie :</Text>

        <UnorderedList paddingLeft="1em">
          <ListItem>Javascript,</ListItem>
          <ListItem>VueJs,</ListItem>
          <ListItem>Firebase.</ListItem>
        </UnorderedList>
      </Stack>
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
