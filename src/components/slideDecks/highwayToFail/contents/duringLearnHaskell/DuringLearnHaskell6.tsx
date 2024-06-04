import { ListItem, OrderedList, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Type-Driven Development"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack spacing="1em">
      <OrderedList paddingLeft="1em">
        <ListItem>Définir les types de ce qu’on a</ListItem>
      </OrderedList>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Il s’agit de penser en termes de types à ce qu’on a</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
