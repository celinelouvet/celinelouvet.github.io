import { ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le site vitrine"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack width="100%" gap="1em">
      <Text>Version simplifiée, pour avancer vite :</Text>
      <UnorderedList paddingLeft="1em">
        <ListItem>un design allégé,</ListItem>
      </UnorderedList>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Donc je prévois un design allégé</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
