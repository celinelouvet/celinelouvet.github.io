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
  {
    color: 'brand.500',
    oldText: 'Besoin satisfait',
    text: 'Périmètre respecté',
  },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="CHAOS report"
    alignContent="flex-start"
    topRightCorner="2015"
  >
    <HStack
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="space-evenly"
    >
      {reasons.map(({ color, text, oldText }) => (
        <Center
          key={color}
          {...boxStyle}
          backgroundColor={color}
          textAlign="center"
          flexDirection="column"
        >
          {oldText ? (
            <>
              <Text as="s" textDecorationThickness="2px">
                {oldText}
              </Text>
              <Text>{text}</Text>
            </>
          ) : (
            <Text>{text}</Text>
          )}
        </Center>
      ))}
    </HStack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Cette version de 2015 s’appuie, non pas sur le respect du besoin.
    </Text>
    <Text>Mais sur le respect des fonctionnalités initialement prévues.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
