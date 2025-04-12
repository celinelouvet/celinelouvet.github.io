import { Center, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { LuMessageCircleWarning } from 'react-icons/lu';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Besoins flous"
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
        <Icon as={LuMessageCircleWarning} boxSize="4em" color="brand.orange" />
      </Center>
      <Stack flex="1" color="brand.300" fontSize="1.25em" gap="1em">
        <Text>Expression d’une solution à la place d’un besoin</Text>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Expression d’une solution à la place d’un besoin</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
