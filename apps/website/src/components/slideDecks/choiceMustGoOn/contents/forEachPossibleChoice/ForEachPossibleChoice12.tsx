import { Center, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { LuArrowRightLeft } from 'react-icons/lu';

import { H3Heading } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Compromis à faire"
    alignContent="flex-start"
  >
    <HStack
      height="100%"
      width="100%"
      alignItems="center"
      justifyContent="flex-start"
      gap="3em"
    >
      <Center width="20%">
        <Icon as={LuArrowRightLeft} boxSize="4em" color="brand.500" />
      </Center>
      <Stack flex="1" fontSize="1.25em" gap="1em">
        <H3Heading variant="slide">Pas de « Silver Bullet »</H3Heading>
        <Text>Est-ce que ces inconvénients sont acceptables ?</Text>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
