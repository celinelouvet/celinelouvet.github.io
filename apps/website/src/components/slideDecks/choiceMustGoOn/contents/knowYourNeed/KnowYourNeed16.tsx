import { Center, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { LuEyeOff } from 'react-icons/lu';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Se concentrer sur le futur proche"
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
        <Icon as={LuEyeOff} boxSize="4em" color="brand.orange" />
      </Center>
      <Stack flex="1" fontSize="1.25em" gap="1em">
        <Text>Plus on anticipe, plus ça devient flou</Text>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = <SlideNote>car il est trop lointain</SlideNote>;

const slide = { content, note };
export default slide;
