import { ListItem, Text, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Les levées"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Text>2 choses recherchées par les business angels :</Text>
    <UnorderedList paddingLeft="1em">
      <ListItem>Un produit coup de cœur ou révolutionnaire</ListItem>
    </UnorderedList>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Soit votre produit les touche personnellement, ou est révolutionnaire,
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
