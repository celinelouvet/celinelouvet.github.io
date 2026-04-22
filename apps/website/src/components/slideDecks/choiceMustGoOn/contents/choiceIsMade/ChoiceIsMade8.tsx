import { Center, HStack, Icon, Stack, chakra } from '@chakra-ui/react';
import { LuRepeat2 } from 'react-icons/lu';

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
        <Center position="relative">
          <Icon as={LuRepeat2} boxSize="brand.400" color="brand.500" />
        </Center>
      </Center>
      <Stack flex="1" fontSize="brand.125" gap="brand.100">
        <chakra.span>Itérer tant que le besoin n’est pas satisfait</chakra.span>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
