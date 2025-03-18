import { List, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Première perte de temps"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    topRightCorner="Janvier 2018"
  >
    <Text>Version simplifiée ne suffira pas</Text>

    <List.Root variant="slide">
      <List.Item>CSS plus poussé,</List.Item>
    </List.Root>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Je vais donc investir plus de temps pour pousser le CSS</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
