import { ListItem, Text, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

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
      <ListItem>Un chiffre d’affaires assuré</ListItem>
    </UnorderedList>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Les business angels tendent à rechercher 2 choses.</Text>
    <Text>
      Soit votre produit les touche personnellement, ou est révolutionnaire,
    </Text>
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
