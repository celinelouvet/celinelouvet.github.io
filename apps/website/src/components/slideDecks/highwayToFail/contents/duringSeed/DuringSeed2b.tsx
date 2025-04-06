import { List, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Les levées"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Text>2 choses recherchées par les business angels :</Text>
    <List.Root variant="slide">
      <List.Item>Un produit coup de cœur ou révolutionnaire</List.Item>
    </List.Root>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Soit votre produit les touche personnellement, ou est révolutionnaire,
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
