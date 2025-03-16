import { List, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Haskell"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <List.Root paddingLeft="1em">
      <List.Item>Purement fonctionnel,</List.Item>
      <List.Item>statiquement typé,</List.Item>
      <List.Item>inférence de type,</List.Item>
      <List.Item>concurrence prévue.</List.Item>
    </List.Root>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>À faire</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
