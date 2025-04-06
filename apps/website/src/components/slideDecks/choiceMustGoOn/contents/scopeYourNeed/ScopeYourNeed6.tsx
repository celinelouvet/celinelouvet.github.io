import { Center, HStack, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

const boxStyle = {
  width: '20%',
  height: '50%',
  borderRadius: 'md',
  color: 'brand.900',
  alignItems: 'center',
  justifyContent: 'flex-start',
  textAlign: 'center',
  padding: '0.5em',
};

const data = [
  { title: 'Must have', text: 'Obligatoire', color: 'brand.200' },
  { title: 'Should have', text: 'Présent, si possible', color: 'brand.300' },
  { title: 'Could have', text: 'Bonus', color: 'brand.400' },
  {
    title: 'Won’t have',
    text: 'Non nécessaire (pour l’instant)',
    color: 'brand.500',
  },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="MoSCoW"
    alignContent="flex-start"
  >
    <HStack
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="space-evenly"
    >
      {data.map(({ color, title, text }) => (
        <Stack key={color} {...boxStyle} backgroundColor={color}>
          <Text fontFamily="PT Sans narrow" fontSize="1.25em" fontWeight="700">
            {title}
          </Text>
          <Center flex="1" fontSize="0.9em">
            {text}
          </Center>
        </Stack>
      ))}
    </HStack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
