import { Box, List, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThin2Columns}
    title="La rencontre"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    column2={
      <Box width="100%" height="100%">
        <Text>Ils ont :</Text>
        <List.Root variant="slide">
          <List.Item>l’idée,</List.Item>
        </List.Root>
      </Box>
    }
    topRightCorner="Mi-Décembre 2017"
  ></SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Ils ont :</Text>
    <List.Root variant="slide">
      <List.Item>l’idée,</List.Item>
    </List.Root>
  </SlideNote>
);

const slide = { content, note };
export default slide;
