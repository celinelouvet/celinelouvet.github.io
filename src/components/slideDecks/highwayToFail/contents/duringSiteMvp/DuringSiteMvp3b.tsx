import {
  ListItem,
  Stack,
  StackItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Première perte de temps"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack gap="1em">
      <StackItem>
        <Text>Version simplifiée ne suffira pas</Text>
      </StackItem>
      <StackItem>
        <UnorderedList paddingLeft="1em">
          <ListItem>CSS plus poussé,</ListItem>
        </UnorderedList>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Je vais donc investir plus de temps pour pousser le CSS</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
