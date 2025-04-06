import { Center, HStack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

const boxStyle = {
  width: '25%',
  height: '50%',
  borderRadius: 'md',
  color: 'white',
  fontWeight: 'bold',
};

const reasons = [
  { color: 'brand.300', text: 'Budget respecté' },
  { color: 'brand.400', text: 'Délai respecté' },
  { color: 'brand.500', text: 'Besoin satisfait' },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Un projet réussi ?"
    alignContent="flex-start"
  >
    <HStack
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="space-evenly"
    >
      {reasons.map(({ color, text }) => (
        <Center
          key={color}
          {...boxStyle}
          backgroundColor={color}
          textAlign="center"
        >
          {text}
        </Center>
      ))}
    </HStack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Qu’est ce qui défini qu’un projet a été réussi ?</Text>
    <Text>Le budget initialement prévu a été respecté.</Text>
    <Text>La durée initialement prévue a été respectée.</Text>
    <Text>Le résultat répond au besoin des utilisateurs.</Text>
    <Text>
      On peut aussi ajouter, en bonus, une maintenance facilitée, une équipe de
      dev heureuse, etc.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
