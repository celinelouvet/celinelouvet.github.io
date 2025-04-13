import { Center, HStack, Icon, Stack } from '@chakra-ui/react';
import { LuHandCoins } from 'react-icons/lu';

import { H3Heading } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Mise en place"
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
        <Icon as={LuHandCoins} boxSize="4em" color="brand.orange" />
      </Center>
      <Stack flex="1" fontSize="1.25em" gap="1em">
        <H3Heading variant="slide">
          Biais des « coûts irrécupérables »
        </H3Heading>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = <SlideNote>Ref Highway to fail</SlideNote>;

const slide = { content, note };
export default slide;
