import { List, Stack, Text } from '@chakra-ui/react';

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

        <List.Root paddingLeft="1em">
          <List.Item>Javascript,</List.Item>
          <List.Item>VueJs,</List.Item>
          <List.Item>Firebase.</List.Item>
        </List.Root>
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
