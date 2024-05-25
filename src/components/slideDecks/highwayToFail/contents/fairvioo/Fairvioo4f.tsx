import {
  Center,
  HStack,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

const boxStyle = {
  width: '20%',
  height: '50%',
  borderRadius: 'md',
  color: 'white',
  fontWeight: 'bold',
};

const reasons = [
  { color: 'brand.200', text: 'Business' },
  { color: 'brand.300', text: 'Humaine' },
  { color: 'brand.400', text: 'Produit' },
  { color: 'brand.500', text: 'Technique' },
];

export const content = (
  <SlideContent type={SlideContentTypes.titleWithContent} title="La raison ?">
    <HStack
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="space-evenly"
    >
      {reasons.map(({ color, text }) => (
        <Center key={color} {...boxStyle} backgroundColor={color}>
          {text}
        </Center>
      ))}
    </HStack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <UnorderedList>
      <ListItem>technique</ListItem>
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
