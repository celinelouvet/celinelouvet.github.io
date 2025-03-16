import { List, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le site vitrine"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack width="100%" gap="1em">
      <Text>Version simplifiée, pour avancer vite :</Text>
      <List.Root paddingLeft="1em">
        <List.Item>un design allégé,</List.Item>
      </List.Root>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Donc je prévois un design allégé,</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
