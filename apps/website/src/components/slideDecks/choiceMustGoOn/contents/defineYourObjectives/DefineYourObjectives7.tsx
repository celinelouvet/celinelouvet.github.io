import { Center, HStack } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

const boxStyle = {
  width: '25%',
  height: '50%',
  borderRadius: 'md',
  color: 'white',
  fontWeight: 'bold',
  padding: '0.5em',
};

const data = [
  { text: 'Budget disponible', color: 'brand.200' },
  { text: 'Temps disponible', color: 'brand.300' },
  { text: 'Réglementation', color: 'brand.400' },
  { text: 'etc.', color: 'brand.500', style: { width: '10%' } },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Contraintes impossibles à ignorer"
    alignContent="flex-start"
  >
    <HStack
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="space-evenly"
    >
      {data.map(({ color, text, style }) => (
        <Center
          key={color}
          {...boxStyle}
          {...style}
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
