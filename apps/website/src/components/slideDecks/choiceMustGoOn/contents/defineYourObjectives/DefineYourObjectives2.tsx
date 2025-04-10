import { Center, HStack } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

const boxStyle = {
  width: '20%',
  height: '50%',
  borderRadius: 'md',
  color: 'white',
  fontWeight: 'bold',
  padding: '0.5em',
};

const data = [
  { text: 'Besoin défini', color: 'brand.300' },
  { text: 'Scope précis', color: 'brand.400' },
  { text: 'Objectifs à atteindre', color: 'brand.orange' },
  { text: 'Faire des choix', color: 'brand.500' },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Réponse au besoin"
    alignContent="flex-start"
  >
    <HStack
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="space-evenly"
    >
      {data.map(({ color, text }) => (
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

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
