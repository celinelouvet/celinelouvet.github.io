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
      <List.Item>Un chiffre d’affaires assuré</List.Item>
    </List.Root>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Soit vous avez déjà un chiffre d’affaires qui se créé.</Text>
    <Text>C’est encore mieux si vous avez les 2, bien sur.</Text>
    <Text>
      Malheureusement pour nous, Fairvioo n’a rien de révolutionnaire, sauf
      l’aspect éthique.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
