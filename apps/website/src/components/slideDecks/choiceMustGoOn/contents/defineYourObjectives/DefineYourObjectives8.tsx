import { Center, HStack } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

const boxStyle = {
  width: '25%',
  height: '50%',
  borderRadius: 'md',
  color: 'white',
  fontWeight: 'bold',
  padding: '0.75em',
};

const data = [
  { text: 'À mettre en place', color: 'brand.300' },
  { text: 'À maintenir', color: 'brand.400' },
  { text: 'En cas de problème', color: 'brand.500' },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Budget et temps"
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
