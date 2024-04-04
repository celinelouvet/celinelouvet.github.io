import { Box, Center, ListItem, Text, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

export const content = (
  <SlideContent type={SlideContentTypes.titleWithContent} title="Pourquoi ?">
    <Center width="100%" height="100%">
      <Box>
        <Text>Raisons multiples :</Text>
        <UnorderedList paddingLeft="1em">
          <ListItem>produit</ListItem>
          <ListItem>techniques</ListItem>
          <ListItem>humaines</ListItem>
          <ListItem>business</ListItem>
        </UnorderedList>
      </Box>
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Peu de suspens, on s’est plantés.</Text>
    <Text>Mais pourquoi ? Et pourquoi revenir dessus ?</Text>
    <Text>
      Analyser et comprendre les raisons d’un échec peut nous permettre de les
      éviter la fois suivante.
    </Text>
    <Text>Elles ont été multiples:</Text>
    <UnorderedList>
      <ListItem>produit</ListItem>
      <ListItem>techniques</ListItem>
      <ListItem>humaines</ListItem>
      <ListItem>business</ListItem>
    </UnorderedList>

    <Text>
      En tant que CTO, j’ai ma part dans cet échec et ça va avoir un impact
      monstrueux sur ma vie.
    </Text>
    <Text>C’est mon échec, mais c’est aussi celui de l’équipe.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
