import { Center, HStack, Text } from '@chakra-ui/react';

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
  { color: 'brand.400', text: '' },
  { color: 'brand.500', text: '' },
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
    <Text>Humaine</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
