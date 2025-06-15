import { Center, HStack, Icon, Stack } from '@chakra-ui/react';
import { GiHeavyBullets } from 'react-icons/gi';

import { H3Heading } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

const strikedStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  borderRadius: 'xs',
  backgroundGradient: 'strike',
};

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="En résumé"
    alignContent="flex-start"
  >
    <HStack
      height="100%"
      width="100%"
      alignItems="center"
      justifyContent="flex-start"
      gap="brand.300"
    >
      <Center width="20%">
        <Center position="relative">
          <Icon as={GiHeavyBullets} boxSize="brand.400" color="brand.500" />
          <Center {...strikedStyle}></Center>
        </Center>
      </Center>
      <Stack flex="1" fontSize="brand.125" gap="brand.100">
        <H3Heading variant="slide">Pas de « Silver Bullet »</H3Heading>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
