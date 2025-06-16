import { Center, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { LuBookText } from 'react-icons/lu';

import { H3Heading } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Décision"
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
        <Icon as={LuBookText} boxSize="brand.400" color="brand.500" />
      </Center>
      <Stack flex="1" fontSize="brand.125" gap="brand.100">
        <H3Heading variant="slide">Tracer les raisons</H3Heading>
        <Text>Évitera de revenir dessus.</Text>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
