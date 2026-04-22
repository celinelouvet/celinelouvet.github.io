import { Center, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { LuEyeOff } from 'react-icons/lu';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

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
      gap="brand.300"
    >
      <Center width="20%">
        <Icon as={LuEyeOff} boxSize="brand.400" color="brand.orange" />
      </Center>
      <Stack flex="1" fontSize="brand.125" gap="brand.100">
        <Text>Plus on anticipe, plus ça devient flou</Text>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = <SlideNote>car il est trop lointain</SlideNote>;

const slide = { content, note };
export default slide;
