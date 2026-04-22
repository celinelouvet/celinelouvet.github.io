import { Center, HStack, Icon, Stack } from '@chakra-ui/react';
import { LuHandCoins } from 'react-icons/lu';

import { H3Heading } from 'src/components/core';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

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
      gap="brand.300"
    >
      <Center width="20%">
        <Icon as={LuHandCoins} boxSize="brand.400" color="brand.orange" />
      </Center>
      <Stack flex="1" fontSize="brand.125" gap="brand.100">
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
