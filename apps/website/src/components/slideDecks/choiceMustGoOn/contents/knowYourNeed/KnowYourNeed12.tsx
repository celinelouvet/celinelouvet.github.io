import { Center, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { LuMessageCircleQuestion } from 'react-icons/lu';

import { H3Heading } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Ne pas créer un faux besoin"
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
        <Icon as={LuMessageCircleQuestion} boxSize="4em" color="brand.500" />
      </Center>
      <Stack flex="1" fontSize="1.25em" gap="1em">
        <H3Heading variant="slide">XY problem</H3Heading>
        <Text>La question influence la réponse</Text>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    Et j'aurais créé un faux besoin. La question et la manière de la poser va
    influencer la réponse.
  </SlideNote>
);

const slide = { content, note };
export default slide;
